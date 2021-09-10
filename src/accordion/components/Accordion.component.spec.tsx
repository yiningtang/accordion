import {render, screen} from '@testing-library/react';
import React from 'react';
import { AccordionItem}  from '../mock/AccordionItem.component.mock';
import { Accordion } from './Accordion.component';


jest.mock(`./AccordionItem.component`, () =>  () => <div>Hello World</div>);

describe('Accordion rendering', () => {
  test('should loads accordion items on the page if accordion items are provided on the page', async () => {
    render(<Accordion><AccordionItem key={1}></AccordionItem><AccordionItem key={2}></AccordionItem></Accordion>)
    expect(await screen.queryAllByText('Hello World')).toHaveLength(2);
  });
  test('should not loads accordion items on the page if accordion items are not provided on the page', async () => {
    render(<Accordion><p>title</p><p>title</p></Accordion>)
    expect(await screen.queryAllByText('title')).toHaveLength(0);
  })
});


