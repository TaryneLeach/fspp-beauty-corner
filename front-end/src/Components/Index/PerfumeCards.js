function PerfumeCards({ makeup }) {
    <section>
        <img src={perfume.image} alt={perfume.item_name} />
        <article>
        <div>{perfume.brand}</div>
        <div>{perfume.scent_type}</div>
        <div>{perfume.fragrance_description}</div>
        <div>{perfume.key_notes}</div>
        <div>{perfume.price}</div>
        <div>{perfume.lomg_lasting}</div>
        </article>
    </section>
    }
    
    export default PerfumeCards;