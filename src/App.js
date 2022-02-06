import {Routes, Route, Link, Router} from 'react-router-dom'
import './index.css'
import { useEffect, useState } from 'react'
import { CompetitionsPage } from './components/CompetitionsPage'
import { CompetitionPage } from './components/CompetitionPage'
import { MainPage } from './components/MainPage'
import AppServices from './API/API'
import { CompetitionStatPage } from './components/CompetitionStatPage'
import { TeamStatPage } from './components/TeamStatPage'

function App() {
  const [posts, setPosts] = useState([])
    
  async function FetchPosts() {
    const data = await AppServices.getCompetitions()
    setPosts(data.competitions)
  }
  
  useEffect(() => {
    FetchPosts()
  },[])

  return (
    <div className='container'>
      <Routes>
       <Route path = "/" element = {<MainPage/>} />
       <Route path = "/competitions" element = {<CompetitionsPage posts = {posts} />} />
       <Route path = "/competitions/:id/teams" element = {<CompetitionPage/>} />
       <Route path = "/competitions/:id/matches" element = {<CompetitionStatPage/>} />
       <Route path = "/competitions/:id/teams/:teamID" element = {<TeamStatPage />} /> 
     </Routes>   
      </div>
  )
}

export default App;
