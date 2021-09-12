import React, { ReactElement } from 'react';
import './App.css';
import { mockAccordionItems } from './accordion/mock/AccordionItems.mock';
import AccordionItem from './accordion/components/AccordionItem';
import { Accordion } from './accordion/components/Accordion';

function App(): ReactElement {
  return (
    <div className='accordion-container'>
      <Accordion>
        {mockAccordionItems.map((item, index) => (
          <AccordionItem index={index.toString()} initialStatus={index === 0} title={item.accordionTitle}>
            {item.accordionContent}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default App;

