import React, { Component } from 'react'
import "./Login.css";
import mainLogo from '../../Images/logo.jpg'



export default class login extends Component {

    
    state = {
        attempts : 0,
        showModalFailLogin : "none",
        modalFailLoginMessage : "",
    }

    validate = () => {

        const userObject = {

            nombre : this.refs.uInput.value,
            password : this.refs.pInput.value
        }


        //MAIN VALIDATIONS
        if(userObject.nombre.length === 0 || userObject.password.length === 0) {
            

            let cc = this.state.attempts + 1;

            this.setState(
                {
                    attempts : cc, 
                    showModalFailLogin : "block",
                    modalFailLoginMessage : "Username or password can't be blank - You have tried " + cc + " times."
                });

            return;

        }


        //GET LOGIN REQUEST VIA API - FOR DEMO PURPOSES USE ADMIN ADMIN
        if(userObject.nombre !== "admin" || userObject.password !== "admin") {

            this.setState(
                {
                    showModalFailLogin : "block",
                    modalFailLoginMessage : "Incorrect login information - For demo purposes please use admin : admin"
                });

        } else {


            //EVERYTHING IS OK - REDIRECT TO DASHBOARD
            window.location.href = '/dashboard'


        }

    } 


    render() {


        return (

            <div className='col-md-12 row'>

                <div className='col-md-4'/> {/* SEPARATOR */}

                <div className='col-md-4'>

                    {/*BOOTSTRAP ALERT*/}
                    <div class="alert alert-danger fade show" role="alert" style = {{ "display":this.state.showModalFailLogin }}>
                        
                        {this.state.modalFailLoginMessage}
                        
                    </div>

                    <div className='col-md-12' style={{"text-align":"center" }}>
                        <img src={mainLogo} alt='' width={"150px"} />
                    </div>

                    <div className='col-md-12'>
                        Username:
                        <input id='userInput' ref="uInput" className='form-control form-control-sm'></input>
                    </div>

                    <div className='col-md-12'>
                        Password:
                        <input id='passInput' ref="pInput" className='form-control form-control-sm' type='password'></input>
                    </div>


                    <div className='col-md-12' id='buttonDiv'>
                    <hr />
                        <span id='systemTitle'>Demo System</span>
                        <br/><br/>
                        <button className='btn btn-info' onClick={this.validate}>Sign In</button>

                    </div>
                </div>

            </div>
           
        )
    }

    
}
