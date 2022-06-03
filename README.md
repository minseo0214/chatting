# Chatting application with node, typescript
하나의 서버에 여러 클라이언트가 접속하여, 채팅할 수 있습니다.

--------------------------------------

# 개발 환경 셋업
## 요구사항

* [Node.js](https://nodejs.org/ko/download/)
* [yarn](https://yarnpkg.com/getting-started/install)

## 사용 방법
다음과 같이 디펜던시를 설치합니다.
```
yarn install
```

디렉토리 구조는 다음과 같습니다.
```bash
├── public
│   └── index.html
└── src
    ├── client ── index.ts ...
    ├── server ── index.ts
    └── shared
```
TypeScript 소스 파일을 node에서 바로 실행할 수 없기 때문에, js 파일로 번들링을 해야 합니다. `package.json` 파일에 작성된 다음 스크립트들로 이에 필요한 작업들을 실행할 수 있습니다.

```bash
yarn watch:server
yarn watch:client
yarn server
```

위의 커맨드를 순서대로 입력하고 나면 `./public` 폴더에 `client.js`, `server.js`, `client.css` 가 생기고, 웹 서버가 실행됩니다. 이제 브라우저에 들어가서 http://localhost:3000 로 접속하면 아래와 같은 화면을 확인하실 수 있습니다.

-------

# 사용 방법

## 1. 맨 위에 있는 별명을 먼저 입력한다.

![initial](https://user-images.githubusercontent.com/63771626/171602803-35b967bc-00db-4274-be77-d1a6e91e2ca9.png)

## 2. 맨 아래에 있는 박스를 통해 채팅한다.

![completed](https://user-images.githubusercontent.com/63771626/171603214-daa11da8-30c3-4dc8-927d-cad6d0a940df.png)


