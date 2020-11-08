import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./CatList.css"


export default class CatList extends Component {
    render() {
        return (
            <div className="CatList">
                <h1 className="text-center mt-3">Meet my cats</h1>
                <div className="container mt-5">
                    <div className="row">
                        {this.props.cats.map((c)=>
                        <div className="col-lg-4 text-center cat" key={c.name}>
                        <Link className="link" to={`/cats/${c.name}`}>
                        <img src={c.src} alt={c.name}/>
                        <p className="name">{c.name}</p>
                        </Link>
                        </div>)}
                        
                    </div>

                </div>
            </div>
        )
    }
}
