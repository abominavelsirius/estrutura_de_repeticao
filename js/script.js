function contar() {

    let ini = document.getElementById('txti') 
    let fim = document.getelementById('txtf')
    let passo = docment.getelementById('txtp')
    let res = document.getelementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {  // se tiver  vazio
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
    }

}