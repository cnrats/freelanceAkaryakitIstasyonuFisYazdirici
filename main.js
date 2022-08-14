const { app, BrowserWindow, ipcMain } = require('electron')
const fs = require('fs');
const path = require('path')

function createWindow(width, height, preload, page, display) {
    const win = new BrowserWindow({
        width: width,
        height: height,
        show: display,
        webPreferences: {
            preload: path.join(__dirname, preload)
        }
    })

    win.setMenuBarVisibility(false)
    win.loadFile(page)
    return win
}


app.whenReady().then(() => {
    const wIndex = createWindow(800, 600, "preloads/indexPreload.js", "pages/index.html", true)
    wIndex.webContents.on('did-finish-load', () => {

        (async() => {
            let arr = await wIndex.webContents.getPrintersAsync()
            wIndex.webContents.send("yazicilar", arr)
        })()

        fs.readdir("./kaydedilenler", function(err, files) {
            let arr = []
            files.forEach(function(file) {
                if (file.endsWith(".recipt")) {
                    arr.push(file)
                }
            });
            wIndex.webContents.send("getir", arr)
        });

        fs.readdir("./plakalar", function(err, files) {
            let arr = []
            files.forEach(function(file) {
                if (file.endsWith(".txt")) {
                    arr.push(file)
                }
            });
            wIndex.webContents.send("plakalar", arr)
        });

        ipcMain.on("yazdir", function(err, inh, yazici) {
            const wYazdir = createWindow(211, 800, "preloads/yazdirPreload.js", "pages/yazdir.html", false)
            wYazdir.webContents.on('did-finish-load', () => {
                wYazdir.webContents.send("bilgi", inh, yazici)
                const options = {
                    silent: true,
                    deviceName: yazici,
                    pageRanges: [{
                        from: 0,
                        to: 0
                    }]
                }
                wYazdir.webContents.print(options, (success, errorType) => {
                    wYazdir.close()
                })
            })
        })

        ipcMain.on("kaydet", function(err, fn, inh, inputTarih, inputSaat, inputFisNo, inputPlaka, inputLitre, inputFiyat, inputYakit, inputTutar, inputKdv, inputKdvTutar, inputToplam, inputNakit, inputPompaNo, inputIstasyon, inputEkuNo, inputZNo) {
            if (fn) {
                fs.writeFile("./kaydedilenler/" + fn + ".recipt", inh, function() {})
                fs.writeFile("./kaydedilenler/" + fn + ".reciptData", inputTarih + "\n" + inputSaat + "\n" + inputFisNo + "\n" + inputPlaka + "\n" + inputLitre + "\n" + inputFiyat + "\n" + inputYakit + "\n" + inputTutar + "\n" + inputKdv + "\n" + inputKdvTutar + "\n" + inputToplam + "\n" + inputNakit + "\n" + inputPompaNo + "\n" + inputIstasyon + "\n" + inputEkuNo + "\n" + inputZNo, function() {})
            }
        })

        ipcMain.on("dosyaGetir", function(err, fn) {
            fs.readFile('./kaydedilenler/' + fn, 'utf8', function(err1, data1) {
                if (!err1) {
                    fs.readFile('./kaydedilenler/' + fn + "Data", 'utf8', function(err2, data2) {
                        if (!err2) {
                            arr = data2.split("\n")
                            wIndex.webContents.send("gelenKayit", data1, arr)
                        }
                    })
                }
            })
        })

        ipcMain.on("plakaGetir", function(err, fn) {
            fs.readFile('./plakalar/' + fn, 'utf8', function(err1, data) {
                if (!err1) {
                    arr = data.split("\n")
                    wIndex.webContents.send("gelenPlakalar", arr)
                }
            })
        })

    })
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})