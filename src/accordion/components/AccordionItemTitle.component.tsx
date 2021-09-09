import styled from 'styled-components';
import { White, Black } from '../../variables/colors/colors.constants';

export const AccordionItemTitle = styled.div`
border:1px solid ${Black};
height:10px;
padding: 2em;
box-sizing: border-box;
color:${White};
background: ${Black};
&:nth-of-type(1) {
    border-radius: 25px 25px 0px 0px;
}
&:nth-last-of-type(1) {
    border-radius: 0px 0px 25px 25px;
}
`;