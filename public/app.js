// let request = new XMLHttpRequest();
// request.open('GET', 'https://ums.dyndns.info:9920/v1/memberVerify/084-165-2816');
// request.send();
// request.onload = ()=> {
//     console.log(request);
//     if(request.status === 200){





//         console.log(JSON.parse(request.response));
//     }
// }


// async function getMember(){
//     let response = await fetch('https://ums.dyndns.info:9920/v1/memberVerify/084-165-2816');
//     let result = await response.json();

//     console.log(response);
//     return result;
// }

//getMember().then(item => console.log(item));








// axios.get('https://ums.dyndns.info:9920/v1/memberVerify/084-165-2816').then(res => {
//     console.log(res.data);
//     showQR(res.data.VerifyMember);

// }).catch(error => { console.log(error); });



// const showMore = document.querySelector('.showMore');

// function showQR(item){
    

//     // let sDate = new Date().toISOString().slice(0,19).replace('T',' ');
//     // let eDate = new Date();//.toISOString().slice(0,19).replace('T',' ');
//     // eDate.setMinutes(eDate.getMinutes() + 30);
//     // eDate = new Date(eDate).toISOString().slice(0,19).replace('T',' ');
   

//     // console.log(sDate);
//     // console.log(eDate);

//     //let toDay = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok', hour12: false });
//     let toDay = new Date().toISOString().slice(0,10);
//     let nowTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Bangkok', hour12: false });
//     let addTime = new Date().setMinutes(new Date().getMinutes() + 30);
//     addTime = new Date(addTime).toLocaleTimeString('en-US', { timeZone: 'Asia/Bangkok', hour12: false });

  
//     // console.log(new Date().toISOString().slice(0,10), nowTime);
//     // console.log(new Date().toISOString().slice(0,10), addTime);
   


  


  


//     let html_userInfo = document.querySelector('#memberInfo');
//     let li_userInfo1 = document.createElement('li');
//     let li_userInfo2 = document.createElement('li');
//     let li_userInfo3 = document.createElement('li');
//     let li_userInfo4 = document.createElement('li');

//     li_userInfo1.innerText = `ชื่อ-สกุล : ${item[0].memberName}`;
//     li_userInfo2.innerText = `คะแนนสะสม : ${item[0].memberPoint}`;
//     li_userInfo3.innerText = `วันที่-เวลาเริ่มต้น : ${toDay} ${nowTime}`;
//     li_userInfo4.innerText = `วันที่-เวลาสิ้นสุด : ${toDay} ${addTime}`;
//     html_userInfo.appendChild(li_userInfo1);
//     html_userInfo.appendChild(li_userInfo2);
//     html_userInfo.appendChild(li_userInfo3);
//     html_userInfo.appendChild(li_userInfo4);
    




//     const photo = document.createElement('div');
//     photo.innerHTML = `<img id="memberQR" alt="" width="180px" height="180px" src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl="${item[0].memberQR}>`;
//     document.querySelector('.display_img').appendChild(photo);

//     console.log(item[0].memberQR);
// }





// const titleEl = document.getElementById('title');
// const contentEl = document.querySelector('.content');
// const allEl = document.querySelectorAll('p');

// const boxEl = document.querySelector('.box');
// const linkEl = document.querySelector('.linkQR');

// function lightMode(){

//     boxEl.setAttribute('class', 'light'); 
// };

// function darkMode(){

//     boxEl.setAttribute('class', 'dark'); 
// };

