function getArticleGenerator(articles) {
  return () => {
    if (articles.length > 0) {
      let div = document.getElementById("content");
      let article = document.createElement("article");
      article.innerText = articles.shift();
      div.appendChild(article);
    }
  };
}
