import React from "react";
import TaskInput from "./components/TaskInput/TaskInput"
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
            tasks[index].completed = !tasks[index].completed;
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

    addNewTask = (newTask) => {
        this.setState (state => {
            let {tasks} = state;

            if (!tasks.some(item => item.text === newTask)) {
                tasks.push({
                    id: tasks.length !== 0 ? tasks.length : 0,
                    text: newTask,
                    completed: false
                });

                return tasks;
            }
            alert("Задача уже добавлена");
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
                <TaskInput
                    addNewTask={this.addNewTask}
                    />

                <div className="taskBoard">
                    {allTasks}
                </div>
            </div>
        )
    }
}

export default App;