import React, { useEffect } from 'react'
import './info.css';
import {LaunchDocument, LaunchInfoQuery, useLaunchInfoQuery, useLaunchQuery} from '../../generated/graphql';
interface Ownp{
    id:String;
}

type infor={
    info:LaunchInfoQuery
}
const Info = ({id}:Ownp) => {
 const {data,error,loading} = useLaunchInfoQuery({variables:{id:String(id)}});
useEffect(()=>{
    console.log(data?.launch?.links?.flickr_images);
    
    
});
if(!data?.launch){
    return(
        <div>wait launch data is being loaded...</div>
    )
}

  else{  return (
        <>
    <div className='info' >
        
        <div>
        {data?.launch?.flight_number ? (<p>{`Flight Number :${data?.launch?.flight_number }` }</p>) :''}
        {data?.launch?.mission_name ? (
            
        <p>{`Mission Name :${data?.launch?.mission_name}` }</p>
        ):(<div>select a launch  to see detail </div>)}
        {
            data?.launch?.launch_year ? (<p>{`Launch year :${data?.launch?.launch_year}` }</p>
            ):''
        }  
        {
            data?.launch?.launch_site?.site_name ? (
                <p>{`Launch Site :${data?.launch?.launch_site?.site_name}` }</p>
       
            ):''
        }
        {
            data?.launch?.rocket?.rocket_name ? (
                <p>{`Rocket Name :${data?.launch?.rocket?.rocket_name}` }</p>
      
            ):''
        }

        {
            data?.launch?.launch_success ? (
<p>{`Mission Success :${String(data?.launch?.launch_success)}` }</p>
        
            ):''
        }

        {
            data?.launch?.details ? (
<p>{`Mission Detail :${data?.launch?.details}` }</p>
        
            ):''
        }
        </div>
        <div className='imgcon'>
        
            {
                data?.launch?.links?.flickr_images?.map((val:any,index)=>(
                <div className='img'>    <img className='im' src={val} key={index} alt={`${data.launch?.mission_name}`}/>
                </div>
                    ))

            }
        </div>
    </div>
    </>
 )}
}

export default Info
