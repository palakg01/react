import './index.css';
import React from 'react';
import Card from './Card';
import ArrofObj from './ArrofObj';

export default function App(){
  return(
    <>
      <h1 className="heading">TOP libraries and FRAMEWORKS</h1>
      {
      ArrofObj.map(cval=>{
      return(
        <Card
          key={cval.id}
          imgsrc={cval.imgsrc}
          title={cval.title}
          link={cval.link}
          info={cval.info}
          />
        );
      })}
      }
    </>   
  );
}
