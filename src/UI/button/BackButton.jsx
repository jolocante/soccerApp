
import {Link, useNavigate} from 'react-router-dom'
export const BackButton = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1);
    return (
        <button 
        onClick={goBack}
        className = 'btn'
        >Back
        </button>
    )
}
