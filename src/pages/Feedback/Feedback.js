import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
export default function Feedback({ user }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [blogPost, setBlogPost] = useState(false)
    const [toggle, setToggle] = useState(false)
    const content = useRef()
    const title = useRef()
    let token = localStorage.getItem("token")
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log("test")
            const response = await axios.post("/posts/626c90a233a348911aa6afe6/comments", {
                title: title.current.value, content: content.current.value
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            setToggle(!toggle)
            navigate('/feedback')
            console.log(toggle)
        } catch (err) {
            console.log(err)
        }
    }
    const handleDelete = async (id) => {
        // e.preventDefault()
        try {
            // console.log(token)
            const response = await axios.delete(`/posts/626c90a233a348911aa6afe6/comments/${id}`)
            setToggle(!toggle)
            navigate('/feedback')
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        (async () => {
            try {

                // setLoading(true)
                const response = await axios.get(`/posts/626c90a233a348911aa6afe6`)
                setBlogPost(response.data.foundPost)
                // setLoading(false)

            } catch (err) {
                console.log(err)
            }
        })()
    }, [toggle])

    // if (loading) {
    //     return (
    //         <h2>Loading</h2>
    //     )
    // }
    return (
        <div className="blog-wrapper">
            <div className="blog-inner-wrapper">
                <div className="blog-post">
                    <h1 className="blog-title">{blogPost.title}</h1>
                    <img src={blogPost.img} alt="blog image" />
                    <p className="blog-content">{blogPost.content}</p>
                </div>
            </div>
            <div className="form-outter-wrapper">
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <p>Comment Title</p>
                        <input className="enter-comment" placeholder='Enter comment title' type="text" ref={title} />
                        <p>Comment</p>
                        <textarea className="enter-comment-content" placeholder='Enter comment' type="text" ref={content} />
                        <div className="submit-button">
                            <input type="submit" value="Add Comment" />
                        </div>
                    </form>
                </div>
            </div>
            {blogPost.comments ?
                <div className="commentBlock">
                    {blogPost.comments.map((comment, idx) => {
                        // console.log(comment._id)
                        return (
                            <div key={idx} className="comment">
                                <div className="comment-title">
                                    <p>{comment.title}</p>
                                </div>
                                <div className="comment-content">
                                    <p>{comment.content}</p>
                                </div>
                                <div className="comment-user">
                                    <p>{`Posted by: ${comment.user.name}`}</p>
                                    {user.email === comment.user.email || user.admin ?
                                        <button className="delete-button" onClick={() => { handleDelete(comment._id) }}>Delete Comment</button>
                                        : ''}
                                </div>
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
