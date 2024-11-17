let numeroSecreto = parseInt(Math.random() * 100 + 1);
 let tentativas = 0;
    let resField = document.getElementById("guess");
    let textoAzul = document.getElementById("textoAzul");
    let tentativasText = document.getElementById("tentativas");
    let trofeu = document.getElementById("trofeu");
    let form = document.querySelector('form');
    let winSound = document.getElementById("winSound")

    console.log(numeroSecreto)
    trofeu.style.display = 
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        let res = parseInt(resField.value);

        if (res === numeroSecreto) {
            textoAzul.innerHTML = `Você <span class="text-blue-400">acertou!</span>`;
            trofeu.style.display = 'block';
            winSound.play()
        }else if (isNaN(res)){
            textoAzul.innerHTML = `<span class="text-red-600">Insira um Número</span>`
        }
        else if (res > numeroSecreto) {
            textoAzul.innerHTML = `O número aletorio é <span class= "text-green-400">Menor</span> que: ${res}`;
        } else {
            textoAzul.innerHTML = `O número aletorio é <span class= "text-red-400">Maior</span> que: ${res}`;
        }

        tentativas++;
        tentativasText.innerHTML = `Tentativas: ${tentativas}`;

        resField.value = '';
        resField.focus()
    });