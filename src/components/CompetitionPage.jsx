import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import AppServices from '../API/API'
import { BackButton } from '../UI/button/BackButton'
import { Loader } from './Loader'
import { TeamsPage } from './TeamsPage'


export const CompetitionPage = () => {
    const { id } = useParams()
    const [data, setData] = useState({teams:[]})
    const [isTeamLoading, setIsTeamsLoading] = useState(true)
      
    async function FetchPosts() {
        const response = await AppServices.getTeams(id)
        if(response) setData(response)
        setIsTeamsLoading(false)
        console.log(data.competition.name)
    }
    

    useEffect(() => {       
        FetchPosts()     
    }, [])
  
    return (
        <div className='teams_list'>
        
            {isTeamLoading
                ? <Loader/>
                : data.teams.length !== 0
                    ? <>
                        <TeamsPage team={data.teams} name = {data.competition.name} id = {id} />
                    </>
                    : (
                        <div className='no_matches'>
                        <h1>No teams</h1>
                        <BackButton/>
                        </div>
                    )
            }
        </div>
    )
}