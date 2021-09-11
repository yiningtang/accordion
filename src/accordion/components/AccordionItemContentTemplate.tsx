import styled from 'styled-components';
import { Grey } from '../../variables/colors/colors.constants';

const AccordionItemContentTemplate = styled.div
    `max-height: ${(props: { isOpen: boolean }) => props.isOpen ? '100vh' : 0}};
     opacity: ${(props: { isOpen: boolean }) => props.isOpen ? 1 : 0};
     transition: all 0.5s;
     border: 1px solid ${Grey};
     `;
export default AccordionItemContentTemplate;