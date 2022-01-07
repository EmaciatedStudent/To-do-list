import React from "react";
import Task from "./components/Task/Task"
import tasksData from "./TasksData";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks: tasksData
        }
    }

    handleChange = (id) => {
        const index = this.state.tasks.map(item => item.id).indexOf(id);

        this.setState (state => {
            let {tasks} = state;
            tasks[index].completed = true;
            return tasks;
        });
    }

    deleteTask = (id) => {
        const index = this.state.tasks.map(item => item.id).indexOf(id);

        this.setState (state => {
            let {tasks} = state;
            delete tasks[index];
            return tasks;
        });
    }

    render () {
        const {tasks} = this.state;

        const activeTasks = tasks.filter (item => !item.completed);
        const completedTasks = tasks.filter (item => item.completed);

        const allTasks = [...activeTasks, ...completedTasks].map (item => 
            <Task 
                key={item.id} 
                text={item.text} 
                completed={item.completed}
                handleChange={() => this.handleChange(item.id)}
                deleteTask={() => this.deleteTask(item.id)}
                />
            );

        return (
            <div className="App">
                <div className="taskInput">
                    <input 
                        type={"text"}
                        placeholder="Введите задачу"
                        />
                    <button className="acceptButton"/>
                </div>
                <select className="taskType">
                    <option selected>Все задачи</option>
                    <option>Текущие задачи</option>
                    <option>Выполненные задачи</option>
                </select>
                <div className="taskBoard">
                    {allTasks}
                </div>
            </div>
        )
    }
}

export default App;