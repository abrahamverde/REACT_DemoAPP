import React, { Component } from 'react'
import "./EditUser.css"
import { useParams } from "react-router-dom";



export default class EditUser extends Component {

    state = {

        userInformation : [],
        
    }

    


    componentDidMount() {

        let idUser = this.props.idUser;
        
        //FETCH AGAIN - JUST SELECTED USER
        fetch('https://jsonplaceholder.typicode.com/users/' + idUser) //this.props.match.params.idUser)
        .then(response => response.json())
        .then(data =>  {

            this.setState({userInformation : data})

            }
        );
        
    }


    render() {

        return (
            <div className="col-md-12 mainDivEditUser">

                <div className="row"> 
                    <div className="col-md-4">
                        <a href="/dashboard">
                            <i className="fas fa-arrow-circle-left" style={{"margin-right":"10px","margin-top":"5px"}}></i>
                            Go Back...
                        </a>
                    </div>
                    
                    <div className="col-md-4 editTitle">
                        Edit User Information
                    </div>
                </div>

                <hr/>

                <div className="row"> 

                    <div className="col-md-4"></div>


                    <div className="col-md-4">
    
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" value = {this.state.userInformation.name} class="form-control" placeholder="Enter name" />
                        </div>

                        <div class="form-group">
                            <label>Username</label>
                            <input type="text" value = {this.state.userInformation.username} class="form-control" placeholder="Enter username" />
                        </div>

                        <div class="form-group">
                            <label>email</label>
                            <input type="email" value = {this.state.userInformation.email} class="form-control" placeholder="Enter email" />
                        </div>

                        <div class="form-group">
                            <label>Phone</label>
                            <input type="email" value = {this.state.userInformation.phone} class="form-control" placeholder="Enter phone" />
                        </div>

                        <div class="form-group">
                            <label>Website</label>
                            <input type="email" value = {this.state.userInformation.website} class="form-control" placeholder="Enter website" />
                        </div>

                        <hr />

                        <button type="submit" class="btn btn-dark">Update Information</button>


                    </div>


                </div>

            </div>

            
        )
    }
}
