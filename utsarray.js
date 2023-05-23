var NamaMhs = ["Rahmat", "Zaka", "Teguh"];
var TahunLahir = [2009, 2001, 2002];
var HandphoneMhs = ["083843904502", "08765432100", "08987654321"];
var table = document.getElementById("data-table");

function tambahData() {
  var namaInput = document.getElementById("nama");
  var tahunLahirInput = document.getElementById("tahun-lahir");
  var handphoneInput = document.getElementById("handphone");

  var nama = namaInput.value;
  var tahunLahir = parseInt(tahunLahirInput.value);
  var handphone = handphoneInput.value;

  NamaMhs.push(nama);
  TahunLahir.push(tahunLahir);
  HandphoneMhs.push(handphone);

  var row = table.insertRow(table.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = nama;
  cell2.innerHTML = tahunLahir;
  cell3.innerHTML = handphone;
  cell4.innerHTML = '<button onclick="hapusBaris(this)">Hapus</button>';

  namaInput.value = "";
  tahunLahirInput.value = "";
  handphoneInput.value = "";
}

function hapusBaris(button) {
  var row = button.parentNode.parentNode;
  var rowIndex = row.rowIndex;

  table.deleteRow(rowIndex);
  NamaMhs.splice(rowIndex - 1, 1);
  TahunLahir.splice(rowIndex - 1, 1);
  HandphoneMhs.splice(rowIndex - 1, 1);
}

function hapusData() {
  var rowCount = table.rows.length;

  for (var i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  NamaMhs = [];
  TahunLahir = [];
  HandphoneMhs = [];
}

var i = 0;
for (i; i < NamaMhs.length; i++) {
  var row = table.insertRow(i + 1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = NamaMhs[i];
  cell2.innerHTML = TahunLahir[i];
  cell3.innerHTML = HandphoneMhs[i];
  cell4.innerHTML = '<button onclick="hapusBaris(this)">Hapus</button>';
}
console.log("Data NamaMhs:");
console.log(NamaMhs);

console.log("Data TahunLahir:");
console.log(TahunLahir);

console.log("Data HandphoneMhs:");
console.log(HandphoneMhs);