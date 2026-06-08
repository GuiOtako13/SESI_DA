
function calcular(){

    const fusca = Number(document.getElementById('fusca').value || 0);
    const gol = Number(document.getElementById('gol').value || 0);
    const chevette = Number(document.getElementById('chevette').value || 0);

    const valorFusca = 20000;
    const valorGol = 15000;
    const valorChevette = 12500;

    
    const total =
        (fusca * valorFusca) +
        (gol * valorGol) +
        (chevette * valorChevette);

    document.getElementById("resultado").innerHTML =
        formatReal(total);
}

function formatReal(valor) {
    return 'Total: R$ ' + valor.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
