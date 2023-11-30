import React from 'react';
import './Values.css'; // Make sure to create a corresponding CSS file
import PhotoFrame from './PhotoFrame';
import Divider from './Divider';
import { colors } from '../themes/colors';
// import { values } from '../data/values';


const Paragraph = ({ text }) => <p>{text}</p>;
const List = ({ items }) => (
  <ul>
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
);
const Values = ({values,readmore}) => {
  return (
    <div className="container">
       <div className="content-container">
      {values.map((section, index) => (
        <div className="section" key={index}>
          <div className="header">
          {section.icon &&   <div className="icon" style={{ backgroundImage: `url(${section.icon})` }}></div>}
            <h2 style={{color:`${colors.titleColor}`}}>{section.title}</h2>
          </div>
          {section.content.map((item, idx) => {
            // // Check if the content item is an array (for the list of subprograms)
            // if (Array.isArray(item)) {
            //   return (
            //     <ul key={idx}>
            //       {item.map((subItem, subIndex) => (
            //         <li key={subIndex}>{subItem}</li>
            //       ))}
            //     </ul>
            //   );
            // }
            if(typeof item === 'object' && item.type === 'html')
            {
                
                    return <div key={idx} dangerouslySetInnerHTML={{ __html: item.htmlContent }} />;
                  
            }
            // Otherwise, it's a string (the paragraph)
            return <p key={idx}>{item}</p>;
          })}
        {readmore &&   <a href={section.link}>READ MORE</a>}
          <Divider color='blue'/>
        </div>
      ))}
      </div>
   <div className="image-container">
   <img src={'https://yesj.org/assets/images/group-1.jpg'}/>
      <img src={'https://yesj.org/assets/images/group-2.jpg'}/>
   </div>
     
    </div>
  );
};

export default Values;