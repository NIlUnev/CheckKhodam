const input = document.querySelector(".container > input");
const nama = document.getElementById("nama");
const khodam = document.getElementById("khodam");

// list khodam di-generate oleh ChatGPT
const listKhodam = [
  "Kucing Gembul",
  "Kura-Kura Jalan",
  "Ayam Kate",
  "Kuda Terbang",
  "Gajah Duduk",
  "Anjing Chihuahua",
  "Ikan Lohan",
  "Sapi Limosin",
  "Bebek Biang",
  "Genderuwo",
  "Kucing Puyeng",
  "Harimau Putih",
  "Tikus Berdasi",
  "Kelinci Dua",
  "Elang Edan",
  "Domba Garut",
  "Babi Ngepet",
  "Ular Cobra",
  "Buaya Darat",
  "Burung Kacer",
  "Tuyul",
  "Pocong",
"Garong",
"Banteng Merah",
"Maung Sengkleh",
"Singa Paddlepop",
"Kakek Zeus",
"Incess",
"Raja Jin",
"Dede Inoen",
"Kuntil Kebo",
"Biang",
"Banaspati",
"Burung Kenari",
"Ayam Jago",
"Siluman Manusia",
"Naga Merah",
"Barongsai",
"Embe Badot",
"Semut",
"Kutu",
"Iron Man",
"Batman",
"Captain America",
"Joy Byden",
"Buto Ijo",
"Mak Lampir",
"Kuntilanak Merah",
"Kuntilanak Putih",
"Kolor Ijo",
"Pocong Item",
"Firaun",
"Namrud",
"Dajjal",
"Yajuj Majuz",
"Asep Cepot",
"Kyubi",
"Wonder Woman",
"Nyiroro Kidul",
"Ratu Pantai Selatan",
"Burung Murai",
"Babi Ngepet",
"Anjing Pitbull",
"Monyet",
"Bekantan",
"Orang Hutan",
"Tirex",
"Cacing",
"Oray Sanca",
];

function randomPickKhodam() {
  const listLength = listKhodam.length;
  const randomIndex = Math.floor(Math.random() * listLength - 1);
  return listKhodam[randomIndex];
}

function handleClick() {
  nama.textContent = "Nama: " + input.value;
  khodam.textContent = input.value
    ? "Jenis Khodam: " + randomPickKhodam()
    : "Jenis Khodam: ";
  input.value = "";
}
