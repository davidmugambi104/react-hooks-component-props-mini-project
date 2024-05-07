import React from "react";
import blogData from "../data/blog";
import ArticleList from "./articleList"


console.log(blogData);

function App() {
  const {name, image, about, articles}=blogData
  return (
    <div className="App">
      <Header name={name}/>
      <About about={about} image={image}/>
      <ArticleList article={articles}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
