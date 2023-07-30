function conv(val) {
    const c = document.getElementById('temp1').value
    const f = document.getElementById('temp2').value
    const k = document.getElementById('temp3').value

    if (val == 1) {
        document.getElementById('temp2').value = (parseFloat(c) * (9 / 5) + 32).toFixed(3)
        document.getElementById('temp3').value = (parseFloat(c) + 273.15).toFixed(3)
        if (c.length == 0) {
            alert("Enter temperature")
        }
    } else if (val == 2) {
        document.getElementById('temp1').value = ((parseFloat(f) - 32) * 5 / 9).toFixed(3)
        document.getElementById('temp3').value = ((parseFloat(f) - 32) * 5 / 9 + 273.15).toFixed(3)
        if (f.length == 0) {
            alert("Enter temperature")
        }
    } else if (val == 3) {
        document.getElementById('temp1').value = (parseFloat(k) - 273.15).toFixed(3)
        document.getElementById('temp2').value = ((parseFloat(k) - 273.15) * 9 / 5 + 32).toFixed(3)
        if (k.length == 0) {
            alert("Enter temperature")
        }
    } else { }
}

function resett() {
    document.getElementById('temp1').value = ""
    document.getElementById('temp2').value = ""
    document.getElementById('temp3').value = ""
}