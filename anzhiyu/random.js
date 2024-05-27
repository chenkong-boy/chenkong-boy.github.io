var posts=["2024/05/17/VPS购买/","2024/05/17/hexo/HEXO-anzhiyu配置/","2024/05/17/CICD/大纲/","2024/05/17/hexo/HEXO各个大佬的配置网址/","2024/05/17/K8S/K8S网络/","2024/05/17/nginx/nginx-基础/","2024/05/17/数据库/redis/","2024/05/17/数据库/msyql/","2024/05/17/nginx/nginx-一篇通/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };