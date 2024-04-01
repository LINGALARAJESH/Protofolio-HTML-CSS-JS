function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// ....................................................google sheet.............................//
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwUbjy273SwvglLs03GDav7C8akmkTZbnJ3xMwEJ-pqWMECNX6oa4gl_EyicRHujRtK/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
           msg.innerHTML="Thank You!!"
            setTimeout(function(){msg.innerHTML=''},5000)
           form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
