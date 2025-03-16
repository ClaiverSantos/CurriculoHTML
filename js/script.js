document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões "Ver Detalhes"
    const buttons = document.querySelectorAll('.ver-detalhes');
    
    // Adiciona um evento de clique para abrir o modal relacionado ao botão dentro de um card
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.card').querySelector('.modal');
            modal.classList.add('ativo');
        });
    });

    // Seleciona todos os links que abrem os modais de redes sociais (LinkedIn, GitHub, Email)
    const links = document.querySelectorAll("[data-modal]");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const modalId = this.getAttribute("data-modal");
            document.getElementById(modalId).classList.add("ativo");
        });
    });

    // Seleciona todos os botões de fechar
    const closeButtons = document.querySelectorAll('.fechar');

    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            const modal = closeButton.closest('.modal');
            modal.classList.remove('ativo');
        });
    });

    // Fecha o modal se clicar fora dele
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('ativo');
        }
    });
});
