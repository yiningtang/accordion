const AccordionItemTitle = ({children, onClick}: {children: JSX.Element, onClick: () => {}})=> <div onClick={() => onClick()}>{children}</div>
export default AccordionItemTitle;