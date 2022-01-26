import { createSelector } from "@reduxjs/toolkit"

export const searchTextSelector = (state) => state.filters.search
export const statusFilterSelector = (state) => state.filters.status
export const priorityFilterSelector = (state) => state.filters.priority
export const todoListSelector = state => { return state.todoList }

export const todoListRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    statusFilterSelector,
    priorityFilterSelector,
    (todoSlice, searchText, statusFilter, priorityFilter) => {
        const todoList = todoSlice.todoList
        if (todoList)
            return todoList.filter((todo) => {
                if (statusFilter === "All")
                    return !priorityFilter.length ?
                        todo.name.includes(searchText)
                        : todo.name.includes(searchText) && priorityFilter?.includes(todo.priority)

                return !priorityFilter.length ?
                    (todo.name.includes(searchText) && (statusFilter === "Completed" ? todo.isCompleted : !todo.isCompleted))
                    : (todo.name.includes(searchText) && (statusFilter === "Completed" ? todo.isCompleted : !todo.isCompleted))
                    && priorityFilter.includes(todo.priority)
            })
    }
)

export const accountSelector = state => {
    return state.account.currentUser
}

