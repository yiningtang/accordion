import { AccordionItem } from "../models/AccordionItems.interface";

export const mockAccordionItems: AccordionItem[] = [
    {
        accordionTitle: 'Collapsible item 1',
        accordionContent:
            <>
                <section>Exquisite cordially <strong>mr happiness of neglected</strong> distrusts.</section>
                <br></br>
                <section>Boisterous impossible unaffected he me everything.</section>
            </>
    },
    {
        accordionTitle: 'Collapsible item 2',
        accordionContent:
            <>
                <ul>
                    <li>Exquisite cordially mr happiness of neglected distrusts.</li>
                    <li>Boisterous impossible unaffected he me everything.</li>
                    <li>Boisterous impossible unaffected he me everything.</li>
                </ul>
            </>
    },
    {
        accordionTitle: 'Collapsible item 3',
        accordionContent:
            <>
                <p>Exquisite cordially mr happiness of neglected distrusts.</p>
                <p>Boisterous impossible unaffected he me everything.</p>
                <p>Boisterous impossible unaffected he me everything.</p>
            </>
    },
    {
        accordionTitle: 'Collapsible item 4',
        accordionContent:
            <>
                <p>Exquisite cordially mr happiness of neglected distrusts.</p>
                <strong>Boisterous impossible unaffected he me everything.</strong>
            </>
    },
    {
        accordionTitle: 'Collapsible item 5',
        accordionContent:
            <>
                <p>Exquisite cordially mr happiness of neglected distrusts.</p>
                <p>Boisterous impossible unaffected he me everything.</p>
            </>
    }
]