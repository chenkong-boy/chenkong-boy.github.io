var posts=["2024/05/17/CICD/ansible-应用/","2024/05/17/CICD/大纲/","2024/05/17/K8S/K8S网络/","2024/05/17/JAVA/tomcat/","2024/05/17/K8S/K8S部署/","2024/05/17/VPN/VPS购买/","2024/05/17/Linux/基础命令/","2024/05/17/hexo/HEXO-anzhiyu配置/","2024/05/17/nginx/nginx-一篇通/","2024/05/17/nginx/nginx-基础/","2024/05/17/storage/FTP-SFTP/","2024/05/17/storage/ceph/","2024/05/17/数据库/redis/","2024/05/17/hexo/HEXO各个大佬的配置网址/","2024/05/17/安全/安全-基础/","2024/05/17/数据库/msyql/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };