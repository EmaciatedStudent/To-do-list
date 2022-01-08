import React from "react";

class TaskInput extends React.Component {
    constructor() {
        super();

        this.state = {
            input: ""
        };
    }
    
    addNewTask = () => {
        const {input} = this.state;
        
        if (input != "") {
            this.props.addNewTask(input);
            this.setState({input: ""});
        }
    }

    handleChange = (event) => {
        this.setState({
            input : event.target.value
        });
    }

    render() {
        const {input} = this.state;

        return (
            <div className="taskInput">
                <input 
                    name="newTask"
                    placeholder="Введите задачу"
                    value={input}
                    onChange={this.handleChange}
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