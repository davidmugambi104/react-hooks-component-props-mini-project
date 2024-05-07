import React from "react";

function ArticleList({articles}) {
    return(
        <main>
           { articles.map((article, index)=>{
  <Article key={index}{...article}/>
}

            )}
        </main>
       
    )
    
}