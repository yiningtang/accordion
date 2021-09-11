import {render, screen} from '@testing-library/react';
import React from 'react';
import { Accordion } from '../components/Accordion.component';
import AccordionItem from '../components/__mocks__/AccordionItem';


jest.mock(`../components/AccordionItem`);

describe('Accordion rendering', () => {
  test('should load accordion items on the page if accordion items are provided on the page', async () => {
    render(<Accordion><AccordionItem key={1}></AccordionItem><AccordionItem key={2}></AccordionItem></Accordion>)
    expect(await screen.queryAllByText('Hello World')).toHaveLength(2);
  });
  test('should not load accordion items on the page if accordion items are not provided on the page', async () => {
    render(<Accordion><p>title</p><p>title</p></Accordion>)
    expect(await screen.queryAllByText('title')).toHaveLength(0);
  })
});



