import React from "react";

class Task extends React.Component {
    render() {
        return (
            <div className="task">
                <p style={ this.props.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'} }>
                    <input 
                        type={"checkbox"} 
                        defaultChecked={this.props.completed}
                        onChange={this.props.handleChange}
                        />
                    {this.props.text}
                    <button className="changingButton"/>
                    <button 
                        className="deletingButton"
                        onClick={this.props.deleteTask}
                        />
                </p>
            </div>
        )
    }
}

export default Task;