import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { AccordionItemTitle } from './AccordionItemTitle.component';

const fadeIn = keyframes`
    from { height: 0; }
      to { height: 100%; }`;
const fadeOut = keyframes`
    from { height: 0; }
    to { height: 100%; }`;
const AccordionItemContentTemplate = styled.div
    `animation: ${(props: { isOpen: boolean }) => props.isOpen ? fadeIn : fadeOut} 0.7s;
`



export const AccordionItem = ({ children, initialStatus = false, title = "" }: { children: JSX.Element[] | JSX.Element, initialStatus?: boolean, title: string }) => {
    const [isOpen, toggleOpenStatus] = useState<boolean>(initialStatus);
    return (<><AccordionItemTitle onClick={() => toggleOpenStatus(!isOpen)}>{title}</AccordionItemTitle>{isOpen ? <AccordionItemContentTemplate isOpen={isOpen}>{children}</AccordionItemContentTemplate> : null}</>)
}