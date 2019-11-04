// import React from 'react';
import React, { Component } from 'react';
import Axios from 'axios';

export const statusCode = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            username: '',
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
            if ((user.username === this.state.username) && (user.password === this.state.password)) {
                this.setState({
                    count: this.state.count + 1,
                    name: user.name,
                    username: user.username,
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
        if (!this.checkSignIn()) {
            this.setState({ error: 'Invalid username or password' });
        }
        Axios.post('http://give.away.local/api/v1/auth/login', {
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                const user = res.data.data.user
                const status = res.data.meta.status

                if (status === statusCode.OK) {
                    this.state.isLoggedIn = true;
                    localStorage.setItem('current_user', JSON.stringify(user))
                    localStorage.setItem('user', user.name)
                    window.location.replace("/");
                }
                // this.setState({ users });
                // users.map(user => {
                //     localStorage.setItem(user.username, user.id);
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
                                <div className="text-error">{this.state.error}</div>
                                <h2 className="text-center">Login</h2>
                                <form className="login-form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <div className="text-left"><label className="col-form-label">Username</label></div>
                                        <input type="text" className="form-control" placeholder=" " name="username" required onChange={this.handleChange} />
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