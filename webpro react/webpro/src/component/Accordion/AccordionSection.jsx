import React from 'react'
import AccordionWrapper from './AccordionWrapper'
import AccordionItem from './AccordionItem'

export default function AccordionSection() {
    const data = [
        {
          "title": "How do you determine the cost of your services?",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a consequat nibh. Mauris suscipit arcu at fermentum convallis. Pellentesque consectetur mi in felis maximus posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a consequat nibh. Mauris suscipit arcu at fermentum convallis. Pellentesque consectetur mi in felis maximus posuere."
        },
        {
          "title": "How do you determine the cost of your services?",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie tellus a maximus tempus. Duis vel leo iaculis, porttitor erat et, posuere erat. Ut blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a consequat nibh. Mauris suscipit arcu at fermentum convallis. Pellentesque consectetur mi in felis maximus posuere."
        },
        {
          "title": "How do you determine the cost of your services?",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, nibh imperdiet tempus pharetra, arcu risus aliquet arcu, a auctor ex lacus efficitur purus. Morbi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a consequat nibh. Mauris suscipit arcu at fermentum convallis. Pellentesque consectetur mi in felis maximus posuere."
        },
        {
          "title": "How do you determine the cost of your services?",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a consequat nibh. Mauris suscipit arcu at fermentum convallis. Pellentesque consectetur mi in felis maximus posuere."
        }
      ];
  return (
    <div className="faq__main__section">
        <div className="container">
        <div className="faq__title">
            <div className="faq__sub_title">
            <p>Faq</p>    
            </div>
            <div className="look__here">
                <h2>Any question<span> "look here"</span></h2>
            </div>
        </div>
        </div>
        
        
        { <AccordionWrapper>
    {data.map((item, index) => (
    

      <AccordionItem key={index} index={index} title={item.title} description={item.description} />
      
    ))}
  </AccordionWrapper>}
  </div>
  )
}
