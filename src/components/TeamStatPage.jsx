import { useState, useEffect } from "react";
import { useParams } from "react-router";
import AppServices from '../API/API';
import { Calendar } from "./Calendar";
import { MatchItem } from "./MatchItem";
import { useSearchParams } from 'react-router-dom'

import { Loader } from './Loader';


export const TeamStatPage = () => {
    const { teamID } = useParams()
    const [data, setData] = useState({ matches: [] })
    const [searchParams, setSeacrhParams] = useSearchParams()
    const [sortedMatches, setSortedMatches] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isClear, setIsClear] = useState(true)
    const [teamName, setTeamName] = useState('')
    const start = searchParams.get('start')
    const end = searchParams.get('end')
    const status = searchParams.get('status')
    const tour = searchParams.get('tour')

    async function FetchPosts() {
        setIsLoading(true)
        const data = await AppServices.getTeamMatches(teamID)
        setData(data);
        if (teamID === data.matches[0].awayTeam.id) {
            setTeamName(data.matches[0].awayTeam.name)
        } else {
            setTeamName(data.matches[0].homeTeam.name)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        setSortedMatches(() => {
            return data.matches.filter(item => {
                if (start && end) {
                    return (Date.parse(item.utcDate) > Date.parse(start) &&
                        Date.parse(item.utcDate) < Date.parse(end))
                }
                if (start && !end) {
                    return Date.parse(item.utcDate) > Date.parse(start)
                }
                if (!start && end) {
                    return Date.parse(item.utcDate) < Date.parse(end)
                }
                return true
            }).filter(item => {
                if (status) {
                    return item.status === status
                }
                return true
            }).filter(item => {
                if (tour) {
                    return item.matchday == tour
                }
                return true
            })
        })
    }, [start, end, status, tour, isClear, isLoading])

    useEffect(() => {
        FetchPosts()
    }, [])

    return (
        <div className='matches'>
            {   isLoading
                ? <Loader />
                : sortedMatches.length
                    ? (
                        <>
                            <Calendar matches={data.matches} name={teamName} />
                            <MatchItem matches={sortedMatches} />
                        </>
                    )
                    : (
                        <>
                            <Calendar matches={data.matches} name={teamName} />
                            <h1 className={'no_matches'}>No matches</h1>
                        </>
                    )
            }
        </div>)
}