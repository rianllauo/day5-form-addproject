let namaId = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = namaId('username'),
   email = namaId('email'),
   phone = namaId('phone'),
   subject = namaId('subject'),
   message = namaId('message')
   errorMsg = classes('eror'),
   button = namaId('submit')      

  
function submitData(){
   engine(username, 0, 'Please input your name');
   engine(email, 1, 'Please input your email');
   engine(phone, 2, 'Please input your phone number');
   engine(subject, 3, 'Please input your subject');
   engine(message, 4, 'Please input your message')  
}

function onInput(){
   input(username, 0);
   input(email, 1);
   input(phone, 2);
   input(subject, 3);
   input(message, 4);
}

let input = (id, serial) => {
   function success() {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2.5px solid #6366f1";
   }

   if(id.value.trim() !== ""){
      return success()
   }else{
      return
   }
}

let engine = (id, serial, warning) => {

   function fail() {
      errorMsg[serial].innerHTML = warning;
      id.style.border = "2.5px solid #e11d48"
   
   }
   function success() {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2.5px solid #6366f1";
     
   }

   if(id.value.trim() === ""){
      return fail()
   } else if(id.value.trim() !== ""){
      success()
   }   
     
   if(namaId('username').value && namaId('email').value && namaId('phone').value && namaId('subject').value && namaId('message').value !== ""){
     return emailTo()
   }
   
   function emailTo(){
      let emailReciver = "rianllauo@gmail.com"
      let link = document.createElement('a')
      link.href = `mailto: ${emailReciver}?subject=${subject.value}&body=Hallo nama saya ${username.value}, ${message.value}, silahkan kontak saya di nomer ${phone.value}`
      link.click()
   }
  
}




