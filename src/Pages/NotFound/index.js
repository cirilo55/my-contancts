import { useHistory } from "react-router-dom"
import Button from "../../components/Button";
import Container from './styles';
import FourZeroFour from './../../assets/images/404.svg'
export default function NotFound()
{
    const history = useHistory();

    function handleNavigate(){
        history.push('/');
    }

    return (
    <Container>
        <img src={FourZeroFour} alt="404" width='200px'/>
        <div className="label">
        <h1>Not Found</h1>
        <Button><a href='/'> Return to Home</a></Button>
        </div>
    </Container> 
    ) 
}