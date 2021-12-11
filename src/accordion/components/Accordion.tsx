import React, { ReactElement } from 'react';
import AccordionItem from './AccordionItem';

export const Accordion = ({ children }: { children: JSX.Element[] }): ReactElement => {
  return (
    <>
      {children.map((item, index) => {
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
