let messageSent = document.querySelector('.message-sent');
let adi = document.querySelector('#ad');
let soyadi = document.querySelector('#soyad');
let email = document.querySelector('#email');
let sorgu1 = document.querySelector('#sorgu1');
let sorgu2 = document.querySelector('#sorgu2');
let mesaj = document.querySelector('#mesaj');
let onay = document.querySelector('#onay');
let submit = document.querySelector('#submit');
let sorgu = document.querySelector('.sorgu');

let show = document.querySelector('.cikti')
let adiText = document.querySelector('#adi-text-show');
let soyadiText = document.querySelector('#soyadi-text-show');
let emailText = document.querySelector('#email-text-show');
let sorguText = document.querySelector('#sorgu-text-show');
let mesajText = document.querySelector('#mesaj-text-show');


function handleFormClick(e) {
  e.preventDefault();
  show.style.display = "flex"
  adiText.innerText = adi.value;
  soyadiText.innerText = soyadi.value;
  emailText.innerText = email.value;
  mesajText.innerText = mesaj.value;

  if (sorgu1.checked === true) {
    sorguText.innerText = "Genel"
  } else {
    sorguText.innerText = "Destek"
  }

} 
let hataMesaji1 = document.querySelector('#hata-mesaji-adi');
let hataMesaji2 = document.querySelector('#hata-mesaji-soyadi');
let hataMesaji3 = document.querySelector('#hata-mesaji-email');
let hataMesaji4 = document.querySelector('#hata-mesaji-mesaj');
let hataMesaji5 = document.querySelector('#hata-mesaji-sorgu');
let hataMesaji6 = document.querySelector('#hata-mesaji-check');
submit.addEventListener("click", handleFormClick);

function kontrol(e) {
  e.preventDefault();
  if (adi.value == "") {
    hataMesaji1.innerText = "Lütfen Adınızı Giriniz.";
    adi.style.border = "1px solid #D73C3C";
  } else {
    hataMesaji1.innerText = "";
    adi.style.border = "1px solid #86A2A5";
  }

  if (soyadi.value == "") {
    hataMesaji2.innerText = "Lütfen Soyadınızı Giriniz.";
    soyadi.style.border = "1px solid #D73C3C";
  } else {
    hataMesaji2.innerText = "";
    soyadi.style.border = "1px solid #86A2A5";
  }

  if (email.value == "") {
    hataMesaji3.innerText = "Lütfen E-posta Adresinizi Giriniz.";
    email.style.border = "1px solid #D73C3C";
  } else {
    hataMesaji3.innerText = "";
    email.style.border = "1px solid #86A2A5";
  }

  if (mesaj.value == "") {
    hataMesaji4.innerText = "Lütfen Mesajınızı giriniz.";
    mesaj.style.border = "1px solid #D73C3C";
  } else {
    hataMesaji4.innerText = "";
    mesaj.style.border = "1px solid #86A2A5";
  }

  let secenekler = document.getElementsByName("sorgu");
  let secenekSecildi = false;

  for (var i = 0; i < secenekler.length; i++) {
    if (secenekler[i].checked) {
      secenekSecildi = true;
      break;
    }
  }

  if (secenekSecildi) {
    hataMesaji5.innerText = "";
  } else {
    hataMesaji5.innerText = "Lütfen bir seçenek seçiniz.";
  }
  if (onay.checked) {
    hataMesaji6.innerText = "";
  } else {
    hataMesaji6.innerText = "Lütfen bu seçeneği işaretleyiniz.";
  }

}


submit.addEventListener("click", kontrol);

