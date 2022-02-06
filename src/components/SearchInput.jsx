export const SearchInput = ({searchQuery, SearchQueryFunc}) => {
  return (
    <input
    type='text'
    placeholder='search..'
    value={searchQuery}
    onChange={SearchQueryFunc}
    className='search_input' />
 )
}