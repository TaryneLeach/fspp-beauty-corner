import { useState } from 'react'
import React from 'react'
import './New.css'
const UserFavorites = () => {

    const [userBeauty, setUserBeauty] = useState({
        image: '',
        name: '',
        brand: '',
        category: '',
        price: 0
    })

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setUserBeauty(userBeauty)
        alert(`Form submitted!`);
        
       event.target.reset()
    }
    
  

        return (
            <section>
              <h1>Your Favorites</h1>
              <br></br>
                <img className="your-favorite-img"src="https://www.byrdie.com/thmb/xwUA98uG7d1jZ7ZMfGKvZ3sS5ko=/700x394/smart/filters:no_upscale()/ScreenShot2020-08-17at2.41.15PM-ef2c92974c3748d0b91b59710e6a1183.jpg" alt="" />
                <br></br>
                <br></br>
                <h2>
                    Thank you for looking at my favorite beauty products! Now its your
                    turn! In the form below tell me what your favorite beauty products
                    are!
                </h2>
                <br></br>
                <form onSubmit={handleFormSubmit} className='form'>
                    <label htmlFor='image'>Image</label>
                    <br></br>
                    <input type="text" id="image" placeholder="Image" required />
                    <br></br>
                    <br></br>
                    <label htmlFor='item_name'>Name</label>
                    <br></br>
                    <input type='text' id='item_name' placeholder='Item Name' required />
                    <br></br>
                    <br></br>
                    <label htmlFor='brand'>Brand</label>
                    <br></br>
                    <input type='text' id='brand' placeholder='Brand' required />
                    <br></br>
                    <br></br>
                    <label htmlFor='category'>Category</label>
                    <br></br>
                    <input type='text' id='category' placeholder='Category' required />
                    <br></br>
                    <br></br>
                    <label htmlFor='price'>Price</label>
                    <br></br>
                    <input type='number' id='price' placeholder='Price' required />
                    <br></br>
                    <br></br>
                    <button type='submit'>Submit your beauty faves!</button>
                </form>
            </section>
        );
    }


export default UserFavorites;
