## 인트로 
```md
[ 인트로 ]
슬랙 앱을 만들기 위한 과정을 기록합니다.
슬랙 앱은 웹 훅, restApi 이용 등등 의 다양한 방식으로 개발할수 있지만,
여기에서는 boltjs 라는 프레임 워크를 활용해 슬랙 앱을 개발하는 방법을 알아 보도록 하겠습니다.


[ boltjs 특징 ]
boltjs 프레임 워크에서 기존과 달라진 특징은, 
기존에는 public HTTP endpoint 를 사용한 반면,
boltjs 에서는 socket 모드를 활용하여 api 를 활성화 시켰다는 점 입니다.

이제, 다음의 과정을 통해 slack app 을 만들어 보겠습니다.

```
## 둘러볼 페이지
```md
우리는 슬랙 앱을 만드는동안 다음과 같은 페이지들을 둘러볼 것입니다.
편의상 페이지 이름을 다음과 같이 명명하겠습니다.

공식 페이지 : https://api.slack.com/
앱스 페이지 : https://api.slack.com/apps
마이앱 페이지 : https://api.slack.com/apps/..마이앱...
볼츠js 페이지 : https://slack.dev/bolt-js/tutorial/getting-started

```

## 1. 앱 만들기
```js
앱스 페이지에서 `Create New App` 을 클릭 하여 앱 생성을 진행 합니다.
```


## 2. 토큰 생성 하기
```js

슬랙앱의 권한 설정 및 인증 위해 토큰을 사용합니다.
사용할 토큰의 종류는 다음과 같습니다.

1. 유저 토큰 ( xoxp ) 
2. 봇 토큰 ( xoxb ) 
3. 앱 토큰 ( xapp ) 

```

#### 2.1 유저 토큰 ( xoxp ) 
```js

유저 토큰 생성 방법 : "자동 생성"
유저 토큰 위치 : [마이앱 페이지] - [ Basic information ] - [Signing Secret]
유저 토큰 설명 : 
- 유저 토큰은 자동으로 생성됩니다.

```
#### 2.2 봇 토큰 ( xoxb ) 
```js

봇 토큰 생성 방식 : "수동 생성"
봇 토큰 생성 방법 : 
[마이앱 페이지] - [OAuth & Permissions] - [Bot Token Scopes] - [Install App to Workspace]
봇 토큰 설명 :
- 봇 토큰에서는 봇의 역할 범위(scope)를 지정해 줍니다. 예를들어 스코프에 `chat:write` 를 추가하면,
봇이 슬랙채널에 쓰기 권한을 가지게 되는것입니다.
- 슬랙 앱을 개발하면서 추가적으로 필요한 권한이 있다면, 봇 토큰의 권한에 필요한 권한을 추가하면 됩니다.

```
#### 2.3 앱 토큰 ( xapp ) 
```js

앱 토큰 생성 방식 : "수동 생성"
앱 토큰 생성 방법: 

1. 소켓모드 설정 : [마이앱 페이지] - [socket Mode] - [Enable Socket Mode] 
2. 앱 토큰 생성 : [ Basic Information ] - [ Generate Token and Scopes ] - [ 스코프 설정 ] - [ generate ]

앱 토큰 설명 :
- 앱 토큰은 , 이벤트 권한을 관리할때 사용합니다. 


```

## 3. 토큰 저장 하기
```js

각각의 토큰을 생성하였으면, 환경변수에 저장합니다.
터미널을 열고 다음과 같은 명령어를 통해 토큰을 환경변수에 저장하도록 합니다.

export SLACK_SIGNING_SECRET=<your-signing-secret>
export SLACK_BOT_TOKEN=xoxb-<your-bot-token>
export SLACK_APP_TOKEN=xapp-<your-app-token>

```

## 3.1

