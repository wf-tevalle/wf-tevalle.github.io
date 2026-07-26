const button = document.getElementById("openBtn");
const hero = document.querySelector(".hero");
const content = document.getElementById("content");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const bottomNav = document.getElementById("bottomNav");

let playing = false;

const target = new Date("December 20, 2026 09:00:00").getTime();

setInterval(function(){

    const sekarang = new Date().getTime();

    const selisih = target - sekarang;

    const hari = Math.floor(selisih/(1000*60*60*24));
    const jam = Math.floor((selisih%(1000*60*60*24))/(1000*60*60));
    const menit = Math.floor((selisih%(1000*60*60))/(1000*60));
    const detik = Math.floor((selisih%(1000*60))/1000);

    document.getElementById("hari").innerHTML = hari;
    document.getElementById("jam").innerHTML = jam;
    document.getElementById("menit").innerHTML = menit;
    document.getElementById("detik").innerHTML = detik;

},1000);
function kirimUcapan(){

    let nama = document.getElementById("nama").value;
    let pesan = document.getElementById("pesan").value;

    if(nama=="" || pesan==""){
        alert("Silakan isi nama dan ucapan.");
        return;
    }

    let box = document.createElement("div");
    box.className = "ucapan";

    box.innerHTML =
    "<h3>"+nama+"</h3><p>"+pesan+"</p>";

    document.getElementById("listUcapan").prepend(box);

    document.getElementById("nama").value="";
    document.getElementById("pesan").value="";
}
function copyRekening(){

    let rekening =
    document.getElementById("rekening").innerText;

    navigator.clipboard.writeText(rekening);

    alert("Nomor rekening berhasil disalin.");
}
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");

function openImage(src){

    console.log("SRC :", src);

    popup.style.display = "flex";

    popupImg.src = src;

    console.log("Popup :", popupImg);

    console.log("Popup SRC :", popupImg.src);

}

function closeImage(){
    popup.style.display = "none";
}

document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        closeImage();
    }
});

popupImg.addEventListener("click", function(e){
    e.stopPropagation();
});

/* ========================= */
/* Scroll Animation */
/* ========================= */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        } else {

            entry.target.classList.remove("show");

        }

    });

}, {
    threshold: 0.1
});

hiddenElements.forEach(el => observer.observe(el));

hiddenElements.forEach(el => observer.observe(el));

/* ========================= */
/* MUSIC CONTROL */
/* ========================= */
button.addEventListener("click", function(){

    hero.classList.add("fade-out");

    setTimeout(function(){

        hero.style.display = "none";

        content.style.display = "block";

        bottomNav.style.display = "flex";

        document.querySelector(".hero-text").classList.add("show");

setTimeout(()=>{
    document.querySelector(".hero-desc").classList.add("show");
},400);

setTimeout(()=>{
    document.querySelector(".hero-name").classList.add("show");
},800);

setTimeout(()=>{
    document.querySelector(".hero-date").classList.add("show");
},1200);

        setTimeout(function(){
            content.classList.add("show");
            setTimeout(()=>{

    document.querySelector(".bismillah")
        .classList.add("showTop");

},200);

setTimeout(()=>{

    document.querySelector(".hero-text")
        .classList.add("showFade");

},700);

setTimeout(()=>{

    document.querySelector(".hero-desc")
        .classList.add("showFade");

},1200);

setTimeout(()=>{

    document.querySelector(".hero-name")
        .classList.add("showZoom");

},1700);

setTimeout(()=>{

    document.querySelector(".hero-date")
        .classList.add("showFade");

},2200);
        },50);

    },800);

    music.play().catch(err=>{
        console.log(err);
    });

    playing = true;

    musicBtn.innerHTML = "🎵";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
musicBtn.addEventListener("click", function(){

    if(playing){
        music.pause();
        musicBtn.innerHTML = "🔇";
    }else{
        music.play();
        musicBtn.innerHTML = "🎵";
    }

    playing = !playing;

});
/* ========================= */
/* GOLD PARTICLES */
/* ========================= */

const particles = document.getElementById("particles");

function createParticle(){

    if(!particles) return;

    const p = document.createElement("div");

    p.className = "particle";

    p.style.left = Math.random()*100+"%";

    const size = Math.random()*8+4;

    p.style.width = size+"px";
    p.style.height = size+"px";

    p.style.animationDuration =
    (6+Math.random()*5)+"s";

    particles.appendChild(p);

    setTimeout(()=>{
        p.remove();
    },11000);

}

setInterval(createParticle,250);
/* ========================= */
/* SCROLL PROGRESS */
/* ========================= */

window.addEventListener("scroll", () => {

    const winScroll =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});
/* ========================= */
/* PARALLAX HERO */
/* ========================= */

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    if(hero){

        hero.style.backgroundPositionY=
        window.scrollY*0.4+"px";

    }

});

const params = new URLSearchParams(window.location.search);

const namaTamu = params.get("to");

if(namaTamu){

    document.getElementById("guestName").innerHTML =
    decodeURIComponent(namaTamu);

}

// =========================
// NAMA TAMU
// =========================

const guestName = document.getElementById("guestName");

if (guestName) {

    const params = new URLSearchParams(window.location.search);

    let namaTamu = params.get("to");

    if (namaTamu) {

        namaTamu = decodeURIComponent(namaTamu);

        namaTamu = namaTamu.replace(/-/g, " ");

        guestName.textContent = namaTamu;

    }

}

const petals = document.querySelector(".gold-petals");

function createPetal(){

    const petal = document.createElement("span");

    petal.className="gold-petal";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=
        8+Math.random()*8+"s";

    petal.style.opacity=
        .25+Math.random()*.45;

    petal.style.transform=
        `scale(${0.5+Math.random()})`;

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },17000);

}

setInterval(createPetal,700);