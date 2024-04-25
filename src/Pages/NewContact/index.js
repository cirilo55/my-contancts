import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";
import ContactsServices from '../../services/ContactsServices';


export default function NewContact()
{
    async function handleSubmit(formData) {
        try{
        const contact = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            category_id: formData.categoryId,
        };

        const response = await ContactsServices.createContacts(contact);
        } catch {
            alert('deu erro :( ')
        }
    }
    return (
        <>
        <PageHeader 
            title="Novo Contato"
            
        />
        <ContactForm 
            buttonLabel="Cadastrar"
            onSubmit={handleSubmit}

        />
        </>
    )
}