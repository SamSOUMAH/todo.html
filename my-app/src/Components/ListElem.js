import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'

export default class ListElem extends Component {

    state={

        ListElem:
        [{
            name:'Task numero 1',
            button:<button variant="danger"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
        },
        {
            name:'Task numero 2',
            button:<button variant="danger"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
        },
        {
            name:'Task numero 3',
            button:<button variant="danger"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
        }
       ]
    }


    render() {
        return (
            <div>
              
                

            </div>
        )
    }
}


