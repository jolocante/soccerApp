import React from 'react';
import { Link } from 'react-router-dom'

export const CompItem = ({ posts }) => {
    return (
        <div className='comps_content'>
            {posts.sort((a, b) => a.name.localeCompare(b.name)).map((post, i) =>
                <div className='comp_item'
                    key={post.id}
                    id={post.id}
                >
                    <Link
                        className='comp_item_name link'
                        to={`/competitions/${post.id}/teams`}>
                        {post.name}
                    </Link>
                    <div
                        className='comp_item_btns'
                    >
                        <Link to={`/competitions/${post.id}/teams`}
                            className='comp_item_btn link'
                        >
                            Teams
                        </Link>
                        <Link
                            to={`/competitions/${post.id}/matches`}
                            className='comp_item_btn link'
                        >
                            Statistics
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}
