// membuat array kosong untuk menampung data object
let data = []

// membuat function addData
// untuk menambahkan data ke array data dalam bentuk object
function addData(event){
   event.preventDefault(); //fungsi untuk tidak merefersh browser ketika tombol submit di klik  


   // mengambil semua data inputan dengan id nya
   let title = document.getElementById('title').value
   let content = document.getElementById('content').value
   let image = document.getElementById('image').files
   let imageUrl = URL.createObjectURL(image[0]);

   let dateStart = new Date(document.getElementById('date-start').value)
   let dateEnd = new Date(document.getElementById('date-end').value)

   // inputan dari check box
   let nodeJs = document.getElementById('nodeJs')
   let nextJs = document.getElementById('nextJs')
   let reactJs = document.getElementById('reactJs')
   let typeScript = document.getElementById('typeScript')
      
   // membuat value kosong untuk menampung path dari img
   let nodejsImg = ''
   let nextjsImg = ''
   let reactImg = ''
   let typescriptImg = ''


   // pengecekan terhadap check box yang di klik
   if(nodeJs.checked === true){
      nodejsImg =  '/img/nodejs.svg' //check box yang di klik akan memasukan path gambar ke dalam value kosong tadi
   }
   if(nextJs.checked === true){
      nextjsImg = '/img/nextjs.svg'
   }
   if(reactJs.checked === true){
      reactImg = '/img/react.svg'
   }
   if(typeScript.checked === true){
      typescriptImg = '/img/javascript.svg'
   }

   // membuat object yang menampung value dari semua inputan tadi
   let project = {
      title,
      content,
      imageUrl,
      nodejsImg,
      nextjsImg,
      reactImg,
      typescriptImg,
      dateStart,
      dateEnd
   }

   // mempush object project ke dalam array data 
   data.push(project)
   // melakukan fungsi render card
   renderCard()
}

// membuat function untuk merender card dari object yang sudah berisi value inputannya
function renderCard(){
   // megambil id untuk merender card
   // membuat nilai awal dari content nya kosong
   document.getElementById('contents').innerHTML = ''

   // melakukan perulangan untuk mendapat kan index array object nya
   // dan merender card nya
   for(let index = 0; index < data.length; index++ ){
      document.getElementById('contents').innerHTML += `
      <a href="/projectDetail.html" class="card-project">
         <div class="card-img">
            <img src="${data[index].imageUrl}" alt="">
         </div>
         <div class="card-content">
            <div class="card-header">
               <h3>${data[index].title}</h3>
               <p>Duration ${duration(data[index].dateStart, data[index].dateEnd)}</p>
            </div>
            <div class="card-text">
               <p>${data[index].content}</p>
            </div>
            <div class="card-icon">
               <img src="${data[index].nodejsImg}" alt="">
               <img src="${data[index].nextjsImg}" alt="">
               <img src="${data[index].reactImg}" alt="">
               <img src="${data[index].typescriptImg}" alt="">
            </div>
            <div class="card-button">
               <button>Edit</button>
               <button>Delete</button>
            </div>
         </div >
      </a>
      `
   }
}

// membuat function untuk durasi
function duration(dateStart, dateEnd){
   
   // mengambil waktu dari inputan melalui parameter
   let start = dateStart
   let end = dateEnd

   let miliseconds = 1000
  
   let durationDays = end - start //mendapatkan selisih dari waktu akhir dan awal, yang berupa miliscond
   
   // 1 menit 60 detik
   // 1 jam 60 menit
   // 1 hari 24 jam
   // 1 bulan 30 hari
   let days = Math.floor(durationDays / (miliseconds * 60 * 60 * 24))
   // selisih dari waktu akhir dan waktu awal, di kalkulasi menjadi dalam bentuk hari 

   let moth = Math.floor(durationDays / (miliseconds * 60 * 60 * 24 * 30))
   // selisih dari waktu akhir dan waktu awal, di kalkulasi menjadi dalam bentuk bulan 

   // melakukan pengkondision untuk merender hasil durasi ke card
   if(days < 30 ){
      return `${days} days`
   }else if(days >= 30){
      return `${moth} Month`
   }
    
}