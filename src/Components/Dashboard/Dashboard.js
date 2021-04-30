import React, { Component } from 'react'
import './Dashboard.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';


export default class Dashboard extends Component {


    state = {
        resultData : [],
        modalShow : false,
        modalMessage : "",
        modalInformationObject : ""
        
    };


    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>  {
                this.setState({resultData : data});               
            }
        );
    }

 
    showModal = (objectID) => {

        //FETCH AGAIN - JUST SELECTED USER
        fetch('https://jsonplaceholder.typicode.com/users/' + objectID)
        .then(response => response.json())
        .then(data =>  {

            this.setState({modalShow : true, modalInformationObject : data})

            }
        );

    }


    hideModal = () => {

        this.setState({modalShow : false}) 
    }


    render() {

        return (
            <div>

                {/*MODAL*/}
                <Modal show={this.state.modalShow}>

                    <Modal.Header closeButton>
                        <Modal.Title>User's Address</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body className="modalMessage">
                    {
                        
                        this.state.modalInformationObject !== "" ? 

                        <div>
                            <b>Street</b>: {this.state.modalInformationObject.address.street} <br/> 
                            <b>Suite</b>: {this.state.modalInformationObject.address.suite} <br/> 
                            <b>City</b>: {this.state.modalInformationObject.address.city} <br/> 
                            <b>ZipCode</b>: {this.state.modalInformationObject.address.zipcode} <br/> 
                       
                        </div>
                        
                        : ""

                    }

                    </Modal.Body>
                    
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hideModal}>
                            Close
                        </Button>
                    </Modal.Footer>

                </Modal>


                <div className='divTitle col-md-12'>USER LISTING</div>
                <div className='divSubTitle col-md-12'>This listing has been retrieved via API from <a target="_blank" href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a></div>
                <div className='clearfix'></div>


                <div className='row'>
                    <div className='col-md-6' style={{"text-align" : "left" }}>
                        <a href="/" className='btn btn-success btn-sm'><i className='fas fa-home' style={{"color":"white"}}></i></a>
                    </div>

                    <div className='col-md-6' style={{"text-align" : "right" }}>
                        <a href="addUser" className='btn btn-success btn-sm'>Add New User</a>
                    </div>
                </div>


                <br/>

                {/*TABLE*/}
                <div id="mainTableContainer">

                    {/*DATATABLE*/}
                    <table id="mainTable" className='table table-striped'>
                        <thead className="thead-dark">
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Website</th>
                                <th>Actions</th>
                            </tr>

                        </thead>
                        <tbody id="mainTable_Body">

                        {
                            this.state.resultData.map(obj=>(

                                <tr>                                
                                <td>{obj.id}</td>
                                <td>{obj.name}</td>
                                <td>{obj.username}</td>
                                <td>{obj.email}</td>
                                <td>{obj.phone}</td>
                                <td>{obj.website}</td>
                                <td>
                                    <a href={"/editUser/" + obj.id}>
                                        <i className='fas fa-edit' style={{"color":"green", "margin-right":"10px"}}></i>
                                    </a>

                                    <a href="#" onClick={ () => this.showModal(obj.id) }>
                                        <i id={"link_"+obj.id} className='fas fa-info-circle'></i>
                                    </a>
                                </td>
                                </tr>

                            ))

                        };

                        </tbody>


                    </table>

                </div>

            </div>
        )
    }
}
