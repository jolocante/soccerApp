
export const TeamDescription = ({item}) => {
    
    return (
        <div className='team_description'>
                            <img width='125px' height='125px' src={item.crestUrl} />
                            <div className='team_description_text'>
                                <p>Год основания - {item.founded}</p>
                                <p>Адрес - {item.address}</p>
                                <p>Цвета клуба - {item.clubColors}</p>
                                <p>Стадион - {item.venue}</p>
                                <p>Сайт - <a href={item.website} >{item.website}</a></p>
                            </div>
                        </div>
    )
}