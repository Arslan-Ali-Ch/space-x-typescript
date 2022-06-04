import { gql } from "@apollo/client";

export const QUERY_LAUNCH=gql`
query launch{
    launches {
        flight_number
      launch_year
      launch_date_local
      launch_success
     
    }
   
  
  }
`