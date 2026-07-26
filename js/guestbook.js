const API_URL = "https://script.google.com/macros/s/AKfycbwvYRS-vdHqJYSx2nR06rfqnUnXiA3NmEKbT7BHpzFeqeGoapmDsK9d8dSvgtOGCkrTvA/exec";

async function kirimUcapan() {

    const nama = document.getElementById("nama").value.trim();
    const kehadiran = document.getElementById("kehadiran").value;
    const ucapan = document.getElementById("pesan").value.trim();

    if (!nama || !ucapan) {
        alert("Silakan isi nama dan ucapan.");
        return;
    }

    try {

        await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({
                nama,
                kehadiran,
                ucapan
            })
        });

        document.getElementById("nama").value = "";
        document.getElementById("pesan").value = "";

        loadUcapan();

        alert("Ucapan berhasil dikirim.");

    } catch (err) {

        console.error(err);
        alert("Gagal mengirim ucapan.");

    }

}

async function loadUcapan() {

    try {

        const res = await fetch(API_URL);

        const data = await res.json();

        const list = document.getElementById("listUcapan");

        list.innerHTML = "";

        data.reverse().forEach(item => {

            list.innerHTML += `
                <div class="ucapan">
                    <h3>${item.nama}</h3>
                    <small>${item.kehadiran}</small>
                    <p>${item.ucapan}</p>
                </div>
            `;

        });

    } catch (err) {

        console.error(err);

    }

}

document.addEventListener("DOMContentLoaded", loadUcapan);