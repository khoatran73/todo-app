const initialState = {
    filters: {
        search: "",
        status: "All",
        priority: []
    },
    todoList: [
        {
            id: "433fc2aa-af2e-407f-a0fb-31c2403658a1",
            name: "Học React",
            priority: "High",
            completed: true
        },
        {
            id: "589b6fb4-cf21-4590-9997-ab85ea57af68",
            name: "Báo cáo cuối kỳ CNPM",
            priority: "Low",
            completed: false
        },
        {
            id: "066dc1f7-91db-4929-a81c-628ffc61b1b5",
            name: "Vấn đáp android",
            priority: "Medium",
            completed: false
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case "todoList/statusTodoChange":
            return {
                ...state,
                todoList: state.todoList.map(todo => 
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            }
        case "filter/searchFilterChange":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload
                }
            }
        case "filter/statusFilterChange":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: action.payload
                }
            }
        case "filter/priorityFilterChange":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    priority: action.payload
                }
            }
        default:
            return state
    }
}

export default reducer