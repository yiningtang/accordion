import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Accordion } from '../components/Accordion';
import AccordionItem from '../components/AccordionItem';

jest.mock(`../components/AccordionItemTitle`);

describe('Accordion is expanding/collapsing as expected', () => {
  test('Only show the first accordion item initially', async () => {
      render(
      <Accordion>
        <AccordionItem index='AccordionItem1' title='title1' initialStatus={true} key={'1'}>
          <p aria-label='item'>item1</p>
          <p aria-label='item'>item2</p>
        </AccordionItem>
        <AccordionItem index='AccordionItem2' title='title2' key={'2'}>
          <p aria-label='item'>item3</p>
          <p aria-label='item'>item4</p>
        </AccordionItem>
      </Accordion>,
    );
    const accordionItem1 = await screen.queryByTestId('AccordionItem1');
    const accordionItem2 = await screen.queryByTestId('AccordionItem2');
    expect(accordionItem1).toHaveStyle('visibility: visible')
    expect(accordionItem2).toHaveStyle('visibility:hidden');
  });

  test('Collapase the first accordion item after click the first accordion header', async () => {
    render(
      <Accordion>
        <AccordionItem index='AccordionItem1' title='title1' initialStatus={true} key={'1'}>
          <p aria-label='item'>item1</p>
          <p aria-label='item'>item2</p>
        </AccordionItem>
        <AccordionItem index='AccordionItem2' title='title2' key={'2'}>
          <p aria-label='item'>item3</p>
          <p aria-label='item'>item4</p>
        </AccordionItem>
      </Accordion>,
    );
    const title1 = screen.getByText('title1');
    [1, 2].forEach(i => {
      const item = screen.queryByText(`item${i}`);
      expect(item).toBeDefined();
    });
    userEvent.click(title1);
    await waitFor(() => {
      [1, 2].forEach(i => {
        const accordionItem = screen.queryByTestId(`AccordionItem${i}`)
        expect(accordionItem).toHaveStyle('visibility:hidden')
      });
    });
  });

  test('Expand the second accordion item after click the second accordion header, and the first accordion item is still open', async () => {
    render(
      <Accordion>
        <AccordionItem index='AccordionItem1' title='title1' initialStatus={true} key={'1'}>
          <p aria-label='item'>item1</p>
          <p aria-label='item'>item2</p>
        </AccordionItem>
        <AccordionItem index='AccordionItem2'title='title2' key={'2'}>
          <p aria-label='item'>item3</p>
          <p aria-label='item'>item4</p>
        </AccordionItem>
      </Accordion>,
    );
    const accordionItem2 = screen.queryByTestId('AccordionItem2')
    const title2 = screen.getByText('title2');
    expect(accordionItem2).toHaveStyle('visibility:hidden');
    userEvent.click(title2);
    await waitFor(() => {
      [1, 2].forEach(i => {
        const accordionItem = screen.queryByTestId(`AccordionItem${i}`);
        expect(accordionItem).toHaveStyle('visibility:visible')
      });
    });
  });
});
