import { useState, useEffect } from 'react';
import axios from 'axios';


const useResources = resource => {
   const [resources, setResources] = useState([])
      // updates with useEffect() hook, everytime comp is rendered, this is called
   useEffect(
      () => {
         (async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
   
         setResources(response.data)
      })(resource)
   }, [resource])

   return resources
}

export default useResources