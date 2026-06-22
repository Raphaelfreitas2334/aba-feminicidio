document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       GERAR ID
    ===================================== */

    const id = "CP-USER-" +
        Math.floor(
            1000 + Math.random() * 9000
        );

    document.getElementById(
        "generatedId"
    ).textContent = id;

    /* =====================================
       ELEMENTOS
    ===================================== */

    const nome =
        document.getElementById("nome");

    const email =
        document.getElementById("email");

    const senha =
        document.getElementById("senha");

    const avatar =
        document.getElementById(
            "avatarPreview"
        );

    const avatarNome =
        document.getElementById(
            "avatarNome"
        );

    const resumoNome =
        document.getElementById(
            "resumoNome"
        );

    const resumoEmail =
        document.getElementById(
            "resumoEmail"
        );

    const resumoPerfil =
        document.getElementById(
            "resumoPerfil"
        );

    const resumoRegiao =
        document.getElementById(
            "resumoRegiao"
        );

    const ia =
        document.getElementById(
            "iaAnalise"
        );

    const progressFill =
        document.getElementById(
            "progressFill"
        );

    const progressText =
        document.getElementById(
            "progressText"
        );

    /* =====================================
       AVATAR AUTOMÁTICO
    ===================================== */

    nome.addEventListener(
        "input",
        () => {

            const valor =
                nome.value.trim();

            avatarNome.textContent =
                valor || "Novo Usuário";

            resumoNome.textContent =
                valor || "-";

            const partes =
                valor.split(" ");

            let iniciais = "";

            if(partes[0]){

                iniciais +=
                    partes[0][0];
            }

            if(partes.length > 1){

                iniciais +=
                    partes[
                        partes.length - 1
                    ][0];
            }

            avatar.textContent =
                iniciais.toUpperCase()
                || "CP";

            atualizarIA();

            atualizarProgresso();
        }
    );

    /* =====================================
       EMAIL
    ===================================== */

    email.addEventListener(
        "input",
        () => {

            resumoEmail.textContent =
                email.value || "-";

            atualizarIA();

            atualizarProgresso();
        }
    );

    /* =====================================
       PERFIL
    ===================================== */

    let perfilSelecionado = "";

    document
    .querySelectorAll(
        ".perfil-card"
    )
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                document
                .querySelectorAll(
                    ".perfil-card"
                )
                .forEach(c =>
                    c.classList.remove(
                        "ativo"
                    )
                );

                card.classList.add(
                    "ativo"
                );

                perfilSelecionado =
                    card.dataset.role;

                resumoPerfil.textContent =
                    perfilSelecionado;

                atualizarIA();

                atualizarProgresso();
            }
        );

    });

    /* =====================================
       REGIÃO
    ===================================== */

    let regiaoSelecionada = "";

    document
    .querySelectorAll(
        ".regiao"
    )
    .forEach(botao => {

        botao.addEventListener(
            "click",
            () => {

                document
                .querySelectorAll(
                    ".regiao"
                )
                .forEach(r =>
                    r.classList.remove(
                        "ativa"
                    )
                );

                botao.classList.add(
                    "ativa"
                );

                regiaoSelecionada =
                    botao.textContent;

                resumoRegiao.textContent =
                    regiaoSelecionada;

                atualizarIA();

                atualizarProgresso();
            }
        );

    });

    /* =====================================
       FORÇA DA SENHA
    ===================================== */

    const strengthBar =
        document.getElementById(
            "strengthBar"
        );

    const strengthText =
        document.getElementById(
            "strengthText"
        );

    senha.addEventListener(
        "input",
        () => {

            const valor =
                senha.value;

            let pontos = 0;

            if(valor.length >= 8)
                pontos++;

            if(/[A-Z]/.test(valor))
                pontos++;

            if(/[a-z]/.test(valor))
                pontos++;

            if(/[0-9]/.test(valor))
                pontos++;

            if(
                /[!@#$%^&*]/.test(valor)
            )
                pontos++;

            const percentual =
                pontos * 20;

            strengthBar.style.width =
                percentual + "%";

            if(percentual <= 40){

                strengthBar.style.background =
                    "#ef4444";

                strengthText.textContent =
                    "Senha Fraca";
            }
            else if(
                percentual <= 80
            ){

                strengthBar.style.background =
                    "#facc15";

                strengthText.textContent =
                    "Senha Média";
            }
            else{

                strengthBar.style.background =
                    "#22c55e";

                strengthText.textContent =
                    "Senha Forte";
            }

            atualizarIA();

            atualizarProgresso();
        }
    );

    /* =====================================
       IA
    ===================================== */

    function atualizarIA(){

        let mensagem =
            "Analisando cadastro...";

        if(
            perfilSelecionado &&
            regiaoSelecionada
        ){

            mensagem = `
            Perfil selecionado:
            ${perfilSelecionado}.
            Região:
            ${regiaoSelecionada}.
            Cadastro compatível
            com acesso corporativo.
            `;
        }

        if(
            senha.value.length > 0 &&
            senha.value.length < 8
        ){

            mensagem =
                "Recomenda-se uma senha mais forte.";
        }

        ia.textContent =
            mensagem;
    }

    /* =====================================
       PROGRESSO
    ===================================== */

    function atualizarProgresso(){

        let pontos = 0;

        if(nome.value)
            pontos++;

        if(email.value)
            pontos++;

        if(senha.value)
            pontos++;

        if(perfilSelecionado)
            pontos++;

        if(regiaoSelecionada)
            pontos++;

        const percentual =
            (pontos / 5) * 100;

        progressFill.style.width =
            percentual + "%";

        progressText.textContent =
            `${Math.floor(percentual)}% concluído`;
    }

    /* =====================================
       BOTÃO CADASTRAR
    ===================================== */

    document
    .getElementById(
        "btnCadastrar"
    )
    .addEventListener(
        "click",
        () => {

            if(
                !nome.value ||
                !email.value ||
                !senha.value ||
                !perfilSelecionado ||
                !regiaoSelecionada
            ){

                alert(
                    "Preencha todos os campos."
                );

                return;
            }

            progressFill.style.width =
                "100%";

            progressText.textContent =
                "Cadastro concluído";

            ia.textContent =
                "Usuário validado e pronto para inclusão no sistema.";

            setTimeout(() => {

                alert(
                    "Usuário cadastrado com sucesso!"
                );

            }, 500);

        }
    );

});