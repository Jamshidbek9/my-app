import React, { useState } from "react";
const Form = ({ createPost }) => {
    const [post, setpost] = useState({ name: '', surname: '' })

    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now()
        }
        createPost(newPost)
        setpost({ name: "", surname: "" })
    }
    return (
        <form>
            <h4 className="text-center">Create New Posts</h4>
            <input type='text' placeholder="Firstname" className="form-control" value={post.name} onChange={e => setpost({ ...post, name: e.target.value })} />
            <input type="text" placeholder="Lastname" className="form-control my-3" value={post.surname} onChange={e => setpost({ ...post, surname: e.target.value })} />
            <button className="btn btn-primary w-100" onClick={addPost}>Add Post</button>
        </form>
    )
}
export default Form