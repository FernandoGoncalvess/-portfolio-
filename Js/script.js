// Toggle icon navbar
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');

    // Alterna o ícone e a barra de navegação ao clicar no ícone de menu
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    // Remove a classe ativa ao clicar nos links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Previne o comportamento padrão de navegação (scroll imediato)

            // Remove as classes do menu
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');

            // Rola até a seção específica suavemente
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth', // Rola suavemente até a seção
                block: 'start'
            });
        });
    });

    // Atualiza a navegação ativa e o cabeçalho fixo ao rolar a página
    window.addEventListener('scroll', () => {
        let top = window.scrollY;

        // Atualiza os links ativos da barra de navegação conforme a rolagem
        sections.forEach(section => {
            const offset = section.offsetTop - 100; // Posição inicial da seção
            const height = section.offsetHeight;   // Altura da seção
            const id = section.getAttribute('id'); // ID da seção

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                // Adiciona a classe 'active' no link correspondente à seção visível
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            }
        });

        // Adiciona ou remove a classe sticky ao cabeçalho dependendo da rolagem
        header.classList.toggle('sticky', top > 100);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');

    // Atualiza as seções visíveis ao rolar
    window.addEventListener('scroll', () => {
        let top = window.scrollY;

        // Verifica cada seção e aplica a classe 'show-animate' quando visível
        sections.forEach(section => {
            const offset = section.offsetTop - 100;
            const height = section.offsetHeight;

            if (top >= offset && top < offset + height) {
                section.classList.add('show-animate'); // Garante que a classe 'show-animate' seja adicionada
            } else {
                section.classList.remove('show-animate'); // Remove quando não visível
            }
        });
    });
});

