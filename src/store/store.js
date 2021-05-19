import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [
            {
                task: "task 1",
                description: "do something",
                isCompleted: false
            },
            {
                task: "task 2",
                description: "do something",
                isCompleted: true
            },
            {
                task: "task 3",
                description: "do something",
                isCompleted: false
            },
            {
                task: "task 4",
                description: "do something",
                isCompleted: true
            },
            {
                task: "task 5",
                description: "do something",
                isCompleted: true
            }
        ],
    },
    mutations: {
        ADD_TODO(state, todo){
            state.todos.push(todo)
        },
        DELETE_TODO(state, todo){
            state.todos.splice(state.todos.indexOf(todo), 1)
        },
        UPDATE_TODO(state, [oldTodo, newTodo]){
            state.todos.splice(state.todos.indexOf(oldTodo), 1, newTodo)
        }
    },
    actions: {
        addTodo(store, newTodo){
            store.commit('ADD_TODO', newTodo)
        },
        deleteTodo(store, deletedTodo){
            store.commit('DELETE_TODO', deletedTodo)
        },
        updateTodo(store, [oldTodo, newTodo]){
            store.commit('UPDATE_TODO', [oldTodo, newTodo])
        }
    },
    getters: {
        getTodos(state){
            return state.todos
        }
    }
})