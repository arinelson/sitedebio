document.addEventListener('DOMContentLoaded', function() {
    // Alterna entre modo escuro e claro
    const toggleModeBtn = document.getElementById('toggle-mode');
    const modeIcon = document.getElementById('mode-icon');

    toggleModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('bg-dark-primary');
        document.body.classList.toggle('text-light-primary');
        document.body.classList.toggle('bg-light-primary');
        document.body.classList.toggle('text-dark-primary');
        
        if (document.body.classList.contains('bg-dark-primary')) {
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
        } else {
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
        }
    });

    // Efeito giratório na foto de perfil
    const profilePic = document.querySelector('.profile-pic');
    profilePic.addEventListener('mouseenter', function() {
        gsap.to(profilePic, { rotation: 360, duration: 1 });
    });

    profilePic.addEventListener('mouseleave', function() {
        gsap.to(profilePic, { rotation: 0, duration: 1 });
    });

    // Efeito de clique nos links
    const links = document.querySelectorAll('.neon-button');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            link.classList.add('neon-button-active');
            setTimeout(() => {
                window.open(link.href, '_blank');
                link.classList.remove('neon-button-active');
            }, 500);
        });
    });

    // Animação de entrada suave
    gsap.from('header', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.link-tree a', { opacity: 0, y: 50, duration: 1, stagger: 0.2 });

    // Scroll suave para âncoras
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, { scrollTo: target, duration: 1 });
            }
        });
    });
});