import HttpClient from "./utils/HttpClient";
import ContactMapper from '../services/mappers/ContactMapper';

class ContactsService {
    constructor()
    {
        this.httpClient = new HttpClient('http://localhost:3001')
    }
    listContacts(orderBy){
        return this.httpClient.get(`/contacts?orderBy=${orderBy}`,{
            headers: {
    
            }
        });
    }

    getContactById(id){
        return this.httpClient.get(`/contacts/${id}`)
    }

    createContacts(contact){
        const body = ContactMapper.toPersistence(contact)
        return this.httpClient.post(`/contacts`, {body})
    }

    updateContact(id, contact){
        const body = ContactMapper.toPersistence(contact)
        return this.httpClient.put(`/contacts/${id}`,  {body})
    }

    deleteContact(contact){
        return this.httpClient.delete(`/contacts/${contact.id}`)
    }
}

export default new ContactsService();