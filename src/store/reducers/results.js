import * as actionTypes from '../actions';
const initialState={
    counter:0,
    results:[]
};
const reducer = (state=initialState,action) =>{
    switch(action.type){

        case actionTypes.storeResult:
        return {
            ...state,
             results:state.results.concat({id:new Date(),val:action.result})
        }
        case actionTypes.deleteResult:
        // const id=2;
        // const newArray = [...this.state.results];
        // newArray.splice(id,1);
        const updatedArray = state.results.filter(result=>result.id !== action.strID)
        return {
            ...state,
            results:updatedArray
        }

    }
return state;
    
}
export default reducer;