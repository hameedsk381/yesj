import {  SimpleGrid } from "@mantine/core";

import Program from "./Program";
const programs = [
  {
    id: 1,
    title: 'PEP',
    description: 'Personal Enhancement Programmes',
    imageUrl: 'https://yesj.org/assets/images/p1.png', // Replace with the actual path to the PEP image
    hoverColor: '#a2d5f2', // Example hover color, replace with actual color
  },
  {
    id: 2,
    title: 'MAGIC',
    description: 'Men & Women Aiming at Greater Initiatives for Change',
    imageUrl: 'https://yesj.org/assets/images/p2.png', // Replace with the actual path to the MAGIC image
    hoverColor: '#fcbad3', // Example hover color, replace with actual color
  },
  {
    id: 3,
    title: 'MuST',
    description: 'Multi Skill Training',
    imageUrl: 'https://yesj.org/assets/images/p3.png', // Replace with the actual path to the MuST image
    hoverColor: '#ffffd1', // Example hover color, replace with actual color
  },
  {
    id: 4,
    title: 'SS',
    description: 'Summer Shapes',
    imageUrl: 'https://yesj.org/assets/images/p4.png', // Replace with the actual path to the SS image
    hoverColor: '#c1e1c5', // Example hover color, replace with actual color
  },
  {
    id: 5,
    title: 'Yuvaotsavaalu',
    description: 'YES-I\'s Youth Festival',
    imageUrl: 'https://yesj.org/assets/images/p5.png', // Replace with the actual path to the Yuvaotsavaalu image
    hoverColor: '#beebe9', // Example hover color, replace with actual color
  },
  {
    id: 6,
    title: 'VIP',
    description: 'Voluntary Immersion Programme',
    imageUrl: 'https://yesj.org/assets/images/p6.png', // Replace with the actual path to the VIP image
    hoverColor: '#fde2e4', // Example hover color, replace with actual color
  },
  {
    id: 6,
    title: 'SSP',
    description: 'Scholar support Programme',
    imageUrl: 'https://yesj.org/assets/images/p7.png', // Replace with the actual path to the VIP image
    hoverColor: '#fde2e4', // Example hover color, replace with actual color
  },
];


export default function ProgramsGrid() {
  return (
    <div>
        
          <SimpleGrid cols={{ base: 1, md: 4 }} spacing={25}>
          {programs.map((item,index)=>{
            return (
                <Program key={item.id} title={item.title} desc={item.description} poster={item.imageUrl} eventnum={index + 1}/> 
            )
          })}
              </SimpleGrid>
        </div>
  );
}