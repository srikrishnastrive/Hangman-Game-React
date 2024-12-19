import { useEffect, useState } from "react";
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
    // useEffect(()=>{
    //     console.log('component first load');
    // },[]); // passing empty dependency array
    // useEffect(() =>{
    //     console.log('component first load and upadate');
    // });
    // useEffect(() =>{
    //     console.log('component first load and update value changed');
    // },[value]);
    // useEffect(() =>{
    //     console.log('component first load and input value changed');
    // },[inputType]);

    return (
        // Calling the presentation layer
        <>
        
        <TextInputForm
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            value={value}
            inputType={inputType}
            setInputType={setInputType}
        />
        {inputType === 'password' ? <Temp/> : null}
        </>
    );

}

function Temp(){
    useEffect(() => {
        console.log('Temp component first load');
        return () =>{
            console.log("Temp component unmounted");
        }
    },[]);
}

export default TextInputFormContainer;
