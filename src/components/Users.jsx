import React from 'react'
import { useSearchParams } from 'react-router-dom'
function Users(props) {
  const [searchParam, setSearchParams] = useSearchParams();
  const paramRequired = searchParam.get("filter") === "even";
  const Users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (

    <div className='my-5'>
      <button onClick={() => {
        setSearchParams({ filter: "even" })
        props.alert("Even Numbers", "success")
      }}>even users</button>
      <button onClick={() => {
        setSearchParams({ filter: "odd" })
        props.alert("odd Numbers", "success")
      }}>odd users</button>

      {paramRequired ? (
        <div>{Users.filter((elem) => elem % 2 === 0)}</div>
      ) : (
        <div>{Users.filter((elem) => elem % 2 !== 0)}</div>

      )}
    </div>
  )
}
// manipulation via Url
export default Users