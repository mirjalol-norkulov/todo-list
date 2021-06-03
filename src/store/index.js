import Vue from "vue";
import Vuex from "vuex";

import persisted from "./plugins/persisted";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    filter: Vue.prototype.$constants.FILTERS.ALL,
  },
  getters: {
    hasTodos(state) {
      return state.todos.length > 0;
    },
    incompleteCount(state) {
      return state.todos.filter(({ isCompleted }) => !isCompleted).length;
    },
    completeCount(state) {
      return state.todos.filter(({ isCompleted }) => isCompleted).length;
    },
    filteredTodos(state) {
      switch (state.filter) {
        case Vue.prototype.$constants.FILTERS.ALL:
          return state.todos;
        case Vue.prototype.$constants.FILTERS.ACTIVE:
          return state.todos.filter((todo) => !todo.isCompleted);
        case Vue.prototype.$constants.FILTERS.COMPLETED:
          return state.todos.filter((todo) => todo.isCompleted);
      }
    },
    isAllCompleted(state) {
      return state.todos.every((todo) => todo.isCompleted);
    },
  },
  mutations: {
    SET_FILTER(state, value) {
      state.filter = value;
    },
    SET_ALL_TODOS_IS_COMPLETE(state, value) {
      state.todos = state.todos.map((todo) => ({
        ...todo,
        isCompleted: value,
      }));
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    SET_TODO_IS_COMPLETED(state, { id, isCompleted }) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted };
        } else {
          return todo;
        }
      });
    },
    CLEAR_COMPLETED_TODOS(state) {
      state.todos = state.todos.filter(({ isCompleted }) => !isCompleted);
    },
    UPDATE_TODO_TEXT(state, { id, text }) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text };
        } else {
          return todo;
        }
      });
    },
  },
  actions: {},
  modules: {},
  plugins: [persisted],
});
