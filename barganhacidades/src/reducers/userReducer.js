const initialState = {
    name: 'Rafael',
    email: 'rafael@geronimo.dev'
}
const userReducer = (state = initialState,action) => {

    if(action.type === "changeName"){
        return {...state, name:action.payload.name};
    }

    return state;
};

export default userReducer;