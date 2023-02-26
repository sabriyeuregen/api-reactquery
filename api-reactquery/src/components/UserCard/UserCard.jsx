
const UserCard = (props) => {
  return (
    <div>
       <div>{props.name}</div>
       <div>{props.surname}</div> 
       <div>{props.email}</div>
       <div>{props.phone}</div>
    </div>
  )
}

export default UserCard