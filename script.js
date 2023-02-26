function generateTeams() {
  // mengambil nilai input
  const jumlahSiswa = document.getElementById("inputSiswa").value;
  const jumlahKelompok = document.getElementById("inputKelompok").value;

  // validasi
  if (jumlahSiswa === "" || jumlahKelompok === "") {
    alert("Masukan jumlah dan kelompok siswa!");
    return;
  }

  //membuat looping untuk siswa
  const siswa = [];
  for (let i = 1; i <= jumlahSiswa; i++) {
    siswa.push(i);
  }

  // membuat jumlah anggota perkelompok
  const jumlahSiswaPerKelompok = jumlahSiswa / jumlahKelompok;

  // menghitung jumlah siswa perkelompok
  let siswaSisa = jumlahSiswa % jumlahKelompok;

  // membuat array kosong untuk kelompok kelompok
  const kelompok = [];
  for (let i = 0; i < jumlahKelompok; i++) {
    kelompok.push([]);
  }

  // membagi siswa ke dalam kelompok secara acak dan merata
  for (let i = 0; i < jumlahKelompok; i++) {
    for (let j = 0; j < jumlahSiswaPerKelompok; j++) {
      const randomIndex = Math.floor(Math.random() * siswa.length);
      const siswaTerpilih = siswa.splice(randomIndex, 1)[0];
      kelompok[i].push(siswaTerpilih);
    }
  }

  // memasukan siswa sisa
  if (siswaSisa > 0) {
    const randomIndex = Math.floor(Math.random() * siswa.length);
    const siswaTerpilih = siswa.splice(randomIndex, 1)[0];
    kelompok[jumlahKelompok - 1].push(siswaTerpilih);
    siswaSisa--;
  }

  // menampilkan hasil
  const teamContainer = document.getElementById("teamContainer");
  teamContainer.textContent = "";
  for (let i = 0; i < jumlahKelompok; i++) {
    const teamDiv = document.createElement("p");
    teamDiv.innerHTML =
      "<h3>Kelompok " + (i + 1) + "</h3><br>" + kelompok[i].join(", ");
    teamContainer.appendChild(teamDiv);
  }
}
