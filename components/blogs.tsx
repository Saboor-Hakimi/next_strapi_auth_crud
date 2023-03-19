import { useEffect, useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

import "../styles/blog.module.css";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const url = BASE_URL + "/api/blogs";

    async function fetchBlogs() {
      const response = await fetch(url);
      const rawData = await response.json();

      const data = rawData["data"];

      setBlogs(data);
    }

    fetchBlogs();
  }, []);

  console.log(blogs);

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
