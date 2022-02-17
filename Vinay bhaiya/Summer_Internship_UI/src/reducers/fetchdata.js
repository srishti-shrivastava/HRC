export const def={
    data:[]
}

const sqldata = (state = def, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case "DATA_SUCCESS":
        let nd=[...state.data]
        return ({...state, 
            data: [...nd,...action.payload]
        })
      case "DATA_FAIL":
        return state;
      default:
        return state;
    }
  };
  export default sqldata;