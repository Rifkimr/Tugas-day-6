function sendMessage() {
  let name = document.getElementById("name-input").value;
  let email = document.getElementById("email-input").value;
  let phone = document.getElementById("phone-input").value;
  let subject = document.getElementById("subject-input").value;
  let message = document.getElementById("message-input").value;
  
  if(name == "") {
      return alert("name wajib di isi?");
  } else if(email == "") {
      return alert("email wajib di isi?");
  } else if(phone == "") {
      return alert("number wajib di isi?");
  } else if(subject == "") {
      return alert("subject Wajib di isi");
  }

  const sendTarget = "reefqe774@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${sendTarget}?subject=${subject}&body=Hallo Rifi My name is ${name}. ${message}. Tolong Hubungi saya ${phone} Terimaksih`;
  a.click();
};