
const Reviews = ({ comments }) => {
  
    const submitForm = (event) => {
        event.preventDefault();
        const reviewer = event.target.reviewer.value;
        const review = event.target.review.value;

        if(reviewer && review) {
            comments.push({reviewer: reviewer, review: review})
            alert('Thank you for your product review!')
        } else {
            alert('Please fill out the form entirely to submit a product review!')
        }
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
                <button onClick="">Submit your product review!</button>
                </form>
            </div>
        )

}

export default Reviews