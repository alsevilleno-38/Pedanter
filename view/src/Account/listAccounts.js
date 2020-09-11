import React from "react";

const listAccounts = (props) => {
    return (
        <div>
            <h1>Summary of Details</h1>
            <p>Items</p>
            {props.children}
        </div>
    )
}

export default listAccounts;