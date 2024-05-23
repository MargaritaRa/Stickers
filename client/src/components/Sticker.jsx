function Sticker({ name, price, image, category }) {
    return (
        <article className="sticker">
            <div className="sticker-img">
                <img src={image} alt={name} />
            </div>
            <div className="sticker-footer">
                <h3>{name}</h3>
            </div>
            <div className="sticker-footer">
                <h4>{price}</h4>
            </div>
            <div className="sticker-footer">
                <h4 className="category">{category}</h4>
            </div>
        </article>
    );
}

export default Sticker