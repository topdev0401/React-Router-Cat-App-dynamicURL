import React, { Component } from 'react'
import { Route, Switch, Link} from "react-router-dom"
import Home from "./home"

export default class Jacek extends Component {
    render() {
        return (
            <div>
                <h1>This is Jacek</h1>
                <img width="500" src="https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/71188566_504996450339422_4447597683125988063_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=vx-AnMvpJrAAX_tRM_D&_nc_tp=15&oh=c15077372050443cf2926d3af3e4e492&oe=5FCF71AE" alt="Jacus"/>
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
