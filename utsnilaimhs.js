function hitungIPK() {
    var nim = document.getElementById("nim").value;
    var nama = document.getElementById("nama").value;
    var mataKuliah = document.getElementById("mataKuliah").value;
    var nilai = document.getElementById("nilai").valu
    var grade;
    var indeksNilai;
if (nilai >= 85 && nilai <=100) {
  grade = "A";
  indeksNilai = "4.0";
} else if (nilai >= 79&& nilai <=84) {
  grade = "A-";
  indeksNilai = "3.67";
} else if (nilai >= 74&& nilai <=78) {
  grade = "B+";
  indeksNilai = "3.33";
} else if (nilai >= 69&& nilai <=73) {
  grade = "B";
  indeksNilai = "3.00";
} else if (nilai >= 64&& nilai <=68) {
  grade = "B-";
  indeksNilai = "2.67";
} else if (nilai >= 59&& nilai <=63) {
  grade = "C+";
  indeksNilai = "2.33";
} else if (nilai >= 54&& nilai <=58) {
  grade = "C";
  indeksNilai = "2.00";
} else if (nilai >= 41&& nilai <=53) {
  grade = "D";
  indeksNilai = "1.00";
} else if (nilai >= 0&& nilai <=40){
  grade = "E";
  indeksNilai = "0.0";
}
else{
  grade="undefined";
  indeksNilai = "undefined";
}

document.getElementById("outputNim").innerText = nim;
document.getElementById("outputNama").innerText = nama;
document.getElementById("outputMataKuliah").innerText = mataKuliah;
document.getElementById("outputNilai").innerText = nilai;
document.getElementById("outputGrade").innerText = grade;
document.getElementById("outputIndeksNilai").innerText = indeksNila
document.getElementById("output").style.display = "block";
    }
function resetForm() { 
    document.getElementById("ipkForm").reset();
    document.getElementById("output").style.display = "none";
}
function hitungIPK() {
  var nim = document.getElementById("nim").value;
  var nama = document.getElementById("nama").value;
  var mataKuliah = document.getElementById("mataKuliah").value;
  var nilai = document.getElementById("nilai").value;
  var grade;
  var indeksNilai;
if (nilai >= 85 && nilai <=100) {
grade = "A";
indeksNilai = "4.0";
} else if (nilai >= 79&& nilai <=84) {
grade = "A-";
indeksNilai = "3.67";
} else if (nilai >= 74&& nilai <=78) {
grade = "B+";
indeksNilai = "3.33";
} else if (nilai >= 69&& nilai <=73) {
grade = "B";
indeksNilai = "3.00";
} else if (nilai >= 64&& nilai <=68) {
grade = "B-";
indeksNilai = "2.67";
} else if (nilai >= 59&& nilai <=63) {
grade = "C+";
indeksNilai = "2.33";
} else if (nilai >= 54&& nilai <=58) {
grade = "C";
indeksNilai = "2.00";
} else if (nilai >= 41&& nilai <=53) {
grade = "D";
indeksNilai = "1.00";
} else if (nilai >= 0&& nilai <=40){
grade = "E";
indeksNilai = "0.0";
}
else{
grade="undefined";
indeksNilai = "undefined";
}

document.getElementById("outputNim").innerText = nim;
document.getElementById("outputNama").innerText = nama;
document.getElementById("outputMataKuliah").innerText = mataKuliah;
document.getElementById("outputNilai").innerText = nilai;
document.getElementById("outputGrade").innerText = grade;
document.getElementById("outputIndeksNilai").innerText = indeksNilai;
document.getElementById("output").style.display = "block";
  }
function resetForm() { 
  document.getElementById("ipkForm").reset();
  document.getElementById("output").style.display = "none";
}
