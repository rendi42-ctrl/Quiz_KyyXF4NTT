const soal = [
{
tanya: "budi membeli 3 kotak pensil dan 2 buah buku tulis dengan harga 54rb jika harga satu buah buku tulis adalah setengah dari harga satu kotak pensil berapakah harga satu kotak pensil?",
opsi:["RP10.500", "RP12.750", "RP13.500", "RP15.000"],
benar: 3 },

{
tanya: "berapakah 30% dari 550?",
opsi:["165", "180", "275", "300"],
benar: 1 }];

let nomor = 0;
let skor = 0;

const menu = document.getElementById("menu");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");
const options = document.getElementById("options");
const progressBar = document.getElementById("progressBar");

startBtn.onclick = mulaiKuis;
restartBtn.onclick = mulaiKuis;

function mulaiKuis() {
    nomor = 0;
    skor = 0;

    menu.classList.add("hidden");
    result.classList.add("hidden");
    quiz.classList.remove("hidden");

    tampilSoal();}

function tampilSoal() {
    const data = soal[nomor];

    questionNumber.textContent =
        `SOAL ${nomor + 1} DARI ${soal.length}`;

    question.textContent = data.tanya;
    progressBar.style.width =
        `${(nomor / soal.length) * 100}%`;

    options.innerHTML = "";
    nextBtn.classList.add("hidden");

    data.opsi.forEach((teks, index) => {
        const tombol = document.createElement("button");

        tombol.textContent = teks;
        tombol.className = "option";

        tombol.onclick = () => cekJawaban(index, tombol);

        options.appendChild(tombol);});}

function cekJawaban(pilihan, tombol){
const benar = soal[nomor].benar ;
const semua = options.querySelectorAll ("button") ;
semua.forEach(b =>b .disabled = true);
if(pilihan === benar){

skor++ ;
tombol.style.background = "#b8f5d0";
tombol.style.bordercolor = "#20a464";
tombol.style.Color = "#a32121";}

else {
tombol.style.background = "#ffdada";
tombol.style.bordercolor = "#e74c3c";
tombol.style.color = "#146c43";

semua[benar].style.background = "#b8f5d0";
semua[benar].style.bordercolor = "#20a464";
semua[benar].style.color = "#a32121";}
progressBar.style.width =
`${((nomor + 1) / soal.length) *100}%`;
nextBtn.textContent =
nomor === soal.length - 1 ? "lihat hasil": "berikutnya";
nextBtn.classList.remove("hidden");}
nextBtn.onclick = () => {
nomor++;
if (nomor < soal.length){
tampilSoal();}
else{tampilHasil();}};
function tampilHasil(){
quiz.classList.add("hidden");
result.classList.remove("hidden");
const nilai = Math.round(skor / soal.length * 100);
document.getElementById("resultTitle").textContent =
nilai === 100 ? "sempurna":
nilai >= 50 ? "OKE":
"SOAL EZ KOK GINI";
document.getElementById("scoreText").textContent =
`jawaban benar: ${skor} dari ${soal.length} soal. nilai kamu: ${nilai}.`;}
