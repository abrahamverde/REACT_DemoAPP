import React, { Component } from 'react'

import './AddUser.css'

export default class AddUser extends Component {


    state = {

        userInformation : [],
        
    }


    storeInformation = () => {


        let inputName = this.refs.name.value;
        let inputUsername = this.refs.username.value;
        let inputEmail = this.refs.email.value;
        let inputPhone = this.refs.phone.value;
        let inputWebsite = this.refs.website.value;

       
        ///
        //SEND WAIT ICON
        ///
        let sButton = this.refs.sButton;
        let waitMessage = this.refs.waitMessage;

        sButton.classList.add("disabled");
        waitMessage.classList.add("d-sm-block");



        ///
        //HERE I BUILD THE USER OBJECT
        ///
        let objUser = {
            name : inputName,
            username : inputUsername,
            email : inputEmail,
            address: null,
            phone : inputPhone,
            website : inputWebsite
        }


        ///
        //REQUEST API VIA POST METHOD
        ///
        fetch('https://jsonplaceholder.typicode.com/users/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(objUser)
        })
        .then(response => response.json())
        .then(data => {

            //SUCCESS
            console.log(data)

            //SHOW SUCCESSFUL MESSAGE
            waitMessage.innerHTML = "<span style='color:green'>Successful Operation <i class='fas fa-check-circle'></i></span><br/>";
            waitMessage.innerHTML += "<span style='color:red'>We're using fake data, therefore the info can't be updated</span>";

        });



    } //END METHOD
    

    render() {
        return (
            <div className="col-md-12 mainDivAddUser">

                <div className="row"> 
                    <div className="col-md-4">
                        <a href="/dashboard">
                            <i className="fas fa-arrow-circle-left" style={{"margin-right":"10px","margin-top":"5px"}}></i>
                            Go Back...
                        </a>
                    </div>
                    
                    <div className="col-md-4 addTitle">
                        Add User Information
                    </div>
                </div>

                <hr/>

                <div className="row"> 

                    <div className="col-md-4"></div>


                    <div className="col-md-4">
    
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" ref="name" class="form-control" placeholder="Enter name" />
                        </div>

                        <div class="form-group">
                            <label>Username</label>
                            <input type="text" ref="username" class="form-control" placeholder="Enter username" />
                        </div>

                        <div class="form-group">
                            <label>email</label>
                            <input type="email" ref="email" class="form-control" placeholder="Enter email" />
                        </div>

                        <div class="form-group">
                            <label>Phone</label>
                            <input type="text" ref="phone" class="form-control" placeholder="Enter phone" />
                        </div>

                        <div class="form-group">
                            <label>Website</label>
                            <input type="text" ref="website" class="form-control" placeholder="Enter website" />
                        </div>

                        <hr />
            
                        <span ref="waitMessage" className="d-none">Please Wait... <i className="fas fa-spinner fa-spin"></i></span>

                        <br/>
                        <button type="submit" ref="sButton" class="btn btn-dark" onClick={this.storeInformation} >Save Information</button>


                    </div>


                </div>

            </div>
        )
    }
}
