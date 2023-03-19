import { useEffect, useState } from "react";

import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

import "../styles/blog.module.css";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  const api = axios.create({
    baseURL: BASE_URL + "/api",
  });

  useEffect(() => {
    const url = BASE_URL + "/api/blogs";

    async function fetchBlogs() {
      const response = await fetch(url);
      const rawData = await response.json();

      const data = rawData["data"];

      setBlogs(data);

      const me = await api.get("/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(JSON.stringify(me.data, null, 2));
    }

    fetchBlogs();
  }, []);

  console.log(JSON.stringify(blogs, null, 2));

  return (
    <>
      {blogs.map((blog) => (
        <div key={blog.id} className="p-10">
          <h3 className="text-center">{blog["attributes"]["title"]}</h3>
          <p>{blog["attributes"]["content"]}</p>
          <i className="text-center block">{blog["attributes"]["author"]}</i>
        </div>
      ))}
    </>
  );
}
