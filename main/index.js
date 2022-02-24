const httpPort = 3000;
const controller = require('./controller');

//express 모듈 불러오기
const express = require('express');
const app = express();

const mod = require('./connection');
const con = mod.init(); //con => 연결객체
mod.open(con);

//Express 4.16.0버전 부터 body-parser의 일부 기능이 익스프레스에 내장 body-parser 연결 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/", controller.home); // / : home 화면

app.get("/isdealer/:usr_id", controller.isDealer);

app.get("/issubscribe/:usr_id", controller.isSubscribe);

app.put("/setpro", controller.setPro);

// app.post("/pro/signup", controller.pro_signup); // 딜러 개인정보 기입 함수

// app.post("/usr/signup", controller.usr_signup); // 고객 개인정보 기입 함수 ex) 프사, 전화번호

app.get("/pro/:pro_id", controller.get_pro); // pro_id -> 회원번호, 딜러의 정보 전송

app.get("/usr/:usr_id",  controller.get_usr); // pro_id -> 회원번호, 딜러의 정보 전송

app.get("/contracts", controller.show); // / => DB 견적요청서 전체 출력

app.get("/contracts/:usrid", controller.find_from_usrid); // 회원번호로 검색하는 견적요청서

app.get("/contracts/pro/:proid", controller.find_from_proid) // 딜러가 [내가 보낸 견적서 보기] 체크하면 여기로 접속 -> 반환되는 견적요청서 리스트 표시

app.get("/contracts/info/:ct_key", controller.contractInfo) // 게시글 들어갈때 견적요청서 정보 다 보내줌

app.patch("/contracts/finish/:ct_num", controller.contractFinish) // 마감 버튼 누르면 여기로 접속됨

app.get("/reply/:cr_num", controller.showReply) // 게시글 들어갈때 이 글에 대한 견적서 (댓글) 정보 다 보내줌

app.post('/reply', controller.sendReply); // 견적서 작성하고 백엔드 저장요청 들어오는 곳

app.get('/refresh', controller.refreshToken); // 사용자가 접속할때마다 토큰 보내서 갱신하셈 받아서 async storage에 저장

app.get('/showInfo', controller.showInfo); // async storage 에서 꺼낸 토큰 받으면 닉네임(실명)이랑 회원번호 줌 redux에 저장 후 사용할때마다 꺼내쓰기

app.get('/checkToken', controller.checkToken); // 백엔드에서만 돌아가느 함수

app.post('/contracts/send', controller.contractSend); // 견적 요청 여기로 보내면 됨

app.delete('/contracts/:ct_num', controller.contractDelete); // 견적신청서 삭제

app.get('/logout', controller.logout); // 로그아웃

app.post("/billings", controller.billings);

app.post('/merchant', controller.getMerchantUid); // 새로운 merchant uid 를 db를 이용하여 조회 

app.post("/payments/save", controller.savePayment);

app.post("/subscribe/payments/unschedule", controller.unschedule);
// "/iamport-callback/schedule"에 대한 POST 요청을 처리
app.post("/iamport-callback/schedule", controller.schedule);

app.listen(httpPort,'0.0.0.0', () => console.log('server has been running...'));
