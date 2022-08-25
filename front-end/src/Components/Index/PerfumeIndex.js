import axios from 'axios'
import { useState, useEffect} from 'react-router-dom'
import PerfumeCards from './PerfumeCards'

const PerfumeIndex = () => {
    const API = process.env.REACT_APP_API_URL;
    const [perfumes, setPerfumess] = useState()
    
    useEffect(() => {
        axios.get(`${API}/perfumes`)
        .then((res) => {
            setPerfumes(res.data)
        })
        .catch((error) => {
            console.warn(error)
        })
    })
    
    return (
       <div>
        <h1>Perfume Selection</h1>
        {perfumes.length > 0
            ? perfumes.map((perfume, index) => {
                return  <PerfumeCards key={index} perfume={perfume} /> ; 
              })
            : null}
        
       </div>
    )
}