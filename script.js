document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scrolling da Navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }
        });
    });

    // --- Lógica do Menu Mobile (Hambúrguer) ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Fecha o menu mobile ao clicar num link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Lógica do Modal (Área do Cliente)
    const modal = document.getElementById("login-modal");
    const btnLogin = document.getElementById("btn-login");
    const btnLoginMobile = document.getElementById("btn-login-mobile"); // Novo botão mobile
    const spanClose = document.querySelector(".close-modal");

    // Abre o modal pelo botão do ecrã inteiro
    if (btnLogin) {
        btnLogin.addEventListener("click", () => {
            modal.style.display = "block";
        });
    }

    // Abre o modal pelo botão do menu mobile e fecha o menu
    if (btnLoginMobile) {
        btnLoginMobile.addEventListener("click", () => {
            modal.style.display = "block";
            navLinks.classList.remove('active'); 
        });
    }

    // Fecha o modal no X
    if (spanClose) {
        spanClose.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Fecha o modal ao clicar fora da caixa
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Simulação de Envio de Formulários
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const nome = document.getElementById("nome").value;
            alert(`Obrigado pelo contacto, ${nome}! Retornaremos em breve.`);
            contactForm.reset(); 
        });
    }

    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("A autenticar no sistema da concessionária...");
            if (modal) {
                modal.style.display = "none"; 
            }
        });
    }
});