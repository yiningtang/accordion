import React from 'react';
import './App.css';
import { mockAccordionItems } from './accordion/mock/AccordionItems.mock';
import AccordionItem from './accordion/components/AccordionItem';
import { Accordion } from './accordion/components/Accordion.component';

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
