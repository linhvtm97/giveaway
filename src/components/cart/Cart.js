import React, { Component } from 'react';

class Cart extends Component {

    render() {
        return (
            <div>
                {/*Header*/}
                <div className="modal-header">
                    <h4 className="modal-title" id="myModalLabel">
                        Your cart
                    </h4>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                {/*Body*/}
                <div className="modal-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product name</th>
                                <th>Price</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Product 1</td>
                                <td>100$</td>
                                <td>
                                    <a href="/#">
                                        <i className="fas fa-times" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Product 2</td>
                                <td>100$</td>
                                <td>
                                    <a href="/#">
                                        <i className="fas fa-times" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Product 3</td>
                                <td>100$</td>
                                <td>
                                    <a href="/#">
                                        <i className="fas fa-times" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Product 4</td>
                                <td>100$</td>
                                <td>
                                    <a href="/#">
                                        <i className="fas fa-times" />
                                    </a>
                                </td>
                            </tr>
                            <tr className="total">
                                <th scope="row">5</th>
                                <td>Total</td>
                                <td>400$</td>
                                <td />
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/*Footer*/}
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        data-dismiss="modal"
                    >
                        Close
          </button>
                    <button className="btn btn-primary">Checkout</button>
                </div>
            </div>
        );
    }
}
export default Cart;