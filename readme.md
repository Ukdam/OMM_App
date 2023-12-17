# 나만의 음식 메뉴 정하기 앱 OMM

![logo_transparent](https://github.com/Ukdam/OMM_App/assets/92793487/f725e514-b229-425b-bc0b-418f1d9dc435)

## 앱 실행 방법
- 먼저 context 폴더 안에 IPContext.js 폴더의<br>
  const [myIP] = useState("내 현재 아이피");<br>
  이 부분을 나의 작업 공간의 아이피로 맞추세요.<br>
-> npm start

- Android Studio 에뮬레이터로 실행(에뮬레이터 설치 필요)<br>
-> Press a | open Android<br>

- expo app으로 실행<br>
-> 모바일 앱스토어 Expo Go app설치<br>
-> QR코드 스캔및 실행(모바일 IP랑, 작업공간의 IP가 똑같아야됨)<br>

## api 서버 실행 방법
: api 서버 코드를 다운후 터미널에 실행<br>
-> nodemon index.js

2. api 서버 : https://github.com/1Taron/OMM_api

3. 관리자 페이지 : https://github.com/Ukdam/OMM_admin

<br>

## 팀원 구성

<div align="center">

| **이보성** | **장우람** |
| :------: |  :------: |
| [<img src="https://github.com/Ukdam/OMM_App/assets/92793487/717b987a-1cb3-4d9e-a2c1-dced07726f6f" height=150 width=150> <br/> @1Taron](https://github.com/1Taron) | [<img src="https://github.com/Ukdam/OMM_App/assets/92793487/311372aa-2adb-49fb-a35c-de7baac3ab55" height=150 width=150> <br/> @Ukdam](https://github.com/Ukdam) |

</div>

<br>

## 1. 개발 환경
- 통합 개발 환경 : Visual Studio
- Hybrid APP: React Native, Expo, Websocket
- Front : HTML, React, Websocket
- Back-end : Express, Socket.io, Multer, Mongodb
- 버전 및 이슈관리 : Github, Github Issues
- 협업 툴 : Discord, KakaoTalk
- 디자인 : [Figma](https://www.figma.com/file/Lfp8VJ9vH2E31yZNRmz5y7/OMM?type=design&node-id=0-1&mode=design&t=682JxLZuCXy9MXht-0)
- [Fontawesome](https://fontawesome.com/)

<br>


## 2. 채택한 개발 기술

### React Native, Expo

- React Native
  - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
  - 상단 바, 사이드 바 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스를 절약이 가능했습니다.
- Expo
  - Expo를 사용하여 개발 환경을 구성하는 과정을 간소화 하였습니다.
  - Expo Client 앱으로 빠르게 반응형으로 테스트 하였습니다.

### Socket.io, Multer

- Socket
  - 데이터의 실시간 양방향 통신을 유지하기 위해 Socket을 사용하였습니다.
- Multer
  - Multer는 Node.js의 파일 업로드를 처리하기 위한 미드웨어 입니다.
  - DB에 사진의 데이터를 직접 저장하는 것 보다 API서버에 저장을 하여 URL화 하여 관리 및 저장하여 DB의 리소스를 절약 하였습니다.

<br>

## 3. 역할 분담

### 🍊이보성

- **UI**
  - 페이지 : 로그인, 회원가입, 매장선택,  재료 추가
  - 공통 컴포넌트 : 버튼, swiper, 주소 찾기
- **기능**
  - 사진 업로드, 회원 가입, 주문 내역, 구글 맵 API, 다음 포스트 API

<br>

### 🐬장우람 

- **UI**
  - 페이지 : 메인,  환경설정, 후기, 내 정보, 결제
  - 공통 컴포넌트 : 헤더, 사이드바, 아이콘
- **기능**
  - 웹 소켓, 재료 선택, 후기, 로그인, 로그아웃, 결제

<br>

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2023-08-28 ~ 2023-12-08
- UI 구현 : 2023-08-28 ~ 2023-11-08
- 기능 구현 : 2023-11-09 ~ 2023-12-08

<br>

### 작업 관리
- Github Project를 사용하여 진행 상황을 공유했습니다.
- Discord로 주간회의를 진행하며 작업 순서와 방향성에 대한 고민을 나누고 KakaoTalk에 회의 내용을 기록했습니다.

<br>

## 5. 페이지별 기능


