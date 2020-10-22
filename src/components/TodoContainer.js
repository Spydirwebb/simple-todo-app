/*TodoContainer.js
src/components/
*/

//modules
import React from "react";
import { v4 as uuidv4 } from "uuid";

//components
import TodosList from "./TodosList.js";
import Header from "./Header.js";
import InputTodo from "./InputTodo.js";

class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup development environment",
                completed: true,
            },
            {
                id: uuidv4(),
                title: "Develop Website and add content",
                completed: false,
            },
            {
                id: uuidv4(),
                title: "Deploy to live server",
                completed: false
            }
        ]
    };

    /*handleChange
    params: id of todo
        note: bubbled up from TodoItem.js
    function
        -check if props.id matches a todo.id
        -true - flips todo.completed
    */
    handleChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    /*delTodo
    params: id of todo
        note: bubbled up from TodoItem.js
    function: removes todo object from state based on todo.id
    */
    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };

    /*addTodoItem
    params: title of todo to add
        note: bubbled up from InputTodo.js
    function: adds new todo object to state
    */
    addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };

    render() {
        return (
            <div className="container">
                <Header />
                <InputTodo addTodoProps={this.addTodoItem}/>
                <TodosList
                    todos={this.state.todos}
                    handleChangeProps={this.handleChange}
                    deleteTodoProps={this.delTodo} />
            </div>
        );
    }
}

export default TodoContainer;
