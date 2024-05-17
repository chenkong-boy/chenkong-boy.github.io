var posts=["2024/05/17/hello-world/","2024/05/17/nginx-一篇通/","2024/05/17/nginx-1/","2024/05/17/nginx/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };