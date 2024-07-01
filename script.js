function codificar() {
    let inputText = document.getElementById('inputText').value;
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        outputText += String.fromCharCode(inputText.charCodeAt(i) + 1);
    }

    mostrarTextoCodificado(outputText);
}


function decodificar() {
    let inputText = document.getElementById('inputText').value;
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        outputText += String.fromCharCode(inputText.charCodeAt(i) - 1);
    }

    mostrarTextoCodificado(outputText);
}


function mostrarTextoCodificado(outputText) {
    let outputTextarea = document.getElementById('outputText');
    let placeholderImage = document.getElementById('placeholderImage');
    let noMessageText = document.getElementById('noMessageText');

    if (outputText) {
        outputTextarea.style.display = 'block';
        placeholderImage.style.display = 'none';
        noMessageText.style.display = 'none';
        outputTextarea.value = outputText;
    } else {
        outputTextarea.style.display = 'none';
        placeholderImage.style.display = 'block';
        noMessageText.style.display = 'block';
    }
}

function copiarTexto() {
    let outputTextarea = document.getElementById('outputText');
    outputTextarea.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}
