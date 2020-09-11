import React, { Component } from "react"

const asyncLoading = (importCallback) => {
    return class extends Component {
        state = {
            items: null
        }
        componentDidMount() {
            importCallback().then(
                cmp => {
                    this.setState({ items: cmp.default })
                }
            )
        }
        render() {
            return (
                <div>
                    <p>Note</p>
                </div>
            )
        }
    }
}