import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { render } from "react-dom";
import Pagination from "./Pagination";
import Posts from "./Posts";
import "./style.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postPerPage; // 1*10
  console.log(indexOfLastPost);
  const indexOfFirstPost = indexOfLastPost - postPerPage; // 0
  console.log(indexOfFirstPost);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Pagination demo</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postPerPage={postPerPage}
        totalPost={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

render(<App />, document.getElementById("root"));
