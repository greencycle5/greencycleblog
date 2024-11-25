// Função para mostrar ou ocultar o conteúdo completo do post
function toggleContent(button) {
    const fullContent = button.nextElementSibling;
    const isVisible = fullContent.style.display === 'block';

    if (isVisible) {
        fullContent.style.display = 'none';
        button.innerText = 'Leia mais...';
    } else {
        fullContent.style.display = 'block';
        button.innerText = 'Leia menos...';
    }
}
