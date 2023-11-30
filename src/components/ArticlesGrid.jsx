import { Flex } from '@mantine/core'
import React from 'react'
import './ArticlesGrid.css'; 
const articledata = [
    {
      title : "Volume 1",
      date : "AUG-16",
      imgAddress : "https://yesj.org/assets/images/news-img.jpg"
    },
    {
      title : "Volume 1",
      date : "AUG-16",
      imgAddress : "https://yesj.org/assets/images/news-img.jpg"
    },
    {
      title : "Volume 1",
      date : "AUG-16",
      imgAddress : "https://yesj.org/assets/images/news-img.jpg"
    }
    ,{
      title : "Volume 1",
      date : "AUG-16",
      imgAddress : "https://yesj.org/assets/images/news-img.jpg"
    }
  ]
const ArticlesGrid = () => {
  return (
    <Flex wrap={'wrap'} justify={'center'}  py={'2.5rem'} gap={'30px'} align={'center'} >
        {articledata && articledata.map((art,idx)=>{
          return (
            <article className="card" key={idx}>
            <img  src={art.imgAddress} alt="img"  />
           <div className="cardbody">
            <div className="cardcontent">
            <h1>{art.title}</h1>
            <p>{art.date}</p>
            </div>
            <div className="cardfooter">
            <a href="#">Read </a>
            
            </div>
         </div>
                
                    
           
        </article>
          )
         })}
        </Flex>
  )
}

export default ArticlesGrid
