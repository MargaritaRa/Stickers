import CartFunction from "./CartFunction";


function Sticker({itemId, userId, name, price, image, category, onDelete, inCart }) {



    return (

        <article className="stickerPost">
            <div className="sticker-img">
                <img src={image} alt={name} />
            </div>
            <div className="sticker-footer">
                <h3>{name}</h3>
                <h4>${price}</h4>
                <h4 className="category">{category}</h4>
            </div>
            {inCart ? (
                <button onClick={() => onDelete(itemId)} className="btn-delete">Remove from Cart</button>
            ) : (
                <CartFunction userId={userId} itemId={itemId} />
            )}
        </article>
    );
}

export default Sticker