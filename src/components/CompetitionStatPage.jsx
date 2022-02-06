import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import AppServices from '../API/API'
import { BackButton } from '../UI/button/BackButton';
import { Calendar } from './Calendar';
import { Loader } from './Loader';
import { MatchItem } from './MatchItem';

export const CompetitionStatPage = () => {
    const { id } = useParams()
    const [data, setData] = useState({matches: []})
    const [searchParams, setSeacrhParams] = useSearchParams()
    const [sortedMatches, setSortedMatches] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isClear, setIsClear] = useState(true)
    const start = searchParams.get('start')
    const end = searchParams.get('end')
    const status = searchParams.get('status')
    const tour = searchParams.get('tour')

    async function FetchPosts() {
        setIsLoading(true)
        const res = await AppServices.getCompetitionMatches(id);
        setData(res) 
        setIsLoading(false)
    }

    useEffect(() => {
        FetchPosts()
    }, [])

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
                if(tour) {
                    return item.matchday == tour
                }
                return true    
            })
        })
    }, [start, end, status, tour, isClear, isLoading])




    return (
        <div className='matches'>
            {   isLoading
                ? <Loader />
                : data.matches.length
                ?(<>
                  <Calendar matches={data.matches} name = {data.competition.name} />
                    {sortedMatches.length
                    ?<MatchItem matches={sortedMatches} />
                    :<h1 className='no_matches'>No matches</h1>}
                    </>)
                :(<div className = 'no_matches'>
                <h1>No dates</h1>
                <BackButton/>
                </div>)
            }
        </div>
    )
}