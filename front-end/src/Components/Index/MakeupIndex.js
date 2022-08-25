import { useState,useEffect } from 'react'
import MakeupCards from './MakeupCards'
import axios from 'axios'

const API = process.env.REACT_APP_API_URL;

const MakeupIndex = () => {
const [makeups, setMakeups] = useState([])

useEffect(() => {
    axios.get(`${API}/makeups`)
    .then((res) => {
        setMakeups(res.data)
    })
    .catch((error) => {
        console.warn(error)
    })
})

return (
   <div>
    <h1>Makeup Selection</h1>
    {makeups.length > 0
        ? makeups.map((makeup, index) => {
            return  <MakeupCards key={index} makeup={makeup} /> ; 
          })
        : null}
    
   </div>
)

}

export default MakeupIndex;