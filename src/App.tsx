import React from 'react';
import './App.css';
import AccordionItem from './accordion/components/AccordionItem.component';
import { Accordion } from './accordion/components/Accordion.component';
import { mockAccordionItems } from './accordion/mock/AccordionItems.mock';

function App() {
  return (
    <div className="accordion-container">
      <Accordion>
        {mockAccordionItems.map((item ,index)=> {
         return <AccordionItem initialStatus={index === 0} title={item.accordionTitle}>
           {item.accordionContent}
        </AccordionItem>
        })}
      </Accordion>
    </div>
  );
}

export default App;
