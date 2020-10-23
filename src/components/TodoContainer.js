/*TodoContainer.js
src/components/
*/

//modules
import React from "react";
import axios from "axios";

//components
import TodosList from "./TodosList.js";
import Header from "./Header.js";
import InputTodo from "./InputTodo.js";

class TodoContainer extends React.Component {
    /////state
    state = {
        todos: [],
        show: false
    };

    /////methods
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
            }),
            show: !this.state.show,
        });
    };

    /*delTodo
    params: id of todo
        note: bubbled up from TodoItem.js
    function: removes todo object from state based on todo.id
    */
    delTodo = id => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response =>
                this.setState({
                    todos: [
                        ...this.state.todos.filter(todo => {
                            return todo.id !== id
                        }),
                    ],
                })
            )
    };

    /*addTodoItem
    params: title of todo to add
        note: bubbled up from InputTodo.js
    function: adds new todo object to state
    */
    addTodoItem = title => {
        axios
            .post("https://jsonplaceholder.typicode.com/todos",{
                title: title,
                completed: false
            })
            .then(response =>
                this.setState({
                    todos: [...this.state.todos, response.data]
                })
            )
    };

    /////lifecycle
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos", {
            params: {
                _limit:10
            }
            })
            .then(response => this.setState({ todos: response.data }));
    }
    render() {
        return (
            <div className="container">
                <Header headerSpan={this.state.show} />
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
