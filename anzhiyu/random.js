var posts=["2024/05/17/VPS购买/","2024/05/17/nginx/nginx-基础/","2024/05/17/nginx/nginx-一篇通/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };