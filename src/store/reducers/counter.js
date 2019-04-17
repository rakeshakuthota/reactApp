import * as actionTypes from '../actions';
const initialState={
    counter:0,
    results:[]
};
const reducer = (state=initialState,action) =>{
    switch(action.type){

        case actionTypes.increment:
        const newState=Object.assign({},state)
        newState.counter=state.counter+1;
        return newState;
        case actionTypes.decrement:
        return{
            ...state,
            counter:state.counter-1
        }
        case actionTypes.add:
        return{
            ...state,
            counter:state.counter+action.val
        }
        case actionTypes.sub:
        return{
            ...state,
            counter:state.counter-action.val
        }

    }
return state;
    
}
export default reducer;