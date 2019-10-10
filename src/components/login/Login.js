// import React from 'react';
import React, { Component } from 'react';
import Axios from 'axios';
// import './Login.css'
// import { connect } from 'react-redux';

// function Login() {
//     return (
//         <div>
//             {/* log in */}
//             <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-hidden="true">
//                 <div className="modal-dialog" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title text-center">Log In</h5>
//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">×</span>
//                             </button>
//                         </div>
//                         <div className="modal-body">
//                             <form action="#" method="post">
//                                 <div className="form-group">
//                                     <label className="col-form-label">Username</label>
//                                     <input type="text" className="form-control" placeholder=" " name="Name" required />
//                                 </div>
//                                 <div className="form-group">
//                                     <label className="col-form-label">Password</label>
//                                     <input type="password" className="form-control" placeholder=" " name="Password" required />
//                                 </div>
//                                 <div className="right-w3l">
//                                     <input type="submit" className="form-control" defaultValue="Log in" />
//                                 </div>
//                                 <div className="sub-w3l">
//                                     <div className="custom-control custom-checkbox mr-sm-2">
//                                         <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
//                                         <label className="custom-control-label" htmlFor="customControlAutosizing">Remember me?</label>
//                                     </div>
//                                 </div>
//                                 <p className="text-center dont-do mt-3">Don't have an account?
//                                 <a href="#" data-toggle="modal" data-target="#exampleModal2">
//                                         Register Now</a>
//                                 </p>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            email: '',
            password: '',
            users: [],
            count: 0,
            error: null,
            isLoggedIn: false,
        }
    }

    componentDidMount() {
        Axios.get('https://giveawayapi.herokuapp.com//api/v1/auth/login')
            .then(res => {
                const users = res.data;
                console.log(users);
                // this.setState({ users });
                // users.map(user => {
                //     localStorage.setItem(user.email, user.id);
                // })
            })
    }

    checkSignIn = () => {
        this.state.users.map(user => {
            if ((user.email === this.state.email) && (user.password === this.state.password)) {
                this.setState({
                    count: this.state.count + 1,
                    name: user.name,
                    email: user.email,
                    id: user.id,
                })
            }
            return this.state.count;
        })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        decodeURI()
        if (this.state.count !== 0) {
            decodeURI()
            // let user = {
            //     id: localStorage.getItem(this.state.email),
            //     name: this.state.name,
            //     email: this.state.email,
            //     password: this.state.password,
            // }
            // console.log(user);
            // localStorage.setItem('current_user', JSON.stringify(user))

            // this.setState({
            //     count: 0,

            // })
            // this.setState(prevState => ({
            //     isLoggedIn: !prevState.isLoggedIn
            // }))
            window.location.replace("/");
        }
        else {
            this.setState({ error: 'Invalid email or password' });
        }
    }

    render() {
        return (
            <div>
                <section className="login-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 login-sec">
                                {this.state.error}
                                <h2 className="text-center">Login Now</h2>
                                <form className="login-form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label className="col-form-label">Username</label>
                                        <input type="text" className="form-control" placeholder=" " name="email" required onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Password</label>
                                        <input type="password" className="form-control" placeholder=" " name="password" required onChange={this.handleChange} />
                                    </div>
                                    <div className="right-w3l">
                                        <input type="submit" className="form-control" defaultValue="Log in" />
                                    </div>
                                    <div className="sub-w3l">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                            <label className="custom-control-label" htmlFor="customControlAutosizing">Remember me?</label>
                                        </div>
                                    </div>
                                    <p className="text-center dont-do mt-3">Don't have an account?
                                <a href="#" data-toggle="modal" data-target="#exampleModal2">
                                            Register Now</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         currentUser: state.currentUser
//     }
// }

// export default connect(mapStateToProps, null)(Login);
export default Login;