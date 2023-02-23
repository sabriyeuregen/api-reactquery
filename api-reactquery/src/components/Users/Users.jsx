import { useQuery} from "@tanstack/react-query";
import axios from "axios";

const Cities = () => {
  
    const { data, isLoading, isError } = useQuery(["user"], () => {
       return axios.get("https://jsonplaceholder.typicode.com/users").then((res) => res.data)
    });


  return (
    <div>
      <h1>CİTİES</h1>
        <div>{isLoading && <h1>Loading..</h1>}</div>
        <div>{isError && <h1>There was an error</h1>}</div>
        {JSON.stringify(data)}
        </div>
  )
}

export default Cities;