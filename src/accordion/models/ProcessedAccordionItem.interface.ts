import { AccordionItemPosition } from "./AccordionItemPosition.enum";
import { AccordionItem } from "./AccordionItems.interface";

export interface ProcessedAccordionItem extends AccordionItem {
    position: AccordionItemPosition
}

