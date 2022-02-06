import { BackButton } from "../UI/button/HomeButton"

export const SearchMatchesPanel = ({getDateSlot}) => {
    return (
        <div>
        <Calender getDateSlot={getDateSlot}/>
        <BackButton/>
        </div>   
    )
}