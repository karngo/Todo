<template>
    <v-container class="cyan darken-2">
        <v-card v-for="todo in todos" :key="todo.task" class="my-2" elevation="4" tile>
            <v-card-title class="justify-center">
                <v-row>
                    <v-col>
                        <v-checkbox color="success" hide-details v-model="todo.isCompleted">
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
                    </v-col>
                </v-row>
            </v-card-title>
        </v-card>
        <template v-if="!todos.length">
            no tasks completed <br>
        </template>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            dialog: false,
            task: '',
            description: ''
    }
    },
    computed: {
        todos(){
            return this.$store.getters.getTodos.filter(todo => todo.isCompleted === true)
        }
    },
    methods: {
        deleteTodo(todo){
            this.$store.dispatch('deleteTodo', todo)
        }
    }
}
</script>