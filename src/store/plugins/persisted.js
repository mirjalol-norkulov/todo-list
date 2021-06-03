const persisted = (store) => {
  const dataFromStorage = JSON.parse(localStorage.getItem("todoList"));
  if (dataFromStorage) {
    store.replaceState({ ...store.state, ...dataFromStorage });
  }

  store.watch(
    (state) => ({ todos: state.todos, filter: state.filter }),
    (newValue) => {
      const storageValue = JSON.parse(localStorage.getItem("todoList")) || {};
      localStorage.setItem(
        "todoList",
        JSON.stringify({
          ...storageValue,
          ...newValue,
        })
      );
    }
  );
};

export default persisted;
