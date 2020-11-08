import './App.css';
import React, { Component } from 'react'
import { Route, Switch, Redirect} from "react-router-dom"
import CatList from "./CatList"
import Cat from "./Cat"
import Navbar from "./Navbar"



class App extends Component {
  static defaultProps = {
    kitties: [
      {
        name: "Jacek",
        age: 6, 
        src:"https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/12748436_960676854026720_65246934_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=8FGaXwhocsMAX9Sw5nh&tp=18&oh=20ea1f6c98e905044a74b59313ebbe1c&oe=5FCF918C",
        facts: [
          "Highly sensitive young male",
          "The most loyal friend",
          "Tends do be scared easily 💔"
        ],
        emoji: "🐑"
      },
      {
        name: "Gosia",
        age: 6,
        src: "https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/47690875_757629344604288_8807476682678389081_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=5pNPVIvXb9IAX8erQnM&tp=18&oh=dc1c553bacfbc20a8cb70e2418418ae4&oe=5FCCF642",
        facts: [
          "Lovely and crazy for cuddles",
          "Likes to spend time together with her brother, Jacek",
          "Although living in a flat, already killed two birds 😢"
        ],
        emoji: "🦦"
      },
      {
        name: "Seba",
        age: "around 4",
        src: "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/64570103_351806098867614_302850328670211401_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=ECRE9zZl3SYAX9eFwMe&_nc_tp=15&oh=a4f302cb6d4d81a05420b029b9aa383d&oe=5FCF74C3",
        facts: [
          "The biggest troublemaker in the hood",
          "Joined Gosia & Jacek after found on the street as a baby",
          "Loves to ride a bike in a front basket 🚲"
        ],
        emoji: "🤡"
      }

    ]   
  }

  render(){
      const getCat = props => {
        let name = props.match.params.name;
        let currentCat = this.props.kitties.find(
          cat => cat.name.toLowerCase() === name.toLowerCase());
          return <Cat {...props} cat={currentCat} />
        
      }
  return (
    <div>
    <Navbar cats={this.props.kitties}/>
    <Switch>
    <Route exact path="/cats" render={()=><CatList cats={this.props.kitties} />} />
    <Route exact path="/cats/:name" render={getCat}/>
    <Redirect to="/cats"/>
    </Switch>
    </div>
  );
}
}
export default App;
