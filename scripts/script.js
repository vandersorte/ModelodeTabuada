function Calcular() {
    let num = document.getElementById("num")
    let tab = document.getElementById("table_numbers")
    let plus = document.getElementById("operator_plus")
    let minus = document.getElementById("minus_operator")
    let multiplication = document.getElementById("multiplication_operator")
    let division = document.getElementById("division_operator")
    
    if (num.value.length == 0) {
        window.alert("Erro, digite um número.")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        while (c <= 10) {
            if (plus.checked) {
                let item = document.createElement("option")
                item.text = `${c} + ${n} = ${n + c}`
                tab.appendChild(item)
                c++
            } else if (minus.checked) {
                let item = document.createElement("option")
                item.text = `${c} - ${n} = ${n - c}`
                tab.appendChild(item)
                c++
            } else if (multiplication.checked) {
                let item = document.createElement("option")
                item.text = `${c} x ${n} = ${n * c}`
                tab.appendChild(item)
                c++
            } else if (division.checked) {
                let item = document.createElement("option")
                item.text = `${n * c} ÷ ${n} = ${c}`
                tab.appendChild(item)
                c++
            }
        }
    }
}
