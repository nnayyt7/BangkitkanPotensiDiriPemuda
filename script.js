// Inisialisasi EmailJS
(function () {
  emailjs.init("GgeCJ5aFeIcTkiNX-"); 
})();

// memanggil id dari html yaitu ideform dan submit
document.getElementById("ideForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  // Ambil data dari form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Kirim email menggunakan EmailJS
  emailjs.send("service_icehfss", "template_37zvqtk", {
      from_name: name,    
      from_email: email,  
      message: message
  })  
  .then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Terima kasih! Pesan Anda telah terkirim.");
      document.getElementById("ideForm").reset(); 
  })
  .catch(function (error) {
      console.error("FAILED...", error);
      alert("Terjadi kesalahan, silakan coba lagi.");
  });
});


// Loader
window.onload = function () {
  const loaderOverlay = document.querySelector('.loader-overlay');
  
  //agar loader selama 2 detik
  setTimeout(() => {
    loaderOverlay.style.display = 'none';
  }, 3000); // 3 detik 
};
