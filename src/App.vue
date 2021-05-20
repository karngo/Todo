<template>
  <v-app>
    <v-main class="text-center">
        <h1 class="pb-3">Todo</h1>
        <v-tabs grow v-model="tab" color="cyan accent-4">
          <v-tab>All</v-tab>  
          <v-tab>Completed</v-tab>  
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-container>
              <v-row class="justify-center">
                <v-col cols="12" sm="6">
                  <add-todo class="my-4"></add-todo>
                  <todo-list></todo-list>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <v-container>
              <v-row class="justify-center">
                <v-col cols="12" sm="6">
                  <completed-list></completed-list>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
    </v-main>
  </v-app>
</template>

<script>
import TodoList from './components/TodoList.vue'
import CompletedList from './components/CompletedList.vue'
import AddTodo from './components/AddTodo.vue'

export default {
  name: 'App',
  data(){
    return {
      tab: null
    }
  },
  components: {
    'todo-list': TodoList,
    'completed-list': CompletedList,
    'add-todo': AddTodo
  }
};
</script>