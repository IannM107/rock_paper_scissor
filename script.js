// Acessando elementos do DOM (Document Object Model)
const gameContainer = document.querySelector(".container"),    // Seleciona o container do jogo
  userResult = document.querySelector(".user_result img"),     // Seleciona a imagem do resultado do usuário
  cpuResult = document.querySelector(".cpu_result img"),       // Seleciona a imagem do resultado do CPU
  result = document.querySelector(".result"),                  // Seleciona o elemento de texto do resultado
  optionImages = document.querySelectorAll(".option_image");   // Seleciona todas as imagens de opção

// Loop através de cada imagem de opção
optionImages.forEach((image, index) => {
  // Adiciona um evento de clique em cada imagem
  image.addEventListener("click", (e) => {
    // Adiciona a classe "active" à imagem clicada
    image.classList.add("active");

    // Inicializa a imagem do usuário e do CPU como "rock"
    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait..."; // Define o texto do resultado como "Wait..."

    // Loop novamente através de cada imagem de opção
    optionImages.forEach((image2, index2) => {
      // Se o índice atual não corresponder ao índice clicado
      // Remove a classe "active" das outras imagens de opção
      index !== index2 && image2.classList.remove("active");
    });

    // Adiciona a classe "start" ao container do jogo
    gameContainer.classList.add("start");

    // Define um tempo de espera para atrasar o cálculo do resultado
    let time = setTimeout(() => {
      // Remove a classe "start" após a espera
      gameContainer.classList.remove("start");

      // Obtém a fonte da imagem de opção clicada
      let imageSrc = e.target.querySelector("img").src;
      // Define a imagem do usuário como a imagem da opção clicada
      userResult.src = imageSrc;

      // Gera um número aleatório entre 0 e 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Cria um array de opções de imagem do CPU
      let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
      // Define a imagem do CPU como uma opção aleatória do array
      cpuResult.src = cpuImages[randomNumber];

      // Atribui um valor de letra para a opção do CPU (R para pedra, P para papel, S para tesoura)
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Atribui um valor de letra para a opção clicada (baseado no índice)
      let userValue = ["R", "P", "S"][index];

      // Cria um objeto com todos os resultados possíveis
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };

      // Busca o valor do resultado com base nas opções do usuário e do CPU
      let outComeValue = outcomes[userValue + cpuValue];

      // Exibe o resultado
      result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
    }, 2500); // Espera por 2,5 segundos
  });
});
