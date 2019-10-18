// import React from 'react';
import React, { Component } from 'react';
import Axios from 'axios';

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
        this.handleSubmit = this.handleSubmit.bind(this)
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
        console.log(this.state)


        // if (this.state.count !== 0) {
        //     decodeURI()
        //     console.log(this.state)
        //     let user = {
        //         id: localStorage.getItem(this.state.email),
        //         name: this.state.name,
        //         email: this.state.email,
        //         password: this.state.password,
        //     }
        //     console.log(user);
        //     localStorage.setItem('current_user', JSON.stringify(user))

        //     this.setState({
        //         count: 0,

        //     })
        //     this.setState(prevState => ({
        //         isLoggedIn: !prevState.isLoggedIn
        //     }))
        //     window.location.replace("/");
        // }
        // else {
        //     console.log(this.state)
        //     this.setState({ error: 'Invalid email or password' });
        // }
        console.log(this.state.email)
        console.log(this.state.password)
        Axios.post('https://giveawayapi.herokuapp.com//api/v1/auth/login', {
            username: this.state.email,
            password: this.state.password
        })
            .then(res => {
                const users = res.data;
                console.log(users);
                window.location.replace("/");

                // this.setState({ users });
                // users.map(user => {
                //     localStorage.setItem(user.email, user.id);
                // })
            })
    }

    render() {
        return (
            <div>
                <section className="login-block">
                    <div className="d-flex justify-content-center container ">
                        <div className="row">
                            <div className="col-md-16 login-sec">
                                {this.state.error}
                                <h2 className="text-center">Login</h2>
                                <form className="login-form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <div className="text-left"><label className="col-form-label">Username</label></div>
                                        <input type="text" className="form-control" placeholder=" " name="email" required onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <div className="text-left"><label className="col-form-label">Password</label></div>
                                        <input type="password" className="form-control" placeholder=" " name="password" required onChange={this.handleChange} />
                                    </div>
                                    <div className="right-w3l">
                                        <input type="submit" className="form-control" defaultValue="Log in" />
                                    </div>
                                    <div className="sub-w3l">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                            <div className="text-left"><label className="custom-control-label" htmlFor="customControlAutosizing">Remember me?</label></div>
                                        </div>
                                    </div>
                                    <p className="text-center dont-do mt-3">Don't have an account?
                                <a href="/register" data-toggle="modal" data-target="#exampleModal2">
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