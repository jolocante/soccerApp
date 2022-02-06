import { useEffect, useState, useMemo } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import { HomeButton } from "../UI/button/HomeButton";

export const Calendar = ({ matches, name }) => {


    const [searchParams, setSearchParams] = useSearchParams();
    const [start, setStart] = useState(searchParams.get('start'));
    const [end, setEnd] = useState(searchParams.get('end'))
    const [status, setStatus] = useState(searchParams.get('status'))
    const [statusList, setStatusList] = useState([])
    const [tour, setTour] = useState(searchParams.get('tour'))
    const [tourList, setTourList] = useState([])


    useEffect(() => {
        const status = new Set()
        matches.forEach(item => {
            status.add(item.status)
        })
        const tour = new Set()
        matches.forEach(item => {
            tour.add(item.matchday)
        })
        setStatusList(Array.from(status))
        setTourList(Array.from(tour))

    }, [matches])

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const start = form.start.value
        const end = form.end.value
        const status = form.status.value
        const tour = form.tour.value
        const params = {}

        if (start) params.start = start
        if (end) params.end = end
        if (status) params.status = status
        if (tour) params.tour = tour

        setSearchParams(params);

    }

    const ClearValue = (e) => {
        e.preventDefault()

        setStart('')
        setEnd('')
        setStatus('')
        setTour('')
        setSearchParams('')
    }

    return (
        <div className='search_panel'>
            <h1>Matches of {name}</h1>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <div>
                    <label for='start'>
                        From:
                    </label>
                    <input type="date" name='start' value={start}
                        onChange={(e) => {
                            setStart(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label for='finish'>
                        To:
                    </label>
                    <input type="date" name='end' value={end}
                        onChange={(e) => {

                            setEnd(e.target.value)
                        }}
                    />
                </div>
                {/* выбор статуса матча - предстоящий, отложенный, текущий или сыгранный */}
                <div><label for='status'>Status</label><select value={status} onChange={e => setStatus(e.target.value)} name='status'>
                    <option value=''>...</option>
                    {
                        statusList.map(item => {
                            return <option value={item}>{item.toLowerCase()}</option>
                        })
                    }
                </select>
                </div>
                <div>
                    <label for='tour'>
                        Tour
                        </label>
                    <select value={tour} onChange={e => setTour(e.target.value)} name='tour'>

                        <option value=''>...</option>
                        {
                            tourList.map(item => {
                                return <option value={item}>{item}</option>
                            })
                        }
                    </select>
                </div>
                <div className='search_btns'>
                    <button className='btn' id='find' >Find</button>
                    <button onClick={ClearValue} className='btn'>Clear All</button>
                    <HomeButton />
                </div>
            </form>
        </div>
    )
}