import { AccordionItem as AccordionItemType } from '../models/AccordionItems.interface';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { AccordionItemHeader } from './AccordionItemHeader.component';

const fadeIn = keyframes`
    from { opacity: 0; }
      to { opacity: 1; }`; 
const fadeOut = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }`;
const AccordionItemContentTemplate = styled.div
    `animation: ${(props: { isOpen: boolean }) => props.isOpen ? fadeIn : fadeOut} 0.7s;
`

export const AccordionItem = ({ item, initialOpenStatus }: { item: AccordionItemType, initialOpenStatus: boolean }) => {
    const [isOpen, toggleOpenState] = useState<boolean>(initialOpenStatus)
    return (<>
        <AccordionItemHeader onClick={() => toggleOpenState(!isOpen)}>{item.accordionHeader}</AccordionItemHeader>
        {isOpen ? <AccordionItemContentTemplate isOpen={isOpen}> <div>{item.accordionContent.map(content => <div>{content}</div>)}</div></AccordionItemContentTemplate> : null}
    </>)
}