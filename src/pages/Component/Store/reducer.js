function reducer(state, action) {
  switch(action.type){
    case 'type1':
      return { ...state, typeOne: 1 }
    default:
      return state
  }
}

export default reducer
