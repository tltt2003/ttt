//  alert
// alert('text alert')
// console.log('text')
// console.log(123);
//  in thằng ra web
// document.getElementById('text').textContent = '123';
//  Data Type ( kiểu dữ liệu )
//  Kiểu dữ liệu + tên biến
//  chữ ,số,......
//  Variable ( var)
// -> định nghĩa biến(declare, define)
// -> khai báo giá trị (assign, initalized)

function tinhDiem() {
  var toan = document.getElementById("toan").value;
  var li = document.getElementById("li").value;
  var hoa = document.getElementById("hoa").value;
  var sinh = document.getElementById("sinh").value;
  var anh = document.getElementById("anh").value;
  var van = document.getElementById("van").value;
  var su = document.getElementById("su").value;
  var dia = document.getElementById("dia").value;
  var congdan = document.getElementById("congdan").value;
  var diemuutien = document.getElementById("diemuutien").value;
  var diemtrungbinh12 = document.getElementById("diemtrungbinh12").value;

  toan = Number(toan);
  li = Number(li);
  hoa = Number(hoa);
  sinh = Number(sinh);
  anh = Number(anh);
  van = Number(van);
  su = Number(su);
  dia = Number(dia);
  congdan = Number(congdan);
  diemuutien = Number(diemuutien);
  diemtrungbinh12 = Number(diemtrungbinh12);
  //    camel: con lạc đà
  var khtn = li + hoa + sinh;
  var khxh = su + dia + congdan;
  var diemKhoiB = toan + hoa + sinh;
  var diemKhoiC = van + su + dia;
  var diemKhoiD = toan + van + anh;
  var diemKhoiA = toan + li + hoa;
  document.getElementById("result").textContent =
    "Điểm khối A:    " +
    diemKhoiA.toFixed(2) +
    "\n-----Điểm khối B:    " +
    diemKhoiB.toFixed(2) +
    "\n-----Điểm khối C:    " +
    diemKhoiC.toFixed(2) +
    "\n-----Điểm khối D:    " +
    diemKhoiD.toFixed(2);
  document.getElementById("result").style.display = "block";
  //    cách 2
  //  var diemKhoiATag = document.getElementById("diemKhoiA")
  //  diemKhoiATag.textContent = "Điểm khối A: "+diemKhoiA
  //   diemKhoiATag.style.display = "block"
  var diemTotNghiep =
    (((toan + van + anh + (khtn + khxh) / 3 + diemuutien) / 4) * 7 +
      diemtrungbinh12 * 3) /
    10;
  var xettotnghiepTag = document.getElementById("totnghiep");
  // xettotnghiepTag.textContent =
  //   "Điểm tốt nghiệp:      " + diemTotNghiep.toFixed(2);

  if (
    (diemTotNghiep < 5 ||
      toan <= 1 ||
      li <= 1 ||
      hoa <= 1 ||
      sinh <= 1 ||
      van <= 1) &&
    (su == 0 || dia == 0 || congdan == 0)
  ) {
    document.getElementById("totnghiep").textContent =
      "Bạn đã rớt tốt nghiệp: " + diemTotNghiep.toFixed(2);
  } else if (
    (diemTotNghiep < 5 || van <= 1 || su <= 1 || dia <= 1 || congdan <= 1) &&
    (li == 0 || hoa == 0 || sinh == 0)
  ) {
    document.getElementById("totnghiep").textContent =
      "Bạn đã rớt tốt nghiệp: " + diemTotNghiep.toFixed(2);
  } else {
    document.getElementById("totnghiep").textContent =
      "Bạn đã đậu tốt nghiệp: " + diemTotNghiep.toFixed(2);
  }
  xettotnghiepTag.style.display = "block";
}

function reset() {
  document.getElementById("toan").value = "";
  document.getElementById("li").value = "";
  document.getElementById("hoa").value = "";
  document.getElementById("sinh").value = "";
  document.getElementById("van").value = "";
  document.getElementById("su").value = "";
  document.getElementById("dia").value = "";
  document.getElementById("congdan").value = "";
  document.getElementById("diemuutien").value = "";
  document.getElementById("diemtrungbinh12").value = "";
  document.getElementById("result").style.display = "none";
  document.getElementById("totnghiep").style.display = "none";
}
