import React, {Component} from "react"
import styles from "./User.css"
import ListItems from "../../components/Items/listItems"

class User extends Component {
    render() {
        return (
            <div className={styles.Random}>
                <ListItems/>
                <ListItems/>
                <ListItems/>
            </div>
        )
    }
}

