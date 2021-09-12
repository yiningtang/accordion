import styled from 'styled-components';
import { White, Black, Grey } from '../../variables/colors/colors.constants';

const AccordionItemTitle = styled.div`
  border: 1px solid ${Grey};
  height: 10px;
  padding: 2em;
  box-sizing: border-box;
  color: ${White};
  background: ${Grey};
  &:nth-of-type(1) {
    border-radius: 10px 10px 0px 0px;
  }
  &:nth-last-of-type(2) {
    border-radius: ${(props: { isOpen: boolean }) => (props.isOpen ? '0px' : '0px 0px 10px 10px')};
  }
  &:hover, &.active {
    background: ${Black};
  }
`;

export default AccordionItemTitle;
