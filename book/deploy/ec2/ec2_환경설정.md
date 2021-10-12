## ec2 접속하기
```
1. ~/작업폴더/.pem 파일을 저장 
- pem 파일에는 rsa 키가 저장 되어있음

2. 파일 권한 변경
- sudo chmod 400 [파일명]
- 참고 : https://dabid.tistory.com/11

3. ec2 접속하기
- ssh -i [pem 경로] ubuntu@[public ip addr]
- 참고: https://artiiicy.tistory.com/12
```

## pm2 로 서버 올리기

```md
- git clone [repository 주소]
- sudo npm install pm2 -g
- pm2 start [index.js]

```

