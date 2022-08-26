import React from 'react'

function PerfumeCards({ perfume }) {
    <section>
        <img src={perfume.image} alt={perfume.item_name} />
        <article>
        <div>{perfume.brand}</div>
        <div>{perfume.scent_type}</div>
        <div>{perfume.fragrance_description}</div>
        <div>{perfume.key_notes}</div>
        <div>{perfume.price}</div>
        <div>{perfume.is_long_lasting}</div>
        </article>
    </section>
    }
    
    export default PerfumeCards;