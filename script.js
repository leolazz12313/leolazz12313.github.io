document.addEventListener("DOMContentLoaded", function() {
    const introSection = document.getElementById('intro');
    const projectsSection = document.getElementById('projects');
    const skillsSection = document.getElementById('skills');

    animateOnScroll();

    // Adiciona um listener para o evento de rolagem da página
    window.addEventListener('scroll', animateOnScroll);

    // Função para animar os elementos ao rolar a página
    function animateOnScroll() {
        // Verifica se a seção de introdução está visível
        if (isElementInViewport(introSection)) {
            introSection.classList.add('animate__fadeIn');
        }

        // Verifica se a seção de projetos está visível
        if (isElementInViewport(projectsSection)) {
            const projectCards = projectsSection.querySelectorAll('.animate__animated');
            projectCards.forEach(card => {
                if (!card.classList.contains('animate__slideInUp')) {
                    card.classList.add('animate__slideInUp');
                }
            });
        }

        // Verifica se a seção de habilidades está visível
        if (isElementInViewport(skillsSection)) {
            const skillItems = skillsSection.querySelectorAll('.animate__animated');
            skillItems.forEach(item => {
                if (!item.classList.contains('animate__slideInUp')) {
                    item.classList.add('animate__slideInUp');
                }
            });
        }
    }

    // Função para verificar se um elemento está visível na tela
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');
    const nomeError = document.getElementById('nome-error');
    const emailError = document.getElementById('email-error');
    const enviarBtn = document.getElementById('enviar');

    enviarBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Remove mensagens de erro anteriores
        nomeError.classList.add('hidden');
        emailError.classList.add('hidden');

        // Validação do campo Nome
        if (nomeInput.value.trim() === '') {
            nomeError.classList.remove('hidden');
        }

        // Validação do campo Email
        if (emailInput.value.trim() === '' || !validarEmail(emailInput.value)) {
            emailError.classList.remove('hidden');
        }

        // Se todos os campos estiverem preenchidos corretamente, envie o formulário
        if (nomeError.classList.contains('hidden') && emailError.classList.contains('hidden')) {
            enviarFormulario();
        }
    });

    // Função para validar o formato do email
    function validarEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Função para enviar o formulário (simulada)
    function enviarFormulario() {
        // Simula o envio do formulário
        exibirNotificacao('Formulário enviado com sucesso!', true);

        // Limpa os campos do formulário
        nomeInput.value = '';
        emailInput.value = '';
        mensagemInput.value = '';
    }

    // Função para exibir a notificação
    function exibirNotificacao(mensagem, sucesso) {
        const notificacao = document.getElementById('notificacao');
        const fecharNotificacao = document.getElementById('fechar-notificacao');

        notificacao.textContent = mensagem;
        notificacao.classList.remove('hidden');
        notificacao.classList.remove(sucesso ? 'bg-red-500' : 'bg-green-500');
        notificacao.classList.add(sucesso ? 'bg-green-500' : 'bg-red-500');

        // Mostra a notificação por 3 segundos
        setTimeout(function() {
            notificacao.classList.add('hidden');
        }, 3000);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const notificacao = document.getElementById('notificacao');
    const fecharNotificacao = document.getElementById('fechar-notificacao');

    function exibirNotificacao(mensagem, sucesso) {
        notificacao.textContent = mensagem;
        notificacao.classList.remove('hidden');
        notificacao.classList.remove(sucesso ? 'bg-red-500' : 'bg-green-500');
        notificacao.classList.add(sucesso ? 'bg-green-500' : 'bg-red-500');

        setTimeout(function() {
            notificacao.classList.add('fade-out');
            setTimeout(function() {
                notificacao.classList.add('hidden');
                notificacao.classList.remove('fade-out');
                notificacao.style.width = '100%'; // Reinicia a largura da barra de progresso
            }, 500); // Tempo de duração da animação de fade-out
        }, 5000); // Tempo total de duração da notificação

        // Inicia a barra de progresso
        notificacao.style.width = '100%';
        setTimeout(function() {
            notificacao.style.width = '0';
        }, 100);
    }

    fecharNotificacao.addEventListener('click', function() {
        notificacao.classList.add('hidden');
    });

    // Chame a função para exibir a notificação
    exibirNotificacao('Formulário enviado com sucesso!', true);
});
document.addEventListener('DOMContentLoaded', function() {
    const notificacao = document.getElementById('notificacao');
    const fecharNotificacao = document.getElementById('fechar-notificacao');
    const notificacaoProgresso = document.getElementById('notificacao-progresso');

    function exibirNotificacao(mensagem, sucesso) {
        notificacao.textContent = mensagem;
        notificacao.classList.remove('hidden');
        notificacao.classList.remove(sucesso ? 'bg-red-500' : 'bg-green-500');
        notificacao.classList.add(sucesso ? 'bg-green-500' : 'bg-red-500');

        // Iniciar a barra de progresso
        notificacaoProgresso.style.width = '100%';

        setTimeout(function() {
            notificacao.classList.add('fade-out');
            notificacaoProgresso.style.width = '0';
            setTimeout(function() {
                notificacao.classList.add('hidden');
                notificacao.classList.remove('fade-out');
            }, 500);
        }, 5000);
    }

    fecharNotificacao.addEventListener('click', function() {
        notificacao.classList.add('hidden');
    });

    // Chamar a função para exibir a notificação
    // exibirNotificacao('Formulário enviado com sucesso!', true);
});
