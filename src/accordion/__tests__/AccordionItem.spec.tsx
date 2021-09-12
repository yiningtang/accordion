import React from 'react';
import { render, screen } from '@testing-library/react';
import AccordionItem from '../components/AccordionItem';

jest.mock('../components/AccordionItemTitle');
jest.mock('../components/AccordionItemContentTemplate');

describe('Accordion item rendering', () => {
  test('should show accordion items if the initial status of the accordion item is true', () => {
    const mockChildren = (
      <>
        <p>item1</p>
        <p>item2</p>
      </>
    );
    render(<AccordionItem index='1' children={mockChildren} initialStatus={true} title='title1'></AccordionItem>);
    expect(screen.queryAllByText('title1')).toHaveLength(1);
  });

  test('should not show accordion items if the initial status of the accordion item is false or not provided', () => {
    const mockChildren = (
      <>
        <p>item1</p>
        <p>item2</p>
      </>
    );
    render(<AccordionItem index='1' children={mockChildren} initialStatus={false} title='title1'></AccordionItem>);
    expect(screen.queryAllByText('title1')).toHaveLength(1);
    expect(screen.queryAllByText('content')).toHaveLength(0);
  });
});
