function validasiForm(){
    //untuk memanggil id inputUltah di js dari html
    const inputUltah = document.getElementById("inputUltah")
    const inputUltahValue = inputUltah.value

    // perhitungan untuk tahun sekarang secara real time
    const tahunSekarang = new Date().getFullYear()

    // perhitungan tahun sekarang - tahun yang diimput oleh user 
    const hasil = tahunSekarang - inputUltahValue

    // memanggil id hasil di dalam tag <p> lalu menambahkan value dari tag <p> menggunakan inner.HTML="value untuk tag <p>" + hasil dari pengurangan di atas 
    const hasilView = document.getElementById("hasil")

    hasilView.innerHTML = "umur anda sekarang adalah : " + hasil + " tahun"

    const peringatanView = document.getElementById("peringatan")
    peringatanView.innerHTML = "Mohon isi tahun kelahiran anda"
    //penggunaan css di dalam js
    peringatanView.style= "color:red;"

    //logic ketika user menginput dengan nilai yang kosong
    if (inputUltahValue === "") {
        hasilView.style = "display:none;"
    } else {
        peringatanView.style = "display:none;"
    }
}
//validasi onkeydown didalam input ketika user meng enter lalu memanggil logic yang ada di validasiForm didalam onclick tag button
function saatDiEnter(event){
    if (event.key === "Enter") {
        validasiForm()
    }
}

//syntax ini mengambil nilai dari input ultah, divalidasi menjadi user hanya memberikan value hanya 4 angka 
function maksimumInput(){
    const inputUltah = document.getElementById("inputUltah")
    const inputUltahValue = inputUltah.value

    inputUltah.value = inputUltahValue.slice(0,4)
}
