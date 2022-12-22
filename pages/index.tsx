import React from "react";
import Home from "./home/home";

export default function Index({allPosts}: any) {
  return (
    <div>
      <Home posts={allPosts}></Home>
    </div>
  );
}

export async function getStaticProps() {

  let url = "https://regularswitch-next.vercel.app/api/project"
  // let url = "http://localhost:3000/api/project"
  let requestPosts = await fetch(url)
  let allPosts = await requestPosts.json();

  return {
    props: {
      allPosts
    },
    revalidate: 10
  }
}