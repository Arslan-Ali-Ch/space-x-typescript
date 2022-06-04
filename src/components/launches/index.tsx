import React, { useState } from 'react'
import './launch.css';
import { useLaunchQuery} from '../../generated/graphql';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Chip } from '@mui/material';





interface OwnProps {
  handleIdChange: (newId: any) => void;
}

const Index = (props:OwnProps) => {
  const { data, loading, error } = useLaunchQuery();
  const [id,setid]=useState();
  
  
  function abc(val:any){
    setid(val!==id? val:null)
  }
  
if(loading){
  return(
    <div>Loading....</div>
  )
}
if(error){
  return(
    <div>Something went wrong try latter</div>
  )
}

  return (
    <div className='launch'>
      {
        data?.launches?.map((value,ind)=>(
       
        <List  
        aria-label="contacts">
          <ListItem disablePadding>
          <ListItemButton   onClick={()=>props.handleIdChange(value?.flight_number)}>
          <ListItemText primary=  {`${value?.flight_number} : ${ value?.launch_date_local} ${value?.launch_year} : ${ value?.launch_success}`} 
            />
          </ListItemButton>
          </ListItem>
          
    <Divider/>
        </List>


          ))
      }    
    </div>
  )
}

export default Index
