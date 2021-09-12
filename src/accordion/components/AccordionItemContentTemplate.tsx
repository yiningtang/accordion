import styled from 'styled-components';

const AccordionItemContentTemplate = styled.div`max-height: ${(props: { isOpen: boolean, index: string}) => (props.isOpen ? '100vh' : 0)}};
     opacity: ${(props: { isOpen: boolean }) => (props.isOpen ? 1 : 0)};
     transition: all 0.5s;
     visibility: ${(props: {isOpen: boolean}) => (props.isOpen? 'visible': 'hidden')};
     border: 1px solid transparent;`;
export default AccordionItemContentTemplate;
