import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ContactsServices from "../../services/ContactsServices";
import Loader from "../../components/Loader";
import toast from "../../utils/toast";

export default function EditContact()
{
    const [isLoading, setIsLoading] = useState(true);
    const [contactName, setContactName] = useState();
    const { id } = useParams();
    const history = useHistory();
    const contactFormRef = useRef(null);

    useEffect(() =>{
        async function loadContact(){
            try{
                const contactData = await ContactsServices.getContactById(id)
                contactFormRef.current.SetFieldValues(contactData);
                setContactName(contactData.name)
                setIsLoading(false)
            }catch{
                //implementar a redireção api quebra ao chamar id falso.
                history.push('/')
                toast({
                    type: 'danger',
                    text: 'Contato não encontrado'
                })
            }
        }
        loadContact()

    }, [id, history])

    async function handleSubmit(formData)
    {
        try{
            const contact =
            {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                category_id: formData.categoryId
            };
        

            const contactData = await ContactsServices.updateContact(id, contact);

            toast({
                type: 'success',
                text: 'Atualizado com sucesso'
            });
            setContactName(contactData.name)

        }catch{
            toast({
                type: 'danger',
                text: 'Ocorreu um erro ao cadastrar o contato'
            });

        };
    
        
    }
    return (
    <>
        <Loader isLoading={isLoading}/>
        <PageHeader
            title={isLoading ? 'Editar ...':`Editar ${contactName}`} 
        />
        <ContactForm 
            buttonLabel="Salvar Alterações"
            onSubmit={handleSubmit}
            ref={contactFormRef}

        />
    </>
    )

     
}