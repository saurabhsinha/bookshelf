import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import Search from "./views/Search.js"
import Home from "./views/Home.js"

class BooksApp extends React.Component {

  render() {
    return (
        <div className="app">
          <Switch>
            <Route exact to={"/"} component={Home}/>
            <Route exact to={"/Search"} component={Search}/>
          </Switch>
        </div>
    )
  }
}
export default BooksApp
