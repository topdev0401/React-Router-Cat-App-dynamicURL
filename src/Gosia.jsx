import React, { Component } from 'react'
import { Route, Switch, Link} from "react-router-dom"
import Home from "./home"

export default class Gosia extends Component {
    render() {
        return (
            <div>
                <h1>This is Gosia</h1>
                <img width="500" src="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/47690875_757629344604288_8807476682678389081_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=5pNPVIvXb9IAX8erQnM&tp=18&oh=dc1c553bacfbc20a8cb70e2418418ae4&oe=5FCCF642" alt="Gosiusia"/>
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
