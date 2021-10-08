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
앱스 페이지에서 `Create New App` - `From an app manifest` - `workspace 선택` 을 클릭 하여 앱 생성을 진행 합니다.

앱의 설정은 다음의 yaml 코드를 복사하여 진행합니다.

```

## 2. 앱 설정하기 
- 앱 설정을 위해 .yaml 로 작성된 설정 파일을 복사하여 붙여넣습니다.
- 설정파일은 앱이 만들어진 이후에도 변경 가능 합니다. 
- 각 설정 내용의 세부 사항은 차후에 정리하겠습니다. ( 우선, 공식홈페이지에서 확인 )

```yaml
_metadata:
  major_version: 1
  minor_version: 1
display_information:
  name: testApp
features:
  app_home:
    home_tab_enabled: true
    messages_tab_enabled: true
    messages_tab_read_only_enabled: false
  bot_user:
    display_name: PRISM - Cleanier Service
    always_online: true
  slash_commands:
    - command: /guide
      description: You are standing in an open field west of a white house, with a boarded front door. There is a small mailbox here.
      usage_hint: /guide
      should_escape: false
oauth_config:
  redirect_urls:
    - https://example.com/slack/auth
  scopes:
    bot:
      - commands
      - chat:write
      - chat:write.public
      - channels:read
      - channels:history
      - groups:history
      - im:history
      - mpim:history
settings:
  event_subscriptions:
    bot_events:
      - app_home_opened
      - message.groups
      - message.im
      - message.mpim
      - message.channels
  interactivity:
    is_enabled: true
  org_deploy_enabled: false
  socket_mode_enabled: true
  token_rotation_enabled: false
```

## 2. 토큰 생성 하기
- 앱을 생성하고나면 토큰을 생성하도록 합니다.
- 토큰을 생성하고나면 토큰을 환경 변수에 저장하여 쓸 수 있도록 합니다.

```yaml

# 토큰의 종류

1. 유저 토큰 ( xoxp ) 
2. 봇 토큰 ( xoxb ) 
3. 앱 토큰 ( xapp ) 

```

#### 2.1 유저 토큰 ( xoxp ) 
```js

유저 토큰 생성 방식 : "자동 생성"
유저 토큰 확인 방법 : [마이앱 페이지] - [ Basic information ] - [Signing Secret]
유저 토큰 설명 : 
- 유저 토큰은 자동으로 생성됩니다.

```
#### 2.2 봇 토큰 ( xoxb ) 
```js

봇 토큰 생성 방식 : "수동 생성"
봇 토큰 생성 방법 : 
[마이앱 페이지] - [OAuth & Permissions] - [Bot User OAuth Token]

봇 토큰 설명 :
- 봇 토큰에서는 봇의 역할 범위(scope)를 지정해 줍니다. 예를들어 스코프에 `chat:write` 를 추가하면,
봇이 슬랙채널에 쓰기 권한을 가지게 되는것입니다.
- 슬랙 앱을 개발하면서 추가적으로 필요한 권한이 있다면, 설정 파일의 'oauth_config' 영역에서 권한을 추가 하면됩니다.

```
#### 2.3 앱 토큰 ( xapp ) 
```js

앱 토큰 생성 방식 : "수동 생성"
앱 토큰 생성 방법: [ Basic Information ] - [App-Level Tokens ]- [ Generate Token and Scopes ] - [ 스코프 설정 ] - [ generate ]

앱 토큰 설명 :
- 앱 토큰은 , 이벤트 권한을 관리할때 사용합니다. 
- 소켓 모드가 true 상태일때 사용가능합니다.

```

## 3. 토큰 저장 하기
```js
각각의 토큰을 생성하였으면, 환경변수에 저장합니다.
터미널을 열고 다음과 같은 명령어를 통해 토큰을 환경변수에 저장하도록 합니다.
```
```js
export SLACK_SIGNING_SECRET=`직접입력`
export SLACK_BOT_TOKEN=`xoxb-직접입력`
export SLACK_APP_TOKEN=`xapp-직접입력`
```
## 4. 앱 설치 및 토큰 설정  요약
```js

1~3 의 과정을 통해 `앱 설치` 및 `토큰 설정` 의 과정을 완료하였습니다.
다음으로는 nodejs 기반 프레임 워크인 boltjs api 를 활용하여 앱을 만드는 과정을 진행하겠습니다.

```

## 5. Nodejs 프로젝트 시작
```js
mkdir myapp && cd myapp && npm init -y && npm i @slack/bolt
```

## 6. app.js 파일 추가
```
app.js 파일에 
```

