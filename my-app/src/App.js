import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import Search from "./views/Search.js"
import Home from "./views/Home.js"
import Provider, {MyContext} from "./provider"

class BooksApp extends React.Component {

  render() {
    return (
        <div className="app">
            <Provider>
              <Switch>
                  <Route exact path={"/"} render={()=> (
                      <MyContext.Consumer>
                          {context => <Home{...context}/>}
                          </MyContext.Consumer>
                    )}
                  />
                  <Route exact path={"/search"} render={()=> (
                      <MyContext.Consumer>
                          {context => <Search {...context}/>}
                      </MyContext.Consumer>
                  )}
                  />
              </Switch>
            </Provider>
        </div>
    )
  }
}
export default BooksApp
