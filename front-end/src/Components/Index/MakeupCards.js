

function MakeupCards({ makeup }) {
<section>
    <img src={makeup.image} alt={makeup.item_name} />
    <article>
    <div>{makeup.brand}</div>
    <div>{makeup.category}</div>
    <div>{makeup.price}</div>
    <div>{makeup.is_vegan}</div>
    </article>
</section>
}

export default MakeupCards;