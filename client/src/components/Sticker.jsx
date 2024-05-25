import CartFunction from "./CartFunction";

import { DragHandle } from "@material-ui/icons";

function Sticker({itemId, userId, name, price, image, category }) {

    // function handleClick(event) {
    //     event.preventDefault();
    //     fetch('/api/carts', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    //         body: JSON.stringify({userId, itemId})
    //     })
    // }

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
        <CartFunction userId={userId} itemId={itemId}/>
  

        </article>
    );
}

export default Sticker