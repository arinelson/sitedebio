document.addEventListener('DOMContentLoaded', function() {
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

    const profilePic = document.querySelector('.profile-pic');
    profilePic.addEventListener('mouseenter', function() {
        gsap.to(profilePic, { rotation: 360, duration: 1 });
    });

    profilePic.addEventListener('mouseleave', function() {
        gsap.to(profilePic, { rotation: 0, duration: 1 });
    });

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
});