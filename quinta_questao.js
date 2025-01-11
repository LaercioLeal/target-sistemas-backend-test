function inverteString(palavra) {
    let result = ""
    for (let i = palavra.length - 1; i >= 0; i--) {
        result += palavra[i]
    }
    return result
}
function main() {
    let palavra = prompt("Digite uma palavra:")
    if (!isNaN || palavra.length <= 0) {
        console.log("Valor inválido. Por favor, digite uma palavra.")
        return
    }
    console.log(`Palavra inversa: ${inverteString(palavra)}`)
}

main()