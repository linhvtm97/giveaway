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
                            {this.props.children}
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