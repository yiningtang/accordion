import { render, screen } from '@testing-library/react';
import React from 'react';
import AccordionItem from '../components/AccordionItem';

jest.mock('../components/AccordionItemTitle');
jest.mock('../components/AccordionItemContentTemplate')

describe('Accordion item rendering',() => {
  test('should show accordion items if the initial status of the accordion item is true', async () => {
    const mockChildren = <><p>item1</p><p>item2</p></>
    render(<AccordionItem children={mockChildren} initialStatus={true} title='title1'></AccordionItem>);
    expect(await screen.queryAllByText('title1')).toHaveLength(1);
  });

  test('should not show accordion items if the initial status of the accordion item is false or not provided', async () => {
    const mockChildren = <><p>item1</p><p>item2</p></>
    render(<AccordionItem children={mockChildren} initialStatus={false} title='title1'></AccordionItem>);
    expect(await screen.queryAllByText('title1')).toHaveLength(1);
    expect(await screen.queryAllByText('content')).toHaveLength(0);
  });
})

