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

### [초기화면]

- 서비스 접속 초기화면
  - 로그인이 되어 있지 않은 경우 : 버튼을 클릭해도 페이지 이동 불가

| 초기화면 |
|----------|
|![메인화면](https://github.com/Ukdam/OMM_App/assets/92793487/8195f08f-89d0-4658-b6bc-5c16b84b46f6)|

<br>

### [회원가입]
- 회원가입은 총 3단계로 구성
  - 정보 입력 (아이디, 비밀번호, 이름, 전화번호, 이메일)
  - 주소 입력 : Daum 우편번호 API 이용
  - 약관 동의

| 회원가입 |
|----------|
|![회원가입](https://github.com/Ukdam/OMM_App/assets/92793487/0c765e7b-facf-4489-b94d-755c4a426fcc)|

<br>

### [로그인]
- 회원가입에서 입력한 아이디와 비밀번호가 일치하지 않을 경우 경고 문구가 나타나며, 로그인 성공하면 초기화면으로 이동합니다.

| 로그인 |
|----------|
|![로그인](https://github.com/Ukdam/OMM_App/assets/92793487/efccb3ec-fcbd-4066-a361-f8db430037b9)|

<br>

### [로그아웃]
- 상단 왼쪽의 아이콘을 클릭 후 나타나는 사이드바의 하단의 로그아웃 버튼을 클릭하면 로그아웃 됩니다.
- 로그아웃시 로컬 저장소의 토큰 값과 사용자 정보를 삭제하고 초기화면으로 이동합니다.

| 로그아웃 |
|----------|
|![로그아웃](https://github.com/Ukdam/OMM_App/assets/92793487/31482e0e-1126-4a94-8651-e1b6d1b273c7)|

<br>

### [매장선택]
- 상단의 구글 맵 에서 여러 매장 목록이 나타남
- 하단의 매장 목록 리스트에서 매장을 선택

| 매장선택 |
|----------|
|![매장선택](https://github.com/Ukdam/OMM_App/assets/92793487/08c17daf-4c8b-42d6-89d7-6a9e411d7181)|

<br>

### [재료선택]
- 5개의 카테고리로 구성이 되어 있음.
- 상단의 그림은 페이지의 카테고리마다 변환되어 어떠한 카테고리를 선택했는지 확인이 가능합니다.
- 하단의 재료 그림을 클릭하여 재료를 추가 버튼을 누르며 다음 카테고리로 이동합니다.
- 상품에 대한 리스트는 관리자가 구성을 바꿀 수 있으며 재료 구성의 변화가 페이지에 즉시 반영되기 위해 Websocket을 사용하였습니다.
- 재료 취소하는 기능은 구현되어 있지 않습니다. 

| 재료선택 |
|----------|
|![주문 재료추가](https://github.com/Ukdam/OMM_App/assets/92793487/f51491f2-23b3-4302-8ddc-f8cb4f62680f)|

<br>

### [결제]
- 자신이 선택한 재료가 한꺼번에 표출되며 총 가격이 적혀져 있으며 메뉴 변경하기를 클릭하면 다시 재료 선택페이지로 이동하게 됩니다.
- 요청사항을 직접 선택을 할 수 있으며 직접 입력으로 요청사항을 직접 입력할 수 있습니다.
- 결제 하기 버튼을 클릭하면 결제에 대한 모든 정보가 가게로 넘어가게 되며 초기화면으로 이동하게 됩니다.

| 결제 |
|----------|
|![결제](https://github.com/Ukdam/OMM_App/assets/92793487/92755bcd-f858-441c-b600-d47ed03d089d)|

<br>

### [주문내역]
- 주문 내역 페이지에서는 어떠한 매장에서 주문을 했는지, 배달 및 포장 , 주문 시간에 대한 정보가 나타나며 나머지 정보는 결제 페이지에서 작성한 내용을 보여줍니다.
- 오른쪽 상단에서 미 접수 정보는 관리자가 주문을 받으면 바뀐 정보가 즉시 반영됩니다.
- 하단의 ‘리뷰 쓰러가기’ 버튼을 선택하면 리뷰 페이지로 이동합니다.

| 주문내역 |
|----------|
|![주문내역](https://github.com/Ukdam/OMM_App/assets/92793487/c25181b6-218d-48a6-84ec-3e5111e9e2a7)|

<br>

### [리뷰]
- 리뷰 작성하기 버튼을 선택하면 화면이 모달 창으로 보여줍니다.
- 상단에는 점수를 선택하는 별이 나타나며 점수를 선택할 수 있습니다.
- 자신이 결재한 음식의 재료가 추천 선택이 가능합니다.
- 사진 아이콘을 선택하여 자신이 직접 찍은 음식 사진을 업로드 할 수 있습니다.
- 리뷰의 내용을 입력하고 저장 버튼을 누르면 리뷰의 내용이 저장이 되며 등록이 완료가 되면 초기화면으로 이동합니다.

| 리뷰 |
|----------|
|![리뷰페이지](https://github.com/Ukdam/OMM_App/assets/92793487/4f4849b6-0f52-486c-964d-6d2ef0e5b79f)|

<br>

### [내정보 수정]
- 정보 옆에 있는 화살표 이모티콘을 누르면 정보 수정이 가능합니다.
- 하단의 회원 탈퇴 버튼을 누르면 회원 탈퇴가 가능합니다.

| 내정보 수정 |
|----------|
|![내정보 수정](https://github.com/Ukdam/OMM_App/assets/92793487/2c5e99f6-4911-457e-9436-6c46fbf4132c)|

<br>

## 6. 차후 계획

![차후계획](https://github.com/Ukdam/OMM_App/assets/92793487/03972358-8503-48b0-828f-a0b059da5936)

<br>

