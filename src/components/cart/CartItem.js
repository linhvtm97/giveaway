import React, { Component } from 'react';

class CartItem extends Component {

    render() {
        var { item } = this.props;
        console.log(item);

        return (
            <tr>
                <th scope="row">1</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <a href="/#">
                        <i className="fas fa-times" />
                    </a>
                </td>
            </tr>
        );
    }
}
export default CartItem;