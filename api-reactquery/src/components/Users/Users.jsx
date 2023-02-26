import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UserCard from "../UserCard/UserCard";

const Users = () => {

  const { data, isLoading, isError } = useQuery(["user"], () => {
    return axios.get("https://jsonplaceholder.typicode.com/users").then((res) => res.data)
  });

  const userList = data.map((user) => (
    <div
      id={user.id}
      name={user.name}
      surname={user.surname}
      email={user.email}
      address={user.address}
      phone={user.phone}
      geo={user.geo}

    />
  ));

  return (
    <div>
      <div>{isLoading && <h1>Loading..</h1>}</div>
      <div>{isError && <h1>There was an error</h1>}</div>
      <div>{userList}</div>
    </div>
  );
};

export default Users;
