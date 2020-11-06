import React, { Component } from 'react'
import { Route, Switch, Link} from "react-router-dom"
import Home from "./home"

export default class Seba extends Component {
    render() {
        return (
            <div>
                <h1>Seba</h1>
                <img width="500" src="https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/64570103_351806098867614_302850328670211401_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=ECRE9zZl3SYAX9eFwMe&_nc_tp=15&oh=a4f302cb6d4d81a05420b029b9aa383d&oe=5FCF74C3" alt="Sebol"/>
                <div className="goBack">
                <Link to="./">HOME</Link>
                <Switch>
                    <Route exact path="./" component={Home}/>
                </Switch>
                </div>
            </div>
        )
    }
}
