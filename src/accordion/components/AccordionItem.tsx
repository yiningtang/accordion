import React, { ReactElement, useState } from 'react';
import AccordionItemContentTemplate from './AccordionItemContentTemplate';
import AccordionItemTitle from './AccordionItemTitle';

const AccordionItem = ({
  index,
  children,
  initialStatus = false,
  title = '',
}: {
  index:string,
  children: JSX.Element[] | JSX.Element;
  initialStatus?: boolean;
  title: string;
}): ReactElement => {
  const [isOpen, toggleOpenStatus] = useState<boolean>(initialStatus);
  return (
    <>
      <AccordionItemTitle className={isOpen? 'active': ''} isOpen={isOpen} onClick={() => toggleOpenStatus(!isOpen)}>
        {title}
      </AccordionItemTitle>
      {<AccordionItemContentTemplate data-testid={index} index={index} isOpen={isOpen}>{children}</AccordionItemContentTemplate>}
    </>
  );
};

export default AccordionItem;
