export const MatchItem = ({matches}) => {
    return (
        <div className='match_list'>
        {matches.map(item =>
            <div key={item.id} className='match_item'>
                <div className='match_item_date'>
                    <u>{new Date(item.utcDate).toLocaleDateString()}</u>
                </div>
                <div className='match_item_main'>
                    <div className='match_item_home_team'>{item.homeTeam.name}</div>
                    <div className='match_item_home_team_score'>{item.score.fullTime.homeTeam}</div>
                    <div className='match_item_delta'>:</div>
                    <div className='match_item_away_team_score'>{item.score.fullTime.awayTeam}</div>
                    <div className='match_item_away_team'>{item.awayTeam.name}</div>
                </div>
                <div className='match_name_half'>
                    ( {item.score.halfTime.homeTeam} : {item.score.halfTime.awayTeam} )
                </div>
            </div>
        )
        }
        </div>
    )
}