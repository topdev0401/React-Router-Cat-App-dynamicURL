import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./Cat.css"

export default class Cat extends Component {
    render() {
        return (
            <div className="container">
                <div className="Cat row justify-content-center">
                    <div className="col-sm-8 col-lg-6 my-4">
                        <div className="Cat-card card">
                            <img className="card-img-top" src={this.props.cat.src} alt={this.props.cat.name}/>
                            <div className="card-body">
                                <h2 className="card-title">{this.props.cat.name}</h2>
                                <h4 className="card-subtitles text-muted">
                                    {this.props.cat.age} years old
                                </h4>
                            </div>
                            <ul className="list-group list-group-flush">
                            {this.props.cat.facts.map((fact, index)=> (
                                <li className="list-group-item" key={index}>
                                    {fact}
                                </li>
                            ))}

                            </ul>
                            <div className="card-body">
                                <Link to="/cats" className="btn btn-info">Go Back</Link>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}
