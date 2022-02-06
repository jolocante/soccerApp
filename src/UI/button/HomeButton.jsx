
import {Link, useNavigate} from 'react-router-dom'
export const HomeButton = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1);
    return (
        <Link 
        to={'/competitions'}
        className = 'btn'
        >Home
        </Link>
    )
}
