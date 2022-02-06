export const SearchSelect = ({ selectedArea, area, SelectedAreaFucn}) => {
    return (
        <select
            className="select" aria-label="Default select example"
            value={selectedArea}
            onChange={SelectedAreaFucn}
        >
            <option value=''>...</option>
            {
                area.map(item => <option value={item.name} key={item.id}>{item.name}</option>)
            }
        </select>
    )
}