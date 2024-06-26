import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";
import ContactsServices from '../../services/ContactsServices';
import toast from "../../utils/toast";
import { useRef } from "react";
import ContactMapper from "../../services/mappers/ContactMapper";

export default function NewContact()
{
    const contactFormRef = useRef(null);
    async function handleSubmit(formData) {
        try{
        const contact = ContactMapper.toPersistence(formData);

        await ContactsServices.createContacts(contact);
        contactFormRef.current.resetFields();
        toast({
            type: 'success', 
            text: 'Contato cadastrado com sucesso!'
        })
        }catch {
        toast({
                type: 'danger',
                text: 'Ocorreu um erro ao cadastrar o contato!'
        })
        }
    }
    return (
        <>
        <PageHeader 
            title="Novo Contato"
            
        />
        <ContactForm 
            ref={contactFormRef}
            buttonLabel="Cadastrar"
            onSubmit={handleSubmit}

        />
        </>
    )
}