function createStore(reducer){
  let state = {}
  let listenter = []

  /**
   *
   * @param {监听数据改变的回调函数} callback
   */
  function subscribe(callback) {
    listenter.push(callback)
  }

  function dispatch(action) {
    state = reducer(state, action)
    listenter.forEach((callback)=> callback())
  }

  function getState() {
    return state
  }

  return { getState, subscribe, dispatch }
}

function reducer(state, action) {
  switch(action.type){
    case 'type1':
      return { ...state, data: action.data}
    default:
      return state
  }
}

let store = createStore(reducer);
store.subscribe(() => {
	  console.log("监听到数据变化");
});
let action={
	type:"type1",
  data: 2
}
store.dispatch(action);
console.log(store.getState());//1xxx

export default createStore
