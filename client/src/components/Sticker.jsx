import CartFunction from "./CartFunction";


function Sticker({ name, price, image, category }) {
    return (

        <article className="stickerPost">

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

            {/* <CartFunction /> */}

            <FavFunction />

            {/* <button>❤️</button> */}

        </article>
    );
}

export default Sticker