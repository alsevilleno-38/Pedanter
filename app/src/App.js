import React, {Component} from "react"
import { Link, Router } from "react-router-dom"
import Users from "./containers/User/User"
import asyncLoading from "./utils/asyncLoading"
import listItems from "./components/Items/listItems"

const ListItems = asyncLoading(() => {
    return import("./components/Items/listItems")
})

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/orders">Orders</Link>
                </div>
                <div>
                    <Router path="/" exact component={}/>
                    <Router path="/orders" component={listItems}/>
                </div>
            </div>
        )
    }
}