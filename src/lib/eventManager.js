export default class EventManager{
    constructor(){
        this.listeners = new Map(); 
    }

    on(event, listener){
        if(!this.listeners.has(event)){
            this.listeners.set(event, []);
        }

        this.listeners.get(event).push(listener);
    }

    emit(event, payload){   
        if(!this.listeners.has(event)){
            return
        }
        this.listeners.get(event).forEach((listerner) =>{
            listerner(payload)
        })
    }

    removeListener(event, listenerToRemove){
        const listerners = this.listeners.get(event);
        
        if(!listerners){
            return;
        }

        const filteredListerners = listerners.filter(
            (listerner) => listerner !== listenerToRemove
        );

        this.listeners.set(event, filteredListerners);
    }
}