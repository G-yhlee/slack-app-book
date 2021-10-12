## aws 람람다  배배포포

1. aws 로그인
2. aws Iam 접속
3. 유저 추가
- username
- type:accesskey,programmatic access
4. https://www.youtube.com/watch?v=KngM5bfpttA

npm install serverless -g

serverless config credentials --provider aws --key AKIAS5XVZF56GJTQHSD6 --secret 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

서울 : ap-northeast-2


=======================================
set up serverless framework

npm install --save-dev serverless

npm install --save-dev serverless-offline

npx serverless offline --noPrependStageInUrl


========================================

https://slack.dev/bolt-js/deployments/aws-lambda

Interativity & Shortcuts  페이지가 사라져서 deploy 못함