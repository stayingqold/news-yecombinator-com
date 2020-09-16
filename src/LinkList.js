import React, { Component } from 'react';

import Link from "./Link";


class LinkList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []
        };
    }

    componentDidMount() {
        fetch("https://www.reddit.com/r/kanye/hot.json?count=20")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts: result.data.children
                });
            },

            // handle error
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        const {error, isLoaded, posts} = this.state;
        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    <ol className="pl1 pr0">
                    {
                        posts.map((post, index) => (
                            <Link key = {post.data.permalink} num_comments = {post.data.num_comments} created = {post.data.created_utc} points = {post.data.ups} author = {post.data.author} title={post.data.title} permalink={post.data.permalink} index={index} />
                        ))
                    }
                    </ol>
                </div>
            );
        }    
    }
}

export default LinkList;
