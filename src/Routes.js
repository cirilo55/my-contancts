import { Switch, Route} from 'react-router-dom';

import Home from './Pages/Home';
import NewContact from './Pages/NewContact';
import EditContact from './Pages/EditContact';

export default function Routes()
{
    return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new" exact component={NewContact}/>
        <Route path="/edit/:id" exact component={EditContact}/>
    </Switch>
    )

}