function maxlength(evt) {
	var panjangnama = document.getElementById("nama").value;
	if (panjangnama.length >= 30  ){
		window.alert("Max Length 30");
		return false;
	}
}


function angka(e) {
  var max = document.getElementById("tiket").value;
  if (!/^[0-9]+$/.test(e.value)) {
	window.alert("Hanya Boleh Angka");
    e.value = e.value.substring(0,e.value.length-1);
	max.length = 2;
  }
}


function validasi() {
	var nama = document.getElementById("nama").value;
	var email = document.getElementById("email").value;
	var jam = document.getElementById("jam").value;
	var tujuan = document.getElementById("tujuan").value;
	var tiket = document.getElementById("tiket").value;
	
	if (nama && email && jam  && tujuan  && tiket ) {
		document.getElementById("chatbox").innerHTML= "Nama : " + nama + "<br>" + "Email : " + email + "<br>" + "Jam Berangkat : " + jam + "<br>" + "Tujuan : " +tujuan + "<br>" + "Jumlah Tiket : " + tiket + "<br><br>" + "pesanan anda berhasil";
		return false;
	}else{
		alert("harap diisi semua");
	}	
}