
// import React from 'react';
import React, { Component } from 'react';
import Axios from 'axios';

class Register extends Component {
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
        Axios.post('https://giveawayapi.herokuapp.com//api/v1/auth/register')
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
                    <div className="d-flex justify-content-center align-items-center ">
                        <div className="row">
                            <div className="col-md-12 login-sec">
                                {this.state.error}
                                <h2 className="text-center">Register</h2>
                                <form className="login-form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <div className="text-left"><label className="col-form-label">Your name</label></div>
                                        <input type="text" className="form-control" placeholder=" " name="name" required onChange={this.handleChange} />
                                    </div> 
                                    <div className="form-group">
                                        <div className="text-left"><label className="col-form-label">Email</label></div>
                                        <input type="text" className="form-control" placeholder=" " name="email" required onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <div className="text-left"><label className="col-form-label">Password</label></div>
                                        <input type="password" className="form-control" placeholder=" " name="password" id="password1" required onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <div className="text-left"><label className="col-form-label">Confirm password</label></div>
                                        <input type="password" className="form-control" placeholder=" " name="Confirm Password" id="password2" required onChange={this.handleChange} />
                                    </div>
                                    <div className="right-w3l">
                                        <input type="submit" className="form-control" defaultValue="Register" />
                                    </div>
                                    <div className="sub-w3l">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="customControlAutosizing2" />
                                            <div className="text-left"> <label className="custom-control-label" htmlFor="customControlAutosizing2">I Accept to the Terms &amp; Conditions</label></div>
                                        </div>
                                    </div>
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
// export default Login;
// import React from 'react';

// function Register() {
//     return (
//     );
// }

export default Register;
