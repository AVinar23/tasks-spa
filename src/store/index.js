import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]').map(function(task){
      if (new Date(task.deadline) < new Date() && task.status !== 'Finish It!' ){
        task.status = 'Outdated';
      }
      return task
    })
  },
  mutations: {
    save(state, task){
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    update(state, {id, description, deadline}) {
      let tasks = state.tasks.concat();
      let indexTask = tasks.findIndex(function(task){
        return task.id === id
      })
      let task = tasks[indexTask];
      let status = (new Date(deadline) > new Date()) || !deadline ? 'In work' : 'Outdated';

      tasks[indexTask] = {...task, description, deadline, status};

      state.tasks = tasks;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    finish(state, id) {
      let indexTask = state.tasks.findIndex(function(task){
        return task.id === id
      })
      state.tasks[indexTask].status = 'Finish It!';

      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  },
  actions: {
    saveTask({commit}, task) {
      commit('save', task);
    },
    updateTask({commit}, task) {
      commit('update', task);
    },
    finishTask({commit}, id) {
      commit('finish', id);
    }
  },
  modules: {
  },
  getters: {
    tasks: function(state){
      return state.tasks
    },
    getTaskById: function(state){
      return function(id) {
        return state.tasks.find(function(task){
          return task.id === id
        });
      }
      // state => id => state.tasks.find(task => task.id === id)
    }

  }
})
