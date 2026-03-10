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

    // Lógica do Modal (Área do Cliente)
    const modal = document.getElementById("login-modal");
    const btnLogin = document.getElementById("btn-login");
    const spanClose = document.querySelector(".close-modal");

    if (btnLogin) {
        btnLogin.addEventListener("click", () => {
            modal.style.display = "block";
        });
    }

    if (spanClose) {
        spanClose.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

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
            alert(`Obrigado pelo contato, ${nome}! Retornaremos em breve.`);
            contactForm.reset(); 
        });
    }

    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Autenticando no sistema da concessionária...");
            if (modal) {
                modal.style.display = "none"; 
            }
        });
    }
});