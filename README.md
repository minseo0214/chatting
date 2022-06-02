# 1. Chatting application with node, typescript
### 하나의 서버에 여러 클라이언트가 접속하여, 채팅할 수 있습니다.

# 2. 프로젝트 정보
## 2-1. 설치
'''bash

json, lock으로 환경 설정을 하는 방법을 모르겠습니다.

'''

## 2-2. 사용 방법
```bash
├── public
│   └── index.html
└── src
    ├── client ──  index.ts ...
    ├── server ──  index.ts
    └── shared
``` 

Directory는 다음과 같이 이뤄져 있다.
ts 파일을 node에서 사용하기 위해 번들링을 해야 한다.
package.json 파일에 script를 짜놨다.

'''bash
yarn watch:server
yarn watch:client
yarn server
'''

터미널 3개에 각각 cml을 입력하면,
public 폴더에 client,js, server.js, client.css 가 생길 것이다.

이제 브라우저에 들어가서 localhost:3000 을 입력하면 된다.

## 2-3. 사용 방법

1. 맨 위에 있는 별명을 먼저 입력한다.

![initial](https://user-images.githubusercontent.com/63771626/171602803-35b967bc-00db-4274-be77-d1a6e91e2ca9.png)

2. 맨 아래에 있는 박스를 통해 채팅한다.

![completed](https://user-images.githubusercontent.com/63771626/171603214-daa11da8-30c3-4dc8-927d-cad6d0a940df.png)


