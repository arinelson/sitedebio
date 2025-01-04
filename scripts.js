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
                window.location.href = this.href;  // Redireciona após a notificação
            }, 1000);
        });
    });

    // Alterna entre modo escuro e claro
    const toggleModeBtn = document.createElement('button');
    toggleModeBtn.innerText = 'Alternar Modo';
    toggleModeBtn.className = 'btn btn-secondary toggle-mode-btn';
    document.body.appendChild(toggleModeBtn);

    toggleModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleModeBtn.innerText = 'Modo Claro';
        } else {
            toggleModeBtn.innerText = 'Modo Escuro';
        }
    });
});