import { useState } from 'react';
import styled from 'styled-components';
import { Grey } from '../../variables/colors/colors.constants';
import { AccordionItemTitle } from './AccordionItemTitle.component';
import { AccordionItem } from '../models/AccordionItems.interface';

const AccordionItemContentTemplate = styled.div
    `max-height: ${(props: { isOpen: boolean }) => props.isOpen ? '100vh' : 0}};
     opacity: ${(props: { isOpen: boolean }) => props.isOpen ? 1 : 0};
     transition: all 0.5s;
     border: 1px solid ${Grey};
     `
const AccordionItem = ({ children, initialStatus = false, title = "" }: { children: JSX.Element[] | JSX.Element, initialStatus?: boolean, title: string }) => {
    const [isOpen, toggleOpenStatus] = useState<boolean>(initialStatus);
    return (<><AccordionItemTitle isOpen={isOpen} onClick={() => toggleOpenStatus(!isOpen)}>{title}</AccordionItemTitle>{<AccordionItemContentTemplate isOpen={isOpen}>{isOpen ? children : null}</AccordionItemContentTemplate>}</>)
}

export default AccordionItem;
