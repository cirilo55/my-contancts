import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ContactsServices from "../../services/ContactsServices";
import Loader from "../../components/Loader";
import toast from "../../utils/toast";

export default function EditContact()
{
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const contactFormRef = useRef(null);

    useEffect(() =>{
        async function loadContact(){
            try{
                const contactData = await ContactsServices.getContactById(id)
                console.log(contactData);
                contactFormRef.current.SetFieldValues(contactData);

                setIsLoading(false)
            }catch{
                //implementar a redireção api quebra ao chamar id flaso.
                toast({
                    type: 'danger',
                    text: 'Contato não encontrado'
                })
            }
        }
        loadContact()

    }, [id])
    function handleSubmit()
    {}
    return (
    <>
        <Loader isLoading={isLoading}/>
        <PageHeader
            title="Editar Registro"
        />
        <ContactForm 
            buttonLabel="Salvar Alterações"
            onSubmit={handleSubmit}
            ref={contactFormRef}

        />
    </>
    )

     
}