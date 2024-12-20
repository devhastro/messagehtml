<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carta Especial</title>
    <style>
        /* Corpo da página */
        body {
            font-family: 'Georgia', serif;
            background: linear-gradient(135deg, #f3ec78, #af4261);
            color: #333;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
        }

        /* Container da mensagem */
        #message-container {
            background: rgba(255, 255, 255, 0.9);
            color: #4A4A4A;
            padding: 30px 20px;
            max-width: 500px;
            border-radius: 15px;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
            text-align: center;
            font-size: 1.2em;
            line-height: 1.8em;
        }

        /* Botão */
        button {
            background-color: #ff6f61;
            color: white;
            padding: 10px 20px;
            margin-top: 20px;
            border: none;
            font-size: 1em;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #e65a50;
        }

        /* Animação de entrada */
        @keyframes fadeIn {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }

            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        #text {
            animation: fadeIn 1s ease forwards;
        }
    </style>
</head>

<body>
    <div id="message-container">
        <p id="text"></p>
        <button id="reveal-button" onclick="startMessage()">Clique para Revelar</button>
    </div>

    <script>
        const message = `
            Olá, quirida ❤,

Só queria dizer que você é uma pessoa incrível. Como já te falei, você chegou pra salvar esse ano que tava bem ruinzinho pra mim. Obrigado por todos os momentos juntos, pelas risadas e por estar tão presente comigo nesse final de ano (pelo menos até agora, né? Kkk).

Antes de tudo, quero que você aproveite MUITO a sua viagem. Que ela seja incrível, cheia de coisas boas e momentos especiais. Esqueça qualquer problema que possa ter, e só curta ao máximo (mas atenção: é pra esquecer os problemas, não me esquecer, hein? 😂).

Desejo que seu Natal e seu Ano Novo sejam repletos de luz, alegria e realizações. Essa época do ano é incrível, assim como você.

E que venha o próximo ano! Que ele traga mais motivos pra gente estar juntos, rir, compartilhar momentos e construir algo ainda mais especial. Você me faz bem, e eu só quero que você tenha o mundo de coisas boas que merece.

❤
        `;

        let index = 0;
        const textElement = document.getElementById("text");
        const button = document.getElementById("reveal-button");

        function typeMessage() {
            if (index < message.length) {
                textElement.textContent += message.charAt(index);
                index++;
                setTimeout(typeMessage, 50); // Ajuste a velocidade da digitação
            } else {
                button.style.display = "none"; // Esconde o botão após terminar
            }
        }

        function startMessage() {
            button.style.display = "none";
            typeMessage();
        }
    </script>
</body>

</html>