<template>
  <div class="create">
    <h1>Create new task</h1>

    <form class="task" @submit.prevent="createTask">

      <label for="title"> Title </label>
      <input type="text" v-model="title" id="title" required autocomplete="off" maxlength="50"/>

      <label for="description"> Description </label>
      <textarea id="description" v-model="description" maxlength="2048" rows="4"> </textarea>
      <span class="counter-length"> {{ description.length }}/2048 </span>
      
      <input type="date" v-model="deadline" />

      <input class="button" type="submit" value="Create Task" /> 

    </form>
  </div>
</template>

<script>
  export default {
    name: 'Create',
    data(){
      return {
        title: '',
        description: '',
        deadline: ''
      }
    },
    methods: {
      createTask(){
        let task ={
          id: Date.now(),
          title: this.title,
          description: this.description,
          deadline: this.deadline,
          status: 'In Work'
        }
        this.$store.dispatch('saveTask', task);
        this.$router.push('/list');
      }
    },
    components: {
      
    }
  }
</script>

<style scoped>
  .create {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0 50px;
  }
  .task {
    width: 50%;
    display: flex;
    flex-flow: column;

    border: 1px solid var(--light-gray);
    border-radius: 8px;

    margin-top: 30px;
    padding: 20px;

    transition: box-shadow .2s ease-out;
  }
  .task:hover {
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
  label {
    margin-top: 15px;
    font-weight: 500;
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
  input[type="submit"] {
    border: none;
    margin: 40px auto 25px;
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

