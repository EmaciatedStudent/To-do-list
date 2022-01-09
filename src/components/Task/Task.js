import React from "react";
import "./Task.css"

class Task extends React.Component {
    render() {
        return (
            <div className="task">
                <input 
                        type={"checkbox"} 
                        defaultChecked={this.props.completed}
                        onChange={this.props.handleChange}
                        />
                <p style={ this.props.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'} }>
                    {this.props.text}
                </p>
                <button 
                    className="deletingButton"
                    onClick={this.props.deleteTask}
                    />
                <button className="changingButton"/>
            </div>
        )
    }
}

export default Task;