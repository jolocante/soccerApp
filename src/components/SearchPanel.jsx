
import { SearchInput } from './SearchInput';
import { SearchSelect } from './SearchSelect';

export const SearchPanel = ({ searchQuery, SearchQueryFunc, selectedArea, SelectedAreaFucn, area, setSearchQuery,setSelectedArea }) => {
    const ClearAll = () => {
        setSearchQuery('')
        setSelectedArea('')
    }
    
    return (
        <div className='header'>
            <div className='header_content'>
                <h1>Competitions List</h1>
                <div className='comps_list_search'>
                    <SearchInput
                        searchQuery={searchQuery}
                        SearchQueryFunc={SearchQueryFunc}
                    />
                    <SearchSelect
                        selectedArea={selectedArea}
                        SelectedAreaFucn={SelectedAreaFucn}
                        area={area}
                    />
                    <button className='btn' onClick = {ClearAll}>Clear All</button>
                </div>
            </div>
        </div>
    )
}