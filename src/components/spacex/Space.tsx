import React, { useCallback, useState } from 'react'
import Index from '../launches';
import Info from '../launchesInfo/Info';
import './space.css';
const Space = () => {
    const [id,setid]=useState('');
  const handleIdChange = useCallback((newId:any) => {
    setid(newId);
  }, []);
  return (
    <div className='container2'>
      <Index handleIdChange={handleIdChange} ></Index>
      <Info id={id}></Info>
    </div>
  )
}

export default Space
