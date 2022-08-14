const recipt = document.getElementById("recipt")

window.api.receive("bilgi", function(inh, yazici) {
    inh = inh.replaceAll("&quot;", "'")
    console.log(inh)
    recipt.innerHTML = inh
})