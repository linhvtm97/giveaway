import React, { Component } from 'react';
import Cart from './../components/cart/Cart';
import CartItem from './../components/cart/CartItem';

class CartContainer extends Component {
    //luu cart vào db va goi db de showcard
    showCartItem = (cart) => {
        // var result;
        console.log(cart);
        return (
            <CartItem
                item={cart}
            />
        );

        // if (cart.length > 0) {
        //      console.log('12321312');

        //     result = cart.map((item, index) => {
        //         return (
        //             <CartItem
        //                 key={index}
        //                 item={item}
        //                 index={index}
        //             />
        //         );
        //     });
        // }
        // return result;
    }
    render() {
        var { cart } = this.props;//goi api lay cart ra 
        console.log(cart);
                
        return (
            <Cart>
                {this.showCartItem(cart)}
            </Cart>
        );

    }
    
}

export default (CartContainer);
