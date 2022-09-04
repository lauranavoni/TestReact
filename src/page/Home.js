import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import User from '../components/User'



const Home = () => {
    const [users, setUsers]=useState([])
useEffect(() => {
    fetch('https://randomuser.me/api/?results=12')
    .then(res=>res.json())
    .then(data=>{setUsers(data.results)
    console.log(data.results[0].cell
        )})
    }, [])
   
    return (
        <div className="container py-4">
            <Row md={4} className="g-4">
           
            {users.map(user=>(<User key={user.cell} user={user}></User>))}
                
      
            </Row>
      
               
                

        
        </div>
    )
}

export default Home