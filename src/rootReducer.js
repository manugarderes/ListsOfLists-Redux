function rootReducer(
  state = [],
  action
) {
  switch (action.type) {
    case "CREATE_BIG_LIST":
      return state.concat({ title: action.payload, list: [] });
    case "DELETE_BIG_LIST":
      const newBigList = state.filter((item) => item.title !== action.payload);
      return newBigList;
    case "CREATE_ITEM":
      const thisList = state.find((item) => item.title === action.payload.listTitle);
      const previewState = state.filter((item) => item.title !== action.payload.listTitle)
      return [...previewState, {title: thisList.title, list: [...thisList.list, {name: action.payload.newItem, completed: false}]}]
    case "DELETE_ITEM":
      const thisList2 = state.find((item) => item.title === action.payload.listTitle);
      const previewState2 = state.filter((item) => item.title !== action.payload.listTitle)
      const newSmallList = thisList2.list.filter((item) => item.name !== action.payload.itemToDelete)
      return [...previewState2, {title: thisList2.title, list: newSmallList}]
    case "COMPLETE":
      const thisList3 = state.find((item) => item.title === action.payload.listTitle);
      const previewState3 = state.filter((item) => item.title !== action.payload.listTitle)
      const newSmallList2 = thisList3.list.filter((item) => item.name !== action.payload.itemToDelete)
      return [...previewState3, {title: thisList3.title, list: [...newSmallList2, {name: action.payload.itemToDelete, completed: action.payload.status}]}]
    default:
      return state;
  }
}

export default rootReducer;
