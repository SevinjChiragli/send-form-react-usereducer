export let initialObject = {
  form:[]
};
export function reducer(state, action) {
  if (action.type === "SEND ORDER") {
    action.payload.preventDefault()
    let formData = Object.fromEntries([...new FormData(action.payload.target)]);
    formData.bag=action.bag
    let newArr=[...state.form]
    newArr.push(formData)
    console.log(newArr)
    return{...state,form:newArr}
  }
 
}
