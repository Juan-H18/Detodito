import { useReducer } from "react";

function reducer(state, action){
    switch(action.type){
        case 'Increment_age':{
            return{
                name: state.name,
                age: state.age + 1
            };
        }
        case 'Changed_name':{
            return{
                name: action.nextName,
                age: state.age
            };
        }
    }
    throw Error ('Unknown action: ' + action.type);
}

//estado inicial
const initialState = { name: 'Taylor', age: 42};

export default function Form(){
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleButtonClick(){
        dispatch({ type: 'Increment_age'});
    }

    function handleInputChange(e){
        dispatch({ type: 'Changed_name', nextName: e.target.value });
    }

    return(
        <>
            <input value={state.name} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>Incrementar edad</button>
            <p>Hola, {state.name}. Tu tienes {state.age}.</p>
        </>
    )
}