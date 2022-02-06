const axios = require('axios');

// exports.show = (table) => {
//     axios.get(`http://localhost:3000/${table}`) // 전체 차 목록 출력할때 쓰셈
//     .then((res) => { //성공
//         console.log(res.data);
//     })
//     .catch((err) => { //실패
//         console.log(err.response.data);
//     })
//     .then(()=>{ //성공이던 실패던 항상 always
//         console.log('영웅소프트 화이팅!');
//     });
// }
// exports.create = (table, id, name) =>{
//     axios.post(`http://localhost:3000/${table}`, { //회원가입할때 쓰셈
//         id:id,
//         name:name
//     })
//     .then((res) => {
//         console.log('the user created succesfully!!!');
//     })
//     .catch((err) => { //실패
//         console.log(err.response.data);
//     })
//     .then(() => { //성공이던 실패던 항상 always
//         console.log('영웅소프트 화이팅!');
//     });
// }
// exports.find = (table, id) => {
//     axios.get(`http://localhost:3000/${table}/${id}`)
//     .then(function (res) {
//         console.log(res.data);
//     })
//     .catch(function (err) {
//         console.log(err.response.data);
//     })
//     .then(function () {
//         console.log('영웅소프트 화이팅!');
//     });
// }
exports.signup = (id, password, nickname, email, phone, prv1, prv2, prv3) => {
    axios.post(`http://34.64.207.117:3000/signup`, {
        id:id,
        password:password,
        nickname:nickname,
        email:email,
        phone:phone,
        prv1:prv1,
        prv2:prv2,
        prv3:prv3
    })
    .then(function (res) {
        console.log(res.data);
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(function () {
        console.log('영웅소프트 화이팅!');
    });
}

exports.contractSend = (kind, brand, model, detail, price, mnpay, distance, option, protosay, procode, usrid) => {
    axios.post(`http://34.64.207.117:3000/contract/send`, {
        kind:kind,
        brand:brand,
        model:model,
        detail:detail,
        price:price,
        mnpay:mnpay,
        distance:distance,
        option:option,
        protosay:protosay,
        procode:procode,
        usrid:usrid
    })
    .then(function (res) {
        console.log(res.data);
    })
    .catch(function (err) {
        console.log(err.data);
    })
    .then(function () {
        console.log('영웅소프트 견적서');
    });
} 

exports.kakaoLogin = async() => {
    try{
        await axios.get('http://34.64.207.117:3000/auth/kakao');
    }catch(err){
        console.log(err); //로그인에러났을때임 나중에 추가할것 TODO
    }
}
/*
exports.signup = (id, password, name) => {
    axios.post(`http://localhost:3000/signup`, {
        id:id,
        password:password,
        name:name
    })
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(function () {
        console.log('영웅소프트 화이팅!');
    });
}*/