import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import SwappiCard from './SwappiCard'
function Challenge(){
    const [peoples,setPeoples]=useState([])
    useEffect(()=>{
        const fetchData=()=>{
            fetch("https://swapi.dev/api/people/")
            .then(res=>res.json())
            .then(data=>setPeoples(data.results))
            .catch(err=>console.log(err))
        }
        fetchData()
    },[])
    return(
        <Box sx={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",width:"90%",margin:"50px 30px 30px",gap:"30px"}}>
            {
peoples.map((person,idx)=><SwappiCard key={idx}{...person}/>)
            }
        </Box>
    )
}
export default Challenge