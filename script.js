
// Cria referência total aos elementos da página.
const anoNascimentoInput = document.querySelector('input#anoNascimento'); 
const verificarBtn = document.querySelector('button#verificarBtn');
const resultadoDiv = document.querySelector('div#resultado');


// Adiciona o "ouvinte" de evento de clique ao BOTÃO.
verificarBtn.addEventListener('click', () => {
  
  // Pega o ano atual dinamicamente. 
  const anoAtual = new Date().getFullYear()

  // Pega o valor do input e converte para número.
  const anoNasc = Number(anoNascimentoInput.value);

  // Validacao: Verifica se o ano de nascimento inserido esta valido
  if(anoNasc <= 0 || anoNasc > anoAtual) {
    resultadoDiv.innerHTML = `[ERRO] Digite um ano valido!`
    resultadoDiv.style.display = 'block';
    return;
  }
  
  // Calcula a idade
  const idade = anoAtual - anoNasc
  
  // Validacao: Verifica se e maior ou menor de idade
  if(idade >= 18){
    resultadoDiv.innerHTML = `Voce tem ${idade} anos, Maior de Idade!`
    resultadoDiv.className = 'maior-idade'; // Adiciona a classe para o estilo verde
  } else {
    resultadoDiv.innerHTML = `Voce tem ${idade} anos, Menor de Idade!`
    resultadoDiv.className = 'menor-idade'; // Adiciona a classe para o estilo vermelho
  }

  resultadoDiv.style.display = 'block';
  
})