import React, { useState, useEffect } from "react"
import AppServices from '../API/API'
import { CompItem } from "./CompItem"
import { Loader } from "./Loader"

import { SearchPanel } from './SearchPanel'

export const CompetitionsPage = ({ posts }) => {

    const [area, setArea] = useState([])
    const [selectedArea, setSelectedArea] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [sortedPosts, setSortedPosts] = useState(posts)
    const [isLoading, setIsLoading] = useState(false)

    async function FetchPosts() {
        setIsLoading(true)
        const data = await AppServices.getAreas()
        setArea(data.areas);
        setIsLoading(false)
    }

    useEffect(() => {
        FetchPosts()
    }, [])

    useEffect(() => {

        setSortedPosts(() => {
            return posts
                .filter(item => {
                    return item.name.toLowerCase().includes(searchQuery);
                }).filter(item => {
                    if (selectedArea === '') {
                        return true
                    } else {
                        return item.area.name === selectedArea;
                    }
                })
        })

    }, [searchQuery, selectedArea]);

    const SearchQueryFunc = (e) => {
        setSearchQuery(e.target.value)
    }

    const SelectedAreaFucn = (e) => {
        setSelectedArea(e.target.value)
    }

    

    return (
        <div className='comps_list'>
            {
                isLoading
                    ? <Loader />
                    : <>                       
                        <SearchPanel
                            searchQuery={searchQuery}
                            SearchQueryFunc={SearchQueryFunc}
                            selectedArea={selectedArea}
                            SelectedAreaFucn={SelectedAreaFucn}
                            area={area}
                            setSearchQuery = {setSearchQuery}
                            setSelectedArea = {setSelectedArea}

                        />
                        {
                            searchQuery === '' && selectedArea === '' && sortedPosts.length == 0
                                ? posts.length
                                    ? <CompItem posts={posts} />
                                    : <Loader />
                                : (selectedArea !== '' || searchQuery !== '') && sortedPosts.length == 0
                                    ? <h1 className='no_matches'>No Competitions</h1>
                                    : <CompItem posts={sortedPosts} />
                        }
                    </>
            }

        </div>
    )
}