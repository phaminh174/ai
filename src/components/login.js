import React, {Component} from "react";
import {useNavigate} from 'react-router-dom'

class Login extends Component {

    state = {
        credentials: {username: '' , password: ''}
    }

    

    login = event => {
        console.log(this.state.credentials)
        fetch('http://127.0.0.1:8080/login', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(this.state.credentials)
        }).then((reponse) => reponse.json())
        .then((data) => {
            
            console.log(data)
        })
        .catch(err => console.error(err))


    }

    inputChanged = event => {
        const cred = this.state.credentials
        cred[event.target.name] = event.target.value
        this.setState({credentials: cred})
    }
    render() {
        return (
            <div>
                <h1>Login user form</h1>

                <label>
                    Username:
                    <input type="text" name="username" 
                    value={this.state.credentials.username}
                    onChange={this.inputChanged}/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" name="password" 
                    value={this.state.credentials.password}
                    onChange={this.inputChanged}
                    />
                </label>
                <br/>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}



export default Login;
