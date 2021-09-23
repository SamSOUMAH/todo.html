import {Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import List from './List'

export default class ListElem extends Component {

    state={

     data:[
            { id: 1,
             name:'Task number 1',
             bouton:<Button variant="danger"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>
            },

            { id: 2,
              name:'Task number 2',
              bouton:<Button variant="danger"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>
            },

            { id:3,
              name:'Task number 3',
             bouton:<Button variant="danger"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>
            }
          ]
    }


    render() {
        return (
            <div>
                {this.state.data.map((data) => 
                (
                    <div className="List container border bg-warning "> 
                    <ul className="list-group d-flex flex-row justify-content-between">

                        <li className="list-group-item bg-warning">
                        {data.id} 
                        </li>
                        <li className="list-group-item bg-warning">
                         <h5> {data.name}</h5>
                        </li>
                        <li className="list-group-item float-end bg-warning">
                        {data.bouton}
                        </li>

                    </ul>
                       
                       
                       
                       
                    </div>
                    )
               )}
             
            </div>
     
        )
    } 
}


