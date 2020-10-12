<template>
    <div> 
        <div v-if="task" class="task-container">
            <h1 class="title">{{task.title}}</h1>
            <div class="task">
                <hr>
                <p class="description"> {{task.description}} </p>
                <div v-if="task.deadline" class="deadline"> Deadline: <span> {{ new Date(task.deadline).toLocaleDateString() }} </span> </div>
                <div v-else class="deadline"> <span> Without deadline </span> </div>
                <div class="status"> {{ task.status }} </div>
                <div class="buttons" v-if="task.status !== 'Finish It!'">
                    <input type="button" @click="showChangeForm" class="button" value="Change"/>
                    <input type="button" @click="finishTask" class="button finish" value="Finish task" />
                </div>

                <form class="task-change" v-show="change" @submit.prevent="saveChanges">
                
                    <label for="description"> Description </label>
                    <textarea id="description" v-model="description" maxlength="2048" rows="10"> </textarea>
                    <span class="counter-length"> {{ description.length }}/2048 </span>
                    
                    <input type="date" v-model="deadline" />
                    <div class="buttons">
                        <input class="button" type="button" value="Cancel" @click="cancelChangeForm"/>
                        <input class="button" type="submit" value="Save changes" /> 
                    </div>
                    

                </form>
            </div>
        </div>
        <p v-else> No such Task has been created! </p>
    </div>
</template>

<script>
    export default {
        computed: {
            task(){
                return this.$store.getters.getTaskById(+this.$route.params.id)
            }
        },
        data(){
            return {
                description: '',
                deadline: '',
                change: false
            }
        },
        mounted() {
            this.description = this.task.description;
            this.deadline = this.task.deadline;
        },
        methods: {
            showChangeForm() {
                this.change = true;
            },
            cancelChangeForm() {
                this.change = false;
            },
            saveChanges(){
                this.$store.dispatch('updateTask', {
                    id: this.task.id,
                    description: this.description,
                    deadline: this.deadline
                });
                this.$router.push('/list');
            },
            finishTask() {
                this.$store.dispatch('finishTask', this.task.id);
                this.$router.push('/list');
            }
        }
    }
</script>

<style scoped>
    hr {
        margin: 20px 0;
        width: 100%;
    }
    .task-container {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .task {
        width: 60%;
        display: flex;
        flex-flow: row wrap;

        position: relative;

        margin-bottom: 20px;
    }
    .title,
    .description {
        width: 100%;
    }
    .deadline,
    .status,
    .button-container {
        width: 50%;
        margin: 20px 0;
    }
    .button-container {
        text-align: start;
    }
    .deadline {
        border-right: 1px solid var(--yellow);
    }
    .task-change {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
    
        background-color: white;

        margin-top: 30px;       
    }
    .buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;

        margin-top: 20px;
    }
    .button.finish {
        background-color: var(--yellow);
    }
    .button.finish:hover {
        background-color: var(--blue);
    }
    input,
    textarea {
        margin-top: 5px;
        font-family: inherit;
        font-size: 16px;
        transition: all .2s ease-out;
    }
    input {
        border: none;
        border-bottom: 1px solid var(--dark-gray);
    }
    .buttons input {
        border: none;
    }
    textarea {
        padding: 5px;

        border: 1px solid var(--dark-gray);
        border-radius: 8px;
    }
    input:focus,
    input:hover,
    textarea:focus,
    textarea:hover {
        border-color: var(--yellow);
    }
    .counter-length {
        text-align: end;
        margin-bottom: 10px;
    }
</style>