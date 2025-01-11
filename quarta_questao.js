const faturamentoEstado = [
    { "Estado": "SP", "Faturamento": "67836,43" },
    { "Estado": "RJ", "Faturamento": "36678,66" },
    { "Estado": "MG", "Faturamento": "29229,88" },
    { "Estado": "ES", "Faturamento": "27165,48" },
    { "Estado": "Outros", "Faturamento": "19849,53" }
]

function faturamentoTotal() {
    let total = 0
    faturamentoEstado.map(element => {
        if (parseFloat(element.Faturamento) > 0) {
            total += parseFloat(element.Faturamento)
        }
    })
    return total
}

function percentualEstado() {

    let total = faturamentoTotal()

    faturamentoEstado.map(element => {
        let percentual = parseFloat(element.Faturamento) * 100 / total
        console.log(`Estado: ${element.Estado} - Percentual de Faturamento: ${percentual.toFixed(2)}%`)
    })

}

percentualEstado()