import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

// Container component for TextInputForm
function TextInputFormContainer({ onSubmit}) {
    const [value, setValue] = useState('');
    const [inputType, setInputType] = useState('password');
    const navigate = useNavigate();

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log('Form submitted', value);
        if (value){
            setTimeout(()=>{
                navigate(`/play`,{state : {wordSelected :value}});
            },2000);
           
        }
        // onSubmit?.(value);
    }

    function handleTextInputChange(event) {
        console.log('Text input changed');
        console.log(event.target.value);
        setValue(event.target.value);
    }

    return (
        // Calling the presentation layer
        <TextInputForm
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            value={value}
            inputType={inputType}
            setInputType={setInputType}
        />
    );

}

export default TextInputFormContainer;
