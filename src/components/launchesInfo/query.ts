import { gql } from "@apollo/client";

export const QUERY_LAUNCH_INFO=gql`
query launchInfo($id:String){
    launch(id:$id){
          flight_number
      mission_name
      launch_year
      launch_success
      details
     links {
        flickr_images
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      }
  
      launch_site {
        site_name
      }
    }
  }
`