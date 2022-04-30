import { useState, useEffect, useRef } from "react"
import axios from "axios"
export default function Feedback({ }) {
    const [loading, setLoading] = useState(false)
    const [blogPost, setBlogPost] = useState(false)
    useEffect(() => {
        (async () => {
            try {

                // setLoading(true)
                const response = await axios.get(`http://localhost:3001/posts/626c90a233a348911aa6afe6`)
                setBlogPost(response.data.foundPost)
                // setLoading(false)

            } catch (err) {
                console.log(`err`)
            }
        })()
    }, [])


    return (
        <div className="blog-wrapper">
            <div className="blog-post">
                <img src={blogPost.img} alt="blog image" />
                <p>{blogPost.title}</p>
                <p>{blogPost.content}</p>
            </div>


            {blogPost.comments ?
                <div className="commentBlock">
                    {blogPost.comments.map((comment) => {
                        return (
                            <div className="comment">
                                <p>{`Posted by ${comment.user.name}`}</p>
                                <p>{comment.title}</p>
                                <p>{comment.content}</p>
                            </div>
                        )
                    })}
                </div>
                :
                ""
            }
        </div >
    )
}
