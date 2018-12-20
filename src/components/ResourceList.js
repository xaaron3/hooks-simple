import React, { useState, useEffect } from 'react';
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

const ResourceList = ({ resource }) => {
   const resources = useResources(resource)

   return (
      <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
   )
}

export default ResourceList;

// issue without hooks, writing multiple lifecycles
// class ResourceList extends React.Component {
//    state = { resources: [] }

//    async componentDidMount() {
//       const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

//       this.setState({ resources: response.data })
//    }

//    async componentDidUpdate(prevProps) {
//       if (prevProps.resource !== this.props.resource) {
//          const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
//          this.setState({ resources: response.data })
//       }
//    }

//    render() {
//       if (this.state.resources.length < 100) {
//          return <div>Loading...</div>
//       }

//       return <div>{this.state.resources.length}</div>
//    }
// }

// export default ResourceList;