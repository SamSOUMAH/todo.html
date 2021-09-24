
import React from 'react'

import { Button } from 'react-bootstrap'
import {faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddList = () => {
    return (
        <div>
        <h1 class="text-center"></h1>

        <div className="d-flex justify-content-center bg-ganger">  
        <input type="text" placeholder="Add todo" className="form-control w-50 bg-warning"></input>
        <Button variant="success"><FontAwesomeIcon icon={faPlusSquare}style={{ width:'3rem', height:'2rem' }}></FontAwesomeIcon></Button>
        </div>

    
        </div>
    )
}

export default AddList
