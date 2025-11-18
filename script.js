document.getElementById("daftarForm").addEventListener("submit", function(e){
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let alamat = document.getElementById("alamat").value;
    let umur = document.getElementById("umur").value;
    let sekolah = document.getElementById("sekolah").value;
    let email = document.getElementById("email").value;
    let nohp = document.getElementById("nohp").value;
    let jenjang = document.getElementById("jenjang").value;

    // =============================== //
    // WHATSAPP MESSAGE
    // =============================== //
    let pesan = 
`Pendaftaran Dojang Taekwondo:

Nama: ${nama}
Alamat: ${alamat}
Umur: ${umur}
No HP OrangTua(wali): ${nohp1}
Email: ${email}
No HP: ${nohp}
Jenjang: ${jenjang}`;

    window.open("https://wa.me/`6285198051694`?text=" + encodeURIComponent(pesan));

    // =============================== //
    // GOOGLE SHEET SUBMIT
    // =============================== //

    fetch("GOOGLE_SCRIPT_URL", {
        method: "POST",
        mode: "no-cors",
        body: new FormData(document.getElementById("daftarForm"))
    });

    // Redirect
    setTimeout(() => {
        window.location.href = "sukses.html";
    }, 1500);
});
