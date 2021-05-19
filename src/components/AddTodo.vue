<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn elevation="6" block v-bind="attrs" v-on="on" color="grey">
                    Add new +
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="headline">
                    New Todo
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Task*" v-model="task" :error="error" @input="error = false"></v-text-field>
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
                    @click="dialog = false"
                >
                    Cancel
                </v-btn>
                <v-btn
                    color="primary"
                    raised
                    @click="addNewTodo"
                >
                    Save
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    data(){
        return {
            dialog: false,
            task: '',
            description: '',
            error: false
      }
    },
    methods: {
        addNewTodo() {
            if(this.task === '')
                this.error = true
            else {
                this.dialog = false
                this.$store.dispatch('addTodo', {
                    task: this.task,
                    description: this.description,
                    isCompleted: false
                })
                this.task = ''
                this.description = ''
            }
        }
    }
}
</script>