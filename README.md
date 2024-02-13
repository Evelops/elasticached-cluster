### elasticached Repo

#### Install Info


```bash 
###############################################
# OS: ubuntu22.04 LTS 
###############################################
# Install Logs
$ sudo apt-get install gcc
$ wget http://download.redis.io/redis-stable.tar.gz # redis stable version install  
$ tar xvzf redis-stable.tar.gz
$ apt install redis-tools
$ cd redis-stable
$ sudo apt install make
$ sudo apt install make-guile
$ make 
$ src/redis-cli -c -h [redis_endPoint] -p 6379 
```

- 동일한 VPC 환경에서 사용(EC2 & Elasticache)
- VPC SG 6317 방화벽 허용 