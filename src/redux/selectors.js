export const todoListSelector = state => {
    const searchText = searchTextSelector(state)
    const statusFilter = statusFilterSelector(state)
    const priorityFilter = priorityFilterSelector(state)

    const todosRemaining = state.todoList.filter(todo => {
        if (statusFilter === "All")
            return !priorityFilter.length ?
                todo.name.includes(searchText)
                : todo.name.includes(searchText) && priorityFilter.includes(todo.priority)

        return !priorityFilter.length ?
            (todo.name.includes(searchText) && (statusFilter === "Completed" ? todo.completed : !todo.completed))
            : (todo.name.includes(searchText) && (statusFilter === "Completed" ? todo.completed : !todo.completed))
            && priorityFilter.includes(todo.priority)
    })

    return todosRemaining
}

export const searchTextSelector = (state) => state.filters.search

export const statusFilterSelector = (state) => state.filters.status

export const priorityFilterSelector = (state) => state.filters.priority