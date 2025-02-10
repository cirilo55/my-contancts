import { useRef } from "react";
import LoginForm from "../../components/LoginForm";

export default function LoginPage()
{
    const loginFormRef = useRef(null);
    async function handleSubmit(formData) {
        // try{
        // const contact = ContactMapper.toPersistence(formData);

        // await ContactsServices.createContacts(contact);
        // contactFormRef.current.resetFields();
        // toast({
        //     type: 'success', 
        //     text: 'Contato cadastrado com sucesso!'
        // })
        // }catch {
        // toast({
        //         type: 'danger',
        //         text: 'Ocorreu um erro ao cadastrar o contato!'
        // })
        // }
    }
    return (
        <>
        <LoginForm 
            ref={loginFormRef}
            buttonLabel="Login"
            onSubmit={handleSubmit}
        />
        </>
    )
}