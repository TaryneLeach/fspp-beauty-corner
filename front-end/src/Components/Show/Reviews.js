import { useState } from 'react'
import React from 'react'

const Reviews = () => {
    const [ reviewForm, setReviewForm] = useState({
        review: '',
        reviewer: '',    })


        const submitForm = (event) => {
            event.preventDefault();
            setReviewForm(reviewForm)
            alert(`Form submitted!`);
    
            event.target.reset()
           
        }

      
        return (
            <div>
              
    
                <form onSubmit={submitForm}>
                <label htmlFor="name">Name:</label>
                <input 
                id="reviewer"
                type="text"
                />
                <br></br>
                <br></br>
                <label htmlFor="review">Review:</label>
                <input 
                id="review"
                type="text"
                />
                <br></br>
                <br></br>
                
                <button type="submit">Submit your product review!</button>
                </form>
            </div>
        )

}

export default Reviews