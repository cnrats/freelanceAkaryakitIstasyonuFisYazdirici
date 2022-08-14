$('#summernote').summernote({
    placeholder: 'Fiş görünümü.',
    fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Merriweather', 'Bebas Neue', 'Hurricane', 'Red Hat Mono', 'Red Hat Mono Italic', 'Roboto Black', 'Roboto Black Italic', 'Robot Bold', 'Roboto Bold Italic', 'Roboto Italic', 'Roboto Light', 'Roboto Light Italic', 'Roboto Medium', 'Roboto Medium Italic', 'Roboto Regular', 'Roboto Thin', 'Roboto Thin Italic', 'FYBE11', 'FYBE12', 'FYBE22', 'FYBE23', 'FYBE24', 'FYBE25', 'FYBE26', 'FYBE27', 'FYBE31', 'FYBE32', 'FYME11', 'FYME12', 'FYPR11', 'FYPR12', 'MYFONT_1'],
    fontNamesIgnoreCheck: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Merriweather', 'Bebas Neue', 'Hurricane', 'Red Hat Mono', 'Red Hat Mono Italic', 'Roboto Black', 'Roboto Black Italic', 'Robot Bold', 'Roboto Bold Italic', 'Roboto Italic', 'Roboto Light', 'Roboto Light Italic', 'Roboto Medium', 'Roboto Medium Italic', 'Roboto Regular', 'Roboto Thin', 'Roboto Thin Italic', 'FYBE11', 'FYBE12', 'FYBE22', 'FYBE23', 'FYBE24', 'FYBE25', 'FYBE26', 'FYBE27', 'FYBE31', 'FYBE32', 'FYME11', 'FYME12', 'FYPR11', 'FYPR12', 'MYFONT_1'],
    fontSizes: ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32'],
    tabsize: 1,
    height: 800,
    lineHeights: ['0.2', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2', '1.4', '1.5', '2.0', '3.0'],
    toolbar: [
        ['font', ['bold', 'underline', 'strikethrough', 'clear']],
        ['fontname', ['fontname']],
        ['fontsize', ['fontsize']],
        ['color', ['forecolor']],
        ['height', ['height']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['picture', 'hr']],
        ['view', ['codeview']]
    ]
})

const btnGetir = document.getElementById("btnGetir")
const btnKaydet = document.getElementById("btnKaydet")
const btnHazirla = document.getElementById("btnHazirla")
const btnYazdir = document.getElementById("btnYazdir")
const btnPlaka = document.getElementById("btnPlaka")

const inputTarih = document.getElementById("inputTarih")
const inputSaat = document.getElementById("inputSaat")
const inputFisNo = document.getElementById("inputFisNo")
const inputPlaka = document.getElementById("inputPlaka")
const inputLitre = document.getElementById("inputLitre")
const inputFiyat = document.getElementById("inputFiyat")
const inputYakit = document.getElementById("inputYakit")
const inputTutar = document.getElementById("inputTutar")
const inputKdv = document.getElementById("inputKdv")
const inputKdvTutar = document.getElementById("inputKdvTutar")
const inputToplam = document.getElementById("inputToplam")
const inputNakit = document.getElementById("inputNakit")
const inputPompaNo = document.getElementById("inputPompaNo")
const inputIstasyon = document.getElementById("inputIstasyon")
const inputEkuNo = document.getElementById("inputEkuNo")
const inputZNo = document.getElementById("inputZNo")

const inputKaydedilenler = document.getElementById("inputKaydedilenler")

const inputPlakalar = document.getElementById("inputPlakalar")

const inputDosyaAdi = document.getElementById("inputDosyaAdi")

const inputYazici = document.getElementById("inputYazici")

const bd = document.getElementById("bd");
const plakaUyari = document.getElementById("plakaUyari");
const guncelPlaka = document.getElementById("guncelPlaka");

let inputTarihC = false
let inputSaatC = false
let inputFisNoC = false
let inputPlakaC = false
let inputLitreC = false
let inputFiyatC = false
let inputYakitC = false
let inputTutarC = false
let inputKdvTutarC = false
let inputToplamC = false
let inputNakitC = false
let inputPompaNoC = false
let inputIstasyonC = false
let inputEkuNoC = false
let inputZNoC = false

function setRecipt(data) {
    $('#summernote').summernote('code', data)
}

function getRecipt() {
    return $('#summernote').summernote('code');
}

btnHazirla.addEventListener("click", function() {

    if (getRecipt().search(inputTarih.value) > -1) {
        inputTarihC = inputTarih.value
    } else if (inputTarihC) {
        setRecipt(getRecipt().replaceAll(inputTarihC, inputTarih.value))
        inputTarihC = inputTarih.value
    }

    if (getRecipt().search(inputSaat.value) > -1) {
        inputSaatC = inputSaat.value
    } else if (inputSaatC) {
        setRecipt(getRecipt().replaceAll(inputSaatC, inputSaat.value))
        inputSaatC = inputSaat.value
    }

    if (getRecipt().search(inputFisNo.value) > -1) {
        inputFisNoC = inputFisNo.value
    } else if (inputFisNoC) {
        setRecipt(getRecipt().replaceAll(inputFisNoC, inputFisNo.value))
        inputFisNoC = inputFisNo.value
    }

    if (getRecipt().search(inputPlaka.value) > -1) {
        inputPlakaC = inputPlaka.value
    } else if (inputPlakaC) {
        setRecipt(getRecipt().replaceAll(inputPlakaC, inputPlaka.value))
        inputPlakaC = inputPlaka.value
    }

    if (getRecipt().search(inputLitre.value) > -1) {
        inputLitreC = inputLitre.value
    } else if (inputLitreC) {
        setRecipt(getRecipt().replaceAll(inputLitreC, inputLitre.value))
        inputLitreC = inputLitre.value
    }

    if (getRecipt().search(inputFiyat.value) > -1) {
        inputFiyatC = inputFiyat.value
    } else if (inputFiyatC) {
        setRecipt(getRecipt().replaceAll(inputFiyatC, inputFiyat.value))
        inputFiyatC = inputFiyat.value
    }

    if (getRecipt().search(inputYakit.value) > -1) {
        inputYakitC = inputYakit.value
    } else if (inputYakitC) {
        setRecipt(getRecipt().replaceAll(inputYakitC, inputYakit.value))
        inputYakitC = inputYakit.value
    }

    if (getRecipt().search(inputTutar.value) > -1) {
        inputTutarC = inputTutar.value
    } else if (inputTutarC) {
        setRecipt(getRecipt().replaceAll(inputTutarC, inputTutar.value))
        inputTutarC = inputTutar.value
    }

    if (getRecipt().search(inputKdvTutar.value) > -1) {
        inputKdvTutarC = inputKdvTutar.value
    } else if (inputKdvTutarC) {
        setRecipt(getRecipt().replaceAll(inputKdvTutarC, inputKdvTutar.value))
        inputKdvTutarC = inputKdvTutar.value
    }

    if (getRecipt().search(inputToplam.value) > -1) {
        inputToplamC = inputToplam.value
    } else if (inputToplamC) {
        setRecipt(getRecipt().replaceAll(inputKdvTutarC, inputKdvTutar.value))
        inputToplamC = inputToplam.value
    }

    if (getRecipt().search(inputNakit.value) > -1) {
        inputNakitC = inputNakit.value
    } else if (inputNakitC) {
        setRecipt(getRecipt().replaceAll(inputNakitC, inputNakit.value))
        inputNakitC = inputNakit.value
    }

    if (getRecipt().search(inputPompaNo.value) > -1) {
        inputPompaNoC = inputPompaNo.value
    } else if (inputPompaNoC) {
        setRecipt(getRecipt().replaceAll(inputPompaNoC, inputPompaNo.value))
        inputPompaNoC = inputPompaNo.value
    }

    if (getRecipt().search(inputIstasyon.value) > -1) {
        inputIstasyonC = inputIstasyon.value
    } else if (inputIstasyonC) {
        setRecipt(getRecipt().replaceAll(inputIstasyonC, inputIstasyon.value))
        inputIstasyonC = inputIstasyon.value
    }

    if (getRecipt().search(inputEkuNo.value) > -1) {
        inputEkuNoC = inputEkuNo.value
    } else if (inputEkuNoC) {
        setRecipt(getRecipt().replaceAll(inputEkuNoC, inputEkuNo.value))
        inputEkuNoC = inputEkuNo.value
    }

    if (getRecipt().search(inputZNo.value) > -1) {
        inputZNoC = inputZNo.value
    } else if (inputZNoC) {
        setRecipt(getRecipt().replaceAll(inputZNoC, inputZNo.value))
        inputZNoC = inputZNo.value
    }

})

btnKaydet.addEventListener("click", function() {
    window.api.send("kaydet", inputDosyaAdi.value, getRecipt(), inputTarih.value, inputSaat.value, inputFisNo.value, inputPlaka.value, inputLitre.value, inputFiyat.value, inputYakit.value, inputTutar.value, inputKdv.value, inputKdvTutar.value, inputToplam.value, inputNakit.value, inputPompaNo.value, inputIstasyon.value, inputEkuNo.value, inputZNo.value)
})

btnGetir.addEventListener("click", function() {
    window.api.send("dosyaGetir", inputKaydedilenler.value)
})

window.api.receive("getir", function(arr) {
    arr.forEach(e => {
        inputKaydedilenler.innerHTML += "<option value='" + e + "'>" + e + "</option>"
    });
})

window.api.receive("yazicilar", function(arr) {
    arr.forEach(e => {
        inputYazici.innerHTML += "<option value='" + e.name + "'>" + e.name + "</option>"
    });
})

window.api.receive("gelenKayit", function(data1, arr) {
    setRecipt(data1)

    inputTarih.value = arr[0]
    inputSaat.value = arr[1]
    inputFisNo.value = arr[2]
    inputPlaka.value = arr[3]
    inputLitre.value = arr[4]
    inputFiyat.value = arr[5]
    inputYakit.value = arr[6]
    inputTutar.value = arr[7]
    inputKdv.value = arr[8]
    inputKdvTutar.value = arr[9]
    inputToplam.value = arr[10]
    inputNakit.value = arr[11]
    inputPompaNo.value = arr[12]
    inputIstasyon.value = arr[13]
    inputEkuNo.value = arr[14]
    inputZNo.value = arr[15]

    btnHazirla.click()
})

btnYazdir.addEventListener("click", function() {
    window.api.send("yazdir", getRecipt(), inputYazici.value)
})

function hesap() {
    let l = parseFloat(inputLitre.value.toString().replace(',', '.'))
    let f = parseFloat(inputFiyat.value.toString().replace(',', '.'))
    let k = parseFloat(inputKdv.value.toString().replace(',', '.'))
    let tt = parseFloat(l * f)

    let kth = tt - ((100 * tt) / (100 + k))
    inputToplam.value = tt.toFixed(2).toString().replace('.', ',')
    inputNakit.value = tt.toFixed(2).toString().replace('.', ',')
    inputTutar.value = tt.toFixed(2).toString().replace('.', ',')

    inputKdvTutar.value = kth.toFixed(2).toString().replace('.', ',')
}

inputKdv.addEventListener("change", function() {
    hesap()
})

inputLitre.addEventListener("change", function() {
    hesap()
})

inputFiyat.addEventListener("change", function() {
    hesap()
})

window.api.receive("plakalar", function(arr) {
    arr.forEach(e => {
        inputPlakalar.innerHTML += "<option value='" + e + "'>" + e + "</option>"
    });
})

btnPlaka.addEventListener("click", function() {
    window.api.send("plakaGetir", inputPlakalar.value)
})

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

window.api.receive("gelenPlakalar", function(arr) {
    function task(el) {
        if (inputPlakaC) {
            console.log(1)
            inputPlaka.value = el
            sleep(1000).then(() => {
                console.log(2)
                btnHazirla.click()
            });
            sleep(2000).then(() => {
                console.log(3)
                btnYazdir.click()
            });
        } else {
            alert("Plaka alanı fiş ile eşleşmemiş!")
            return true
        }
    }

    runLoop = async() => {
        bd.classList.add("d-none");
        plakaUyari.classList.remove("d-none");
        for (const item of arr) {
            guncelPlaka.innerHTML = item;
            if (task(item)) {
                break
            }
            await new Promise(resolve => setTimeout(resolve, 12000))
        }
        bd.classList.remove("d-none");
        plakaUyari.classList.add("d-none");
        alert("İşlem tamamlandı.")
    }

    runLoop()
})