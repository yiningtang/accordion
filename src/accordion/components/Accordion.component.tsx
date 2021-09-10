import React from "react";
import { AccordionItems } from "../models/AccordionItems.enum";
import AccordionItem from "./AccordionItem.component";


export const Accordion = ({ children }: { children: JSX.Element[] }) => {
    const items = children.filter((item: JSX.Element) => item.type && item.type.name === AccordionItems.AccordionItem);
    return (<>
        {items.map(item => {
            return <AccordionItem key={item.key} children={item.props.children} initialStatus={item.props.initialStatus} title={item.props.title}></AccordionItem>
        })}
    </>)
}