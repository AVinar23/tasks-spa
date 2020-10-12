<template>
    <div class="wrapper">
        <h1> All tasks </h1>

        <div class="all-tasks" v-if="tasks.length">
            <div class="task" v-for="task in tasks" :key="task.id"> 
                <div class="title"> {{ task.title }} </div>
                <div class="description"> {{ task.description }} </div>
                <div v-if="task.deadline" class="deadline"> Deadline: <span> {{ new Date(task.deadline).toLocaleDateString() }} </span> </div>
                <div v-else class="deadline"> <span> Without deadline </span> </div>
                <div class="status"> {{ task.status }} </div>
                <router-link tag="button" class="button" :to="'/task/' + task.id" > Open task </router-link>
            </div>
        </div>
        <p v-else> You don't have any Tasks! </p>
    </div>
</template>

<script>
    export default {
        computed: {
            tasks(){
                return this.$store.getters.tasks
            }
        }
    }
</script>

<style scoped>
    .all-tasks {
        width: 100%;
        margin-top: 30px;

        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
    }
    h1 {
        margin-top: 30px;
    }
    .task {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        padding: 15px;
        margin-bottom: 15px;

        border: 1px solid var(--light-gray);
        border-radius: 8px;

        transition: box-shadow .2s ease-out;
    }
    .task:hover {
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    .task div {
        margin-bottom: 15px;
    }
    .title {
        font-size: 18px;
        font-weight: 500;
    }
    .description {
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;

        font-size: 15px;
    }
    .deadline {
        font-size: 14px;
    }
    .deadline span {
        font-size: 16px;
        font-weight: 500;
        color: var(--yellow);
    }
    button.button{
        font-weight: 600;
        font-size: 16px;

        width: 130px;
    } 
</style>