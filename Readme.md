# Spring Boot 프로젝트에 Babel, ESLint + Prettier 사용하기

### 사용 환경

- Java Version 11
- SDK Version 13
- Spring Boot Version 2.3.1
- npm Version 6.12.0
  - @babel/cli ^7.10.5 (babel7 버전부터는 모듈이 @로 시작)
  - @babel/core ^7.10.5
  - @babel/preset-env ^7.10.4
  - eslint ^7.4.0

### 사용 툴

- IntelliJ
- VSCode

### FE 환경 세팅 참고 : https://sungtae-kim.tistory.com/24

1. `npm init`
2. `npm i --save-dev @babel/core @babel/cli @babel/preset-env` (--save-dev는 package.json 내 빌드시 포함되지 않는 플러그인이 들어가는 devDependencies 항목에 들어갑니다) Babel 설치
3. root에 `.babelrc` 파일 생성(babel 환경설정 파일)
4. `.babelrc` 파일에 `presets` 설정
5. `npm i --save-dev eslint` ESLint 설치
6. `eslint --init` (eslint 설정파일 생성)

- To check syntax and find problems (code format은 Prettier 사용)
- Javascript modules (import/export)
- None of these
- No
- Browser
- JSON

7. `npm install --save-dev eslint-config-airbnb-base` Airbnb rule 설치
8. `.eslintrc.json extends`에 `airbnb-base` 추가 (https://github.com/ParkSB/javascript-style-guide)
9. `npm i --save-dev babel-eslint` (Babel과 Eslint를 함께 사용하기 위해 설치)
10. `eslintrc.json`에 parser: `babel-eslint` 추가
11. `npm i --save-dev -save-exact prettier` Prettier 설치
12. root에 `.prettierrc` 파일 생성 (Prettier 환경설정 파일) -> https://prettier.io/docs/en/options.html
13. eslint와 prettier 충돌을 막기 위해 `npm i --save-dev eslint-config-prettier`
14. `.eslintrc extends`에 `"extends": ["eslint:recommended", "airbnb-base", "prettier"]` 추가
15. `package.json`에 babel build 명령어 설정

- 현재 SCSS 컴파일로 CSS 파일을 생성할 대 컴파일 된 파일이 root에, 컴파일 전 파일이 폴더 안에 들어있기 때문에 JS도 같은 구조 사용
- `scripts`에 `"babel": "babel src/main/resources/static/es6 -d src/main/resources/static -w"` 설정
- `npm run babel`
- `src/main/resources/static/es6` : 트랜스파일링 전 파일 위치
- `src/main/resources/static` : 트랜스파일링 후 파일 위치
- `-w` : save될 때마다 트랜스파일링 실행하는 옵션
