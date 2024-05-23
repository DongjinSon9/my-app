import React, { useReducer } from "react";

function reducer(state, action) {
    return{
        ...state,
        [action.name]:action.value
    };
}
    function useInputs(initialFrom) {
        const [state, dispatch]=useReducer(reducer, initialFrom);
        const onChange=e=>{
            dispatch(e.target);
        };
        return [state, onChange];
    }
    export default useInputs;
