import React, { useState } from "react";
import { blogList } from "../config/data";
import "../App.css";
const Home = () => {
	const [search, setSearch] = useState("");
	const [blogs, setBlogs] = useState(blogList);
	const handleSubmit = e => {
		e.preventDefault();
		alert("hello");
	};
	return (
		<div>
			{/* Page Header*/}
			<header className="home-header">
				<h2>Inc. This Morning</h2>
				<h1>
					<span>“</span> Blog <span>”</span>
				</h1>
				<p>
					awesome place to make oneself <br /> productive and entertained through daily updates.
				</p>
			</header>
			{/* Search Bar */}
			<div className="searchBar-wrap">
				<form onSubmit={e => handleSubmit(e)}>
					<input type="text" placeholder="Search By Category" value={search} onChange={e => setSearch(e.target.value)} />
					{search && <span onClick={() => setSearch("")}>X</span>}
					<button type="submit">Go</button>
				</form>
			</div>

			{/* Blog List & Empty List */}
			<div className="blogList-wrap">
				{blogs.map((blog, index) => {
					return (
						<div key={index} className="blogItem-wrap">
							<img className="blogItem-cover" src={blog.cover} alt="cover" />
							<h3>{blog.title}</h3>
							<p className="blogItem-desc">{blog.description}</p>
							<footer>
								<div className="blogItem-author">
									<img src={blog.authorAvatar} alt="avatar" />
									<div>
										<h6>{blog.authorName}</h6>
										<p>{blog.createdAt}</p>
									</div>
								</div>
							</footer>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
