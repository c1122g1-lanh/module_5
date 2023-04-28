import {Component} from "react";

export class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            item: '',
            list: []
        }
    }

    handleInput(value) {
        this.setState({
            item: value
        })
    }

    handleAddList() {
        this.setState({
            list: [...this.state.list, this.state.item],
            item:''
        })
    }

    render() {
        return (
            <>
                <input
                    value={this.state.item}
                    onChange={(event) => this.handleInput(event.target.value)}/>
                <button onClick={() => this.handleAddList()}>Add</button>
                <ul>
                    { this.state.list.map((item,index)=> (
                        <li key={index}>
                            {item}
                        </li>
                    ))
                }
                </ul>

            </>
        )
    }
}