import React from "react";
import PostCard from "../posts/PostCard";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      imgUrl: "/posts/post-bg-1.png",
      title: "Loudest à la Madison #1 (L'integral)",
      desc:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      commentCount: 10,
    },
    {
      id: 2,
      imgUrl: "/posts/post-bg-2.png",
      title: "Loudest à la Madison #1 (L'integral)",
      desc:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      commentCount: 10,
    },
    {
      id: 3,
      imgUrl: "/posts/post-bg-3.png",
      title: "Loudest à la Madison #1 (L'integral)",
      desc:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      commentCount: 10,
    },
  ];
  return (
    <section className="mt-20">
      <div className="container px-5 py-20 mx-auto">
        <div className="items-center text-center text-black space-y-2">
          <h3 className="text-xl font-semibold text-myGry">Practice Advice</h3>
          <h1 className="text-4xl font-bold text-myHeading">Featured Posts</h1>
          <h6 className="text-myBlk">
            Problems trying to resolve the conflict between <br />
            The two major realms of Classical Physics: Newtonian mechanics
          </h6>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12 space-y-3 sm:space-y-0">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              imgUrl={post.imgUrl}
              title={post.title}
              desc={post.desc}
              date={post.date}
              commentCount={post.commentCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
