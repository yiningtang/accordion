import { render, screen, fireEvent, queryByText, wait, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Accordion } from '../components/Accordion.component';
import AccordionItem from '../components/AccordionItem';



jest.mock(`../components/AccordionItemTitle`);
jest.mock(`../components/AccordionItemContentTemplate`)


test('Only show the first accordion item initially', async () => {
    const { container } = render(<Accordion><AccordionItem title='title1' initialStatus={true} key={1}><p aria-label='item'>item1</p><p aria-label='item'>item2</p></AccordionItem><AccordionItem title='title2' key={2}><p aria-label='item'>item3</p><p aria-label='item'>item4</p></AccordionItem></Accordion>)
    const items = await screen.queryAllByLabelText('item');
    const item3 = await screen.queryByText('item3');
    const item4 = await screen.queryByText('item4')
    expect(items).toHaveLength(2);
    expect(item3).toBeNull();
    expect(item4).toBeNull();
});

test('Ellpase the first accordion item after click the first accordion header', async () => {
    render(<Accordion><AccordionItem title='title1' initialStatus={true} key={1}><p aria-label='item'>item1</p><p aria-label='item'>item2</p></AccordionItem><AccordionItem title='title2' key={2}><p aria-label='item'>item3</p><p aria-label='item'>item4</p></AccordionItem></Accordion>)
    let item1 = await screen.queryByText('item1');
    let item2 = await screen.queryAllByText('item2');
    const title1 = await screen.getByText('title1');
    expect(item1).toBeDefined()
    expect(item2).toBeDefined();
    userEvent.click(title1);
    await waitFor(() => {
        const item1 = screen.queryByText('item1');
        const item2 = screen.queryByText('item2');
        expect(item1).not.toBeInTheDocument();
        expect(item2).not.toBeInTheDocument();
    })
});

test('Expand the second accordion item after click the second accordion header, and the first accordion item is still open', async () => {
    render(<Accordion><AccordionItem title='title1' initialStatus={true} key={1}><p aria-label='item'>item1</p><p aria-label='item'>item2</p></AccordionItem><AccordionItem title='title2' key={2}><p aria-label='item'>item3</p><p aria-label='item'>item4</p></AccordionItem></Accordion>)
    const item3 = await screen.queryByText('item3');
    const item4 = await screen.queryByText('item4');
    const title2 = await screen.getByText('title2');
    expect(item3).toBeNull()
    expect(item4).toBeNull()
    userEvent.click(title2);
    await waitFor(() => {
        [1, 2, 3, 4].forEach(i => {
            const item = screen.queryByText(`item${i}`);
            expect(item).toBeInTheDocument();
        });
    })
});