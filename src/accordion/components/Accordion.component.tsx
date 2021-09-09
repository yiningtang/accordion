import React from "react";
import { AccordionItem } from "./AccordionItem.component";

export const Accordion = ({ children }: { children: JSX.Element[] }) => {
    const items = children.filter(item => item.type.name === 'AccordionItem');

    return (<>
        {items.map(item => {
            return <AccordionItem children={item.props.children} initialStatus={item.props.initialStatus} title={item.props.title}></AccordionItem>
        }
        )}
    </>)
}