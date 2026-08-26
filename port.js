// efeito do cabeçario
window.addEventListener('scroll', function () {
    const menu = document.querySelector('.menu-desktop');
    if (window.scrollY > 50) {
        menu.classList.add('fixed');
    } else {
        menu.classList.remove('fixed');
    }
});
// efeito do cabeçario

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  toggleBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
  });

  const links = mobileNav.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
    });
  });
});

// especialidade
document.addEventListener('DOMContentLoaded', function () {
    const especialidadeBoxes = document.querySelectorAll('.especialidade-box');

    especialidadeBoxes.forEach(box => {
        box.addEventListener('mousemove', (e) => {
            const rect = box.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const offsetX = (x - centerX) / 10;
            const offsetY = (y - centerY) / 10;

            // Aplicando a sombra laranja
            box.style.boxShadow = `${-offsetX}px ${-offsetY}px 30px rgba(0, 255, 8, 0.5)`;

            // Efeito de rotação 3D
            box.style.transform = `rotateX(${offsetY}deg) rotateY(${offsetX}deg)`;
        });

        box.addEventListener('mouseleave', () => {
            box.style.boxShadow = "none"; // Remove sombra quando o mouse sai
            box.style.transform = "none"; // Remove rotação quando o mouse sai
        });
    });
});
// especialidade

// filtro de projetos
document.addEventListener('DOMContentLoaded', function () {
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const projetos = document.querySelectorAll('.proj-item');
    const semProjetos = document.querySelector('.sem-projetos');

    function aplicarFiltro(categoria) {
        let algumVisivel = false;

        projetos.forEach(projeto => {
            if (projeto.dataset.categoria === categoria) {
                projeto.hidden = false;
                algumVisivel = true;
            } else {
                projeto.hidden = true;
            }
        });

        if (semProjetos) {
            semProjetos.classList.toggle('mostrar', !algumVisivel);
        }
    }

    filtroBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filtroBtns.forEach(b => b.classList.remove('ativo'));
            btn.classList.add('ativo');
            aplicarFiltro(btn.dataset.filtro);
        });
    });

    // categoria ativa por padrão ao carregar a página
    const btnAtivo = document.querySelector('.filtro-btn.ativo');
    if (btnAtivo) {
        aplicarFiltro(btnAtivo.dataset.filtro);
    }
});
// filtro de projetos

// certificado
document.addEventListener('DOMContentLoaded', function () {
    const certificadoBoxes = document.querySelectorAll('.certificado-box');

    certificadoBoxes.forEach(box => {
        box.addEventListener('mousemove', (e) => {
            const rect = box.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const offsetX = (x - centerX) / 10;
            const offsetY = (y - centerY) / 10;

            // Aplicando a sombra laranja
            box.style.boxShadow = `${-offsetX}px ${-offsetY}px 30px rgba(0, 255, 8, 0.5)`;

            // Efeito de rotação 3D
            box.style.transform = `rotateX(${offsetY}deg) rotateY(${offsetX}deg)`;
        });

        box.addEventListener('mouseleave', () => {
            box.style.boxShadow = "none"; // Remove sombra quando o mouse sai
            box.style.transform = "none"; // Remove rotação quando o mouse sai
        });
    });
});
// certificado