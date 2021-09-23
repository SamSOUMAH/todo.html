import { faBorderStyle } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
           <div className="card card-body mb-3">
               <h4>{this.props.name}</h4>
               <ul className="list-group">
                   
               <li className="list-group-item">
                 id:{this.props.id}
                   </li>

               <li className="list-group-item">
                       name:{this.props.name}
                   </li>

                   <li className="list-group-item">
                       Email:{this.props.Email}
                   </li>

                   <li className="list-group-item">
                       tel:{this.props.tel}
                   </li>

               </ul>

           </div>
        )
    }
}
