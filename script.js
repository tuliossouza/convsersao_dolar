async function buscarCotacaoDolar() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
        const data = await response.json();
        return parseFloat(data.USDBRL.bid);
    } catch (error) {
        console.error('Erro ao buscar a cotação do dólar:', error);
        alert("Erro ao buscar a cotação do dólar. Tente novamente mais tarde.");
        return null;
    }
}


async function converter() {
    const valorReal = parseFloat(document.getElementById("valorReal").value);

    
    if (isNaN(valorReal)) {
        alert("Por favor, insira um valor em reais válido.");
        return;
    }

  
    const cotacaoDolar = await buscarCotacaoDolar();
    if (!cotacaoDolar) return; 

  
    const valorDolar = valorReal / cotacaoDolar;

    
    document.getElementById("resultado").innerText = `O valor em dólares é: $ ${valorDolar.toFixed(2)}`;
}

function recarregarPagina() {
    location.reload();
}
