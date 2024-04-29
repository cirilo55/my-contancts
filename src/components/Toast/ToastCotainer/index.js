import { Container } from "./styles"

import ToastMessage from "../ToastMessage";
import { useState, useEffect } from "react";
import { toastEventManager } from "../../../utils/toast";

export default function ToastContainer(){
    const [messages, setMessages] = useState([]);

    useEffect(() =>{
        function handleAddToast({type, text}){

            setMessages((prevState) =>
                [...prevState,
                { id: Math.random(), type, text},]
            );
        }
        toastEventManager.on('addtoast', handleAddToast);

        return () => {
        toastEventManager.removeListener('addtoast', handleAddToast)
        };
    },[])

    function handleRemoveToast(id){
        setMessages((prevState) => prevState.filter(
            (message) => message.id !== id,
        ))
    }

    return (
        <Container onClick={handleRemoveToast}>
            {messages.map((message) => (
                <ToastMessage 
                key={message.id} 
                message={message}
                onRemoveMessage={handleRemoveToast}
                />

            ))}
        </Container>
    )
}