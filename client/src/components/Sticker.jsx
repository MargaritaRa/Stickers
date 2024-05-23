import CartFunction from "./CartFunction";
import FavFunction from "./FavFunction"

function Sticker({ name, price, image, category }) {
    return (

        <article className="stickerPost">
             <h4>🍭 This is A Sticker Item</h4>

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

            <button>Add to cart</button>
            <button>❤️</button>

            <CartFunction />
<<<<<<< HEAD
            <FavFunction />

            {/* <button>❤️</button> */}
=======
>>>>>>> c0513f74968e9d194113f1e4eaad2b6f47e021a6

        </article>
    );
}

export default Sticker