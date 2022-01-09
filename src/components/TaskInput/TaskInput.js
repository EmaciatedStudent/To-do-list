import React from "react";
import "./TaskInput.css"

class TaskInput extends React.Component {
    constructor() {
        super();

        this.state = {
            input: ""
        };
    }
    
    addNewTask = () => {
        const {input} = this.state;
        
        if (input !== "") {
            this.props.addNewTask(input);
            this.setState({input: ""});
        }
    }

    handleChange = (event) => {
        this.setState({
            input : event.target.value
        });
    }

    handleEnter = (event) => {
        if (event.key === 'Enter')
            this.addNewTask();
    }

    render() {
        const {input} = this.state;

        return (
            <div className="taskInput">
                <input
                    placeholder="Введите задачу"
                    value={input}
                    onChange={this.handleChange}
                    onKeyPress={this.handleEnter}
                    />
                <button
                    className="acceptButton"
                    onClick={this.addNewTask}
                    />
            </div>
        )
    }
}

export default TaskInput;