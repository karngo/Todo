<template>
<v-container class="cyan darken-2">
    <template v-if="!edit">
        <v-card v-for="(todo, indx) in todos" :key="todo.task" class="my-2" elevation="4" tile @click="showDescriptionAtIndex(indx)">
            <v-card-title class="justify-center">
                <v-row>
                    <v-col>
                        <v-checkbox color="success" hide-details v-model="todo.isCompleted" @click="$event.stopPropagation()">
                        </v-checkbox>
                    </v-col>
                    <v-col>
                        {{todo.task}}
                    </v-col>
                    <v-col cols="4">
                        <v-btn class="ml-2" icon @click="deleteTodo(todo)">
                            <v-icon color="red lighten-1">
                                mdi-delete
                            </v-icon>
                        </v-btn>
                        <v-btn class="mr-2" icon @click="editTodo(todo)">
                            <v-icon>
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                        
                    </v-col>
                </v-row>
            </v-card-title>
            <v-card-text v-show="descriptionIndex === indx">
                {{todo.description}}
            </v-card-text>
        </v-card>
    </template>

    <v-card v-if="edit">
        <v-card-title class="headline">
            Edit Todo
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-text-field label="Task*" required v-model="task"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea label="Desciption" v-model="description"></v-textarea>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="red darken-1"
                plain
                @click="edit = false"
            >
                Cancel
            </v-btn>
            <v-btn
                color="primary"
                raised
                @click="saveEdit"
            >
                Save
            </v-btn>
        </v-card-actions>
    </v-card>

    <template v-if="!todos.length">
        no tasks saved.. <br>
        try adding a new task
    </template>
</v-container>
</template>

<script>
export default {
    data(){
        return{
            task: '',
            description: '',
            edit: false,
            previousTodo: {},
            descriptionIndex: -1
    }
    },
    computed: {
        todos(){
            return this.$store.getters.getTodos
        }
    },
    methods: {
        deleteTodo(todo){
            this.$store.dispatch('deleteTodo', todo)
        },
        updateTodo(oldTodo, changedTodo){
            this.$store.dispatch('updateTodo', [oldTodo, changedTodo])
        },
        editTodo(todo){
            this.edit = true
            this.previousTodo = todo
            this.task = todo.task,
            this.description = todo.description
        },
        saveEdit(){
            this.edit = false
            this.updateTodo(this.previousTodo, {
                task: this.task,
                description: this.description,
                isCompleted: this.previousTodo.isCompleted
            })
        },
        showDescriptionAtIndex(index){
            if(this.descriptionIndex === index)
                this.descriptionIndex = -1
            else this.descriptionIndex = index
        }
    }
}
</script>