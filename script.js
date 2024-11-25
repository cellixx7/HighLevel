// Referências para o botão e o popup
const loginBtn = document.getElementById("login-btn");
const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("close-popup");
const loginOption = document.getElementById("login-option");
const registerOption = document.getElementById("register-option");

// Abrir o popup quando clicar no botão de login
loginBtn.addEventListener("click", () => {
    popup.style.display = "block";  // Exibe o popup
});

// Fechar o popup
closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";  // Esconde o popup
});

// Opção de Login: redireciona para a página de login
loginOption.addEventListener("click", () => {
    window.location.href = "login.html";  // Altere para o caminho correto de login
    popup.style.display = "none";  // Fecha o popup
});

// Opção de Cadastro: redireciona para a página de cadastro
registerOption.addEventListener("click", () => {
    window.location.href = "sign.html";  // Altere para o caminho correto de cadastro
    popup.style.display = "none";  // Fecha o popup
});

// Seleciona a barra de rolagem e o polegar
const scrollbar = document.querySelector('body'); // Ou o elemento que você deseja
const scrollbarThumb = document.querySelector('::-webkit-scrollbar-thumb');

// Função para aumentar o tamanho da barra de rolagem
function enlargeScrollbar() {
  document.documentElement.style.setProperty('--scrollbar-width', '12px');
  document.documentElement.style.setProperty('--scrollbar-thumb-width', '12px');
}

// Função para voltar o tamanho da barra de rolagem ao normal
function resetScrollbar() {
  document.documentElement.style.setProperty('--scrollbar-width', '8px');
  document.documentElement.style.setProperty('--scrollbar-thumb-width', '8px');
}

// Adiciona os eventos de mouse
scrollbar.addEventListener('mouseenter', enlargeScrollbar);
scrollbar.addEventListener('mouseleave', resetScrollbar);

// Se você precisar manipular o "polegar" diretamente:
scrollbarThumb.addEventListener('mouseenter', function() {
  document.documentElement.style.setProperty('--scrollbar-thumb-width', '12px');
});

scrollbarThumb.addEventListener('mouseleave', function() {
  document.documentElement.style.setProperty('--scrollbar-thumb-width', '8px');
});


// Rolar suavemente para o topo ao clicar na logo ou seta
document.querySelectorAll('.logo-link, .scroll-to-top').forEach(element => {
  element.addEventListener('click', (event) => {
      event.preventDefault(); // Evita comportamento padrão
      window.scrollTo({
          top: 0,
          behavior: 'smooth' // Animação suave
      });
  });
});

// Verificar suporte ao behavior: 'smooth'
if (!('scrollBehavior' in document.documentElement.style)) {
  console.log("Adicionando polyfill para rolagem suave.");
  // Adicione um polyfill de biblioteca como smoothscroll-polyfill, se necessário.
}

// Mostrar a seta ao rolar para baixo
window.addEventListener('scroll', () => {
  const scrollTopButton = document.querySelector('.scroll-to-top');
  if (window.scrollY > 300) {
      scrollTopButton.classList.add('show');
  } else {
      scrollTopButton.classList.remove('show');
  }
});

console.log("JavaScript carregado!");


