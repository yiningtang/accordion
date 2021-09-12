import { ReactElement } from 'react';

const AccordionItemTitle = ({ children, onClick }: { children: JSX.Element; onClick: () => void}): ReactElement => (
  <div onClick={() => onClick()}>{children}</div>
);
export default AccordionItemTitle;
