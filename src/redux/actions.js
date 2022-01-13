export const addTodo = (data) => {
    return {
        type: "todoList/addTodo",
        payload: data
    }
}

export const statusTodoChange = (todoId) => {
    return {
        type: "todoList/statusTodoChange",
        payload: todoId
    }
}

export const statusFilterChange = (data) => {
    return {
        type: "filter/statusFilterChange",
        payload: data
    }
}

export const searchFilterChange = (status) => {
    return {
        type: "filter/searchFilterChange",
        payload: status
    }
}

export const priorityFilterChange = (priorities) => {
    return {
        type: "filter/priorityFilterChange",
        payload: priorities
    }
}

