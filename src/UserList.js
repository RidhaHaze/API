import { useEffect, useState } from "react"
import UserCard from './UserCard'
import { Box } from '@mui/material'
function UserList() {
    const [users,setUsers]=useState([])
useEffect(()=>{
    const fetchData=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
        .catch(err=>console.log(err))
    }
    fetchData()
},[])

    return ( 
       <Box sx={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",width:"90%",margin:"50px 30px 30px",gap:"30px"}}>
        { 
        users.map(user=> < UserCard key={user.id}{...user}/> )
        }
        </Box>
     )
}

export default UserList