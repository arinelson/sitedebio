document.addEventListener('DOMContentLoaded', function() {
    // Função para exibir uma notificação ao clicar em um link
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerText = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            notification.addEventListener('transitionend', () => {
                notification.remove();
            });
        }, 2000);
    }

    // Adiciona evento de clique aos links para exibir a notificação
    const links = document.querySelectorAll('.link-tree .btn');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Impede o redirecionamento imediato
            showNotification(`Você clicou no link para: ${this.innerText}`);
            setTimeout(() => {
                window.open(this.href, '_blank');  // Abre o link em uma nova guia
            }, 1000);
        });
    });

    // Alterna entre modo escuro e claro
    const toggleModeBtn = document.getElementById('toggle-mode');
    const modeIcon = document.getElementById('mode-icon');

    toggleModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
        } else {
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
        }
    });
});