import React from "react"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {Link} from "react-router-dom"


export default function CartFunction(){
    const [itemCount, setItemCount]=React.useState(0)

    const handleClickAdd = ()=>{
        setItemCount(itemCount + 1);

        fetch('api/cart/add',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                itemId: item_id,
                userId: user_id,
                quantity:1,
            })
        })
        .then(response =>{
            if (response.ok){
                res.json()
            } else {
                alert('Failed to add to cart table!')
            }
        })
        // .catch(error=>{
            
        // })   
    }

    return (
        <div className="cart">
                <Link to="/cart">
                    <Badge  
                    color="secondary" badgeContent={itemCount}>
                        <ShoppingCartIcon />{" "}
                    </Badge>
                </Link>
                <ButtonGroup>
                    <Button
                        onClick={() => {
                            setItemCount(Math.max(itemCount - 1, 0));
                        }}
                    >
                        {" "}
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                        onClick={handleClickAdd}
                    >
                        {" "}
                        <AddIcon fontSize="small" />
                    </Button>
                </ButtonGroup>

        </div>
    )
}
