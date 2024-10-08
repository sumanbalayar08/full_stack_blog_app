import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import moment from "moment";

const Write = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null); // To store the selected image file
  const [category, setCategory] = useState("art");
  const [value, setValue] = useState("");
  const token = localStorage.getItem("authToken");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("http://localhost:4000/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const imgUrl = await upload();
    try {
      console.log(file);
      await axios.post(
        "http://localhost:4000/post/",
        {
          title,
          content: value,
          category,
          img: file ? imgUrl : "",
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'

          },
        }
      );
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}> {/* Wrap the form fields with a form element */}
      <div className="flex px-[8%] justify-around py-[5%] space-x-4">
        <div className="w-[70%] space-y-2">
          <input
            type="text"
            placeholder="Enter the title"
            className="border-[1.5px] border-slate-300 w-full py-2 px-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
          <div className="h-[34.5%]">
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              className="h-[300px]"
              required
            />
          </div>
        </div>
        <div className="flex flex-col space-y-3 w-[30%]">
          <div className="flex flex-col space-y-1 border-[1.5px] border-slate-300 p-4">
            <h1 className="text-2xl font-extrabold">Publish</h1>
            <span>
              {" "}
              <b>Status: </b>Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
            <div className="flex justify-between">
              <button className="bg-sky-400 px-2 py-1 rounded-sm text-sm">
                Save as draft
              </button>
              <button
                className="bg-sky-400 px-2 py-1 rounded-sm text-sm"
                type="submit"
              >
                Post
              </button>
            </div>
          </div>
          <div className="flex flex-col border-[1.5px] border-slate-300 p-5">
            <h1 className="text-2xl font-extrabold">Category</h1>
            <div>
              <input
                type="radio"
                name="cat"
                value="art"
                id="art"
                checked={category === "art"}
                onChange={(e) => setCategory("art")}
              />
              <label htmlFor="art">Art</label>
            </div>
            <div>
              <input
                type="radio"
                name="cat"
                value="science"
                id="science"
                checked={category === "science"}
                onChange={(e) => setCategory("science")}
              />
              <label htmlFor="science">Science</label>
            </div>
            <div>
              <input
                type="radio"
                name="cat"
                value="technology"
                id="technology"
                checked={category === "technology"}
                onChange={(e) => setCategory("technology")}
              />
              <label htmlFor="technology">Technology</label>
            </div>
            <div>
              <input
                type="radio"
                name="cat"
                value="food"
                id="food"
                checked={category === "food"}
                onChange={(e) => setCategory("food")}
              />
              <label htmlFor="food">Food</label>
            </div>
            <div>
              <input
                type="radio"
                name="cat"
                value="sports"
                id="sports"
                checked={category === "sports"}
                onChange={(e) => setCategory("sports")}
              />
              <label htmlFor="sports">Sports</label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Write;
