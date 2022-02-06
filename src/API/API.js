

import axios from "axios";



export default class AppServices {
    static async getCompetitions() {
        
        const res = await axios.get("https://api.football-data.org/v2/competitions",
            {
                headers: { 'X-Auth-Token': process.env.REACT_APP_API_KEY},
                method: 'GET',
                
                
                
                

            });
            
        return res.data;
    }

    static async getAreas() {
        const res = await axios.get("https://api.football-data.org/v2/areas",
            {
                headers: { 'X-Auth-Token': process.env.REACT_APP_API_KEY},
                method: 'GET',
                
            });
        return res.data;
    }

    static async getTeams(id) {
        const res = await axios.get(`https://api.football-data.org/v2/competitions/${id}/teams`,
            {
                headers: { 'X-Auth-Token': 'd4e0a667cb3c4c60a352fc4f4452ec1c'},
                method: 'GET',
                origin: '*'
            }).catch(error => {
                if (error.response.status !== 200) {
                    return { data: { teams: [] } }
                }
            }
            )
        return res.data;
    }

    static async getCompetitionMatches(id) {
        const res = await axios.get(`https://api.football-data.org/v2/competitions/${id}/matches`,
            {
                headers: { 'X-Auth-Token': 'd4e0a667cb3c4c60a352fc4f4452ec1c' },
                method: 'GET',
                origin: '*'
            }).catch(error => {
                if (error.response.status !== 200) {
                    return {data: {matches: []} }
                }
            }
            )
        return res.data;

    }

    static async getCompetitionStandings(id) {
        const res = await axios.get(`https://api.football-data.org/v2/competitions/${id}/standings`,
            {
                headers: { 'X-Auth-Token': 'd4e0a667cb3c4c60a352fc4f4452ec1c'},
                method: 'GET',
                origin: '*'
            });
        return res.data;
    }

    static async getTeamMatches(id) {
        const res = await axios.get(`https://api.football-data.org/v2/teams/${id}/matches`,
            {
                headers: { 'X-Auth-Token': 'd4e0a667cb3c4c60a352fc4f4452ec1c'},
                method: 'GET',
                origin: '*'

            }).catch(error => {
                if (error.response.status !== 200) {
                    return {data:{matches: [] } }
                }
            })
        return res.data

    }

}

