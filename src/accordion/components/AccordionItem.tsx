import React, { useState } from 'react';
import AccordionItemContentTemplate from './AccordionItemContentTemplate';
import AccordionItemTitle from './AccordionItemTitle';


const AccordionItem = ({ children, initialStatus = false, title = "" }: { children: JSX.Element[] | JSX.Element, initialStatus?: boolean, title: string }) => {
    const [isOpen, toggleOpenStatus] = useState<boolean>(initialStatus);
    return (<><AccordionItemTitle isOpen={isOpen} onClick={() => toggleOpenStatus(!isOpen)} >{title}</AccordionItemTitle>{<AccordionItemContentTemplate isOpen={isOpen}>{isOpen ? children : null}</AccordionItemContentTemplate>}</>)
}

export default AccordionItem;
