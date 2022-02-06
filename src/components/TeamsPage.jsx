import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TeamDescription } from "./TeamDescription";
import { TeamItem } from "./TeamItem";

export const TeamsPage = ({ team, id, name }) => {

    useEffect(() => {
        const team_item = document.querySelectorAll('.team_item');
        [...team_item].map(item => {
            item.addEventListener('click', () => {
                if (item.classList.contains('active')) {
                    [...team_item].map(item => {
                        item.classList.remove('active');
                    })
                } else {
                    [...team_item].map(item => {
                        item.classList.remove('active');
                    })
                    item.classList.add('active')
                }
            })
        })
    }, [])


    return (
        <>
            <h1>Teams of {name}</h1>
            {
                team.map(item =>
                    <div className='team_item' key={item.id}>
                        <TeamItem item={item} id={id} />
                        <TeamDescription item={item} />
                    </div>)
            }
        </>
    )
}