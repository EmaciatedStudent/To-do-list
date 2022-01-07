import React from "react";

class Task extends React.Component {
    render() {
        return (
            <div className="task">
                <p style={ this.props.completed === true ? {textDecoration: 'line-through'} : {} }>
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