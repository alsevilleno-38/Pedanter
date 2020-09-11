import React, { Component } from "react";
import ListAccounts from "./listAccounts";

class Account extends Component {    
    render() {      
        return (
            <ListAccounts>
                <p>For {this.props.name} account</p>
                <p>Balance is {this.props.balance}</p>  
            </ListAccounts>
        )
    }
}

export default Account;