import React, { ReactElement } from 'react';
import { AccordionItems } from '../models/AccordionItems.enum';
import AccordionItem from './AccordionItem';

export const Accordion = ({ children }: { children: JSX.Element[] }): ReactElement => {
  const items = children.filter((item: JSX.Element) => item.type && item.type.name === AccordionItems.AccordionItem);
  return (
    <>
      {items.map((item, index) => {
        return (
          <AccordionItem
            key={item.type.name + index}
            index={`${item.type.name}${index+1}`}
            children={item.props.children}
            initialStatus={item.props.initialStatus}
            title={item.props.title}
          ></AccordionItem>
        );
      })}
    </>
  );
};
