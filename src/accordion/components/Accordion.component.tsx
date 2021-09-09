import React from 'react';
import { AccordionItem as AccordionItemType } from '../models/AccordionItems.interface';
import { AccordionItem } from './AccordionItem.component';


export const Accordion = ({items}: {items:AccordionItemType[]}) => {
    return(
        <>{items.map((item:AccordionItemType, index: number) => <AccordionItem item={item} initialOpenStatus={index === 0}></AccordionItem>)}</>
    )
}