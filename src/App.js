import React, { useMemo, useState } from "react";
import Count from "./components/Count";
import Table from "./components/Table";
import Component from "./components/component";
import './css/style.css'
import Form from "./components/form";
import MySelect from "./components/MySelect";
import Mymodal from "./components/modal/Mymodal";
function App() {
  const [posts, setposts] = useState([
    { id: 1, name: 'Deyl', surname: "Karnegi" },
    { id: 2, name: 'Brayn', surname: "Treyse" },
    { id: 3, name: 'Roben', surname: "Sharma" },
    { id: 4, name: 'Robert', surname: "Kiyosaki" }
  ])
  const [select, setSelect] = useState("")
  const [search, setSearch] = useState("")
  const [modal , setModal] = useState(false)

  const SortedPosts = useMemo(() => {
    if (select) {
      return [...posts].sort((a, b) => a[select].localeCompare(b[select]))
    }
    return posts
  }, [select, posts])

  const sortAndSearchPosts = useMemo(() => {
    return SortedPosts.filter(post => post.name.toLowerCase().includes(search.toLowerCase()))
  }, [search, SortedPosts])

  const createPost = (newPost) => {
    setposts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setposts(posts.filter(s => s.id !== post.id))
  }


  const sortPost = (sort) => {
    setSelect(sort)
  }


  return (
    <div className="App w-50 mx-auto border p-5">
      <Mymodal 
      modal={modal} setModal={setModal}>
        <Form createPost={createPost} />
      </Mymodal>
      <h3>birinchi dars</h3>
      <Count />
      <h3>ikkinchi dars</h3>
      <Component />
      <hr />
      <h3>uchinchi dars uchun</h3>
      <button className="btn btn-primary" 
      onClick = {() => setModal(true)}>Add Post</button>
      <MySelect
        value1={search}
        onChange1={e => setSearch(e.target.value)}
        value={select}
        onChange={sortPost}
        defaultValue="Sorted By"
        options={[
          { value: "name", name: 'First Name' },
          { value: "surname", name: "Last Name" }
        ]}
      />
      <Table posts={sortAndSearchPosts} remove={removePost} />

    </div>

  );
}

export default App;
