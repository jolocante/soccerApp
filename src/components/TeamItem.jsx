import { Link, useParams } from 'react-router-dom';

export const TeamItem = ({ item }) => {
    const { id } = useParams()
    return (
        <div className='comp_item'  >
            <Link className='link' to={'#'}>
                {item.name}
            </Link>
            <Link to={`/competitions/${id}/teams/${item.id}`} className='comp_item_btn link'>
                Team's Statistics
            </Link>
        </div>
    )
}