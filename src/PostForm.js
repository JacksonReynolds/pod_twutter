import React, {Component} from 'react'

export default class PostForm extends Component {
    constructor() {
        super()
        this.state = {
            user: '',
            content: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form>
                <input type="text" name="user" value={this.state.user} onChange={this.handleChange} />
            </form>
        )
    }
}