import styled from 'styled-components';

export const AccordionItemHeader = styled.div`
border:1px solid #000;
height:50px;
padding: 2em;
border-sizing: border-box;
color: #fff;
background: #000;
&:nth-of-type(1) {
    border-radius: 25px 25px 0px 0px;
}
&:nth-last-of-type(1) {
    border-radius: 0px 0px 25px 25px;
}
`;