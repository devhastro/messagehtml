<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="style_livro.css">
</head>

<body>
    <div class="card">
        <div class="imgbox">
            <img src="editada.png" alt="">
        </div>
        <div class="detalhes">
            <h2>Teste: Titulo</h2>
            <p>Eu te conheci no dia 20 de novembro e, sinceramente, não imaginava que, em tão pouco tempo, alguém pudesse se tornar tão importante para mim. Desde então, percebo o quanto você tem me feito bem, de uma forma que eu nunca esperei. Gosto de acordar os dias e mandar mensagem para você, e, por incrível que pareça, até as suas ligações, que antes me faziam um pouco de receio, hoje se tornaram momentos que espero ansiosamente.

                Você tem um dom de me fazer sorrir, mesmo nos dias mais difíceis. A sua presença, seja nas palavras ou nas suas zoações, sempre tem um efeito positivo sobre mim. E todo carinho e respeito que você tem por mim, mesmo que às vezes seja brincando, são tão especiais. Obrigado por ser quem você é todos os dias e por fazer minha vida mais leve, mais sorridente e mais feliz.

                Feliz Ano Novo! Que 2024 traga ainda mais momentos incríveis para nós, repletos de carinho, risadas e, claro, muitas zoações. Que continuemos a nos conhecer e a fazer os dias um do outro mais especiais, assim como tem sido até agora. Você é uma pessoa única e me sinto muito grato por ter te conhecido. Que o próximo ano seja repleto de amor, alegrias e todos os sonhos que você merece! 💖</p>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const card = document.querySelector('.card');
            const text = document.querySelector('.detalhes p');
            const content = text.textContent;
            text.textContent = ''; // Esvazia o texto inicialmente
            let index = 0;

            // Função para digitar o texto
            function typeText() {
                if (index < content.length) {
                    text.textContent += content.charAt(index);
                    index++;
                    setTimeout(typeText, 100); // Velocidade de digitação (100ms por caractere)
                }
            }

            // Adiciona o efeito de abrir a carta ao clicar nela
            card.addEventListener('click', function() {
                card.classList.toggle('active'); // Alterna a classe 'active' ao clicar

                // Inicia o efeito de digitação somente após o clique
                typeText();
            });
        });
    </script>
</body>

</html>