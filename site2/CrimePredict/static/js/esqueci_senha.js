document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       ELEMENTOS
    ===================================== */

    const usuario =
        document.getElementById("usuario");

    const email =
        document.getElementById("email");

    const novaSenha =
        document.getElementById("novaSenha");

    const confirmarSenha =
        document.getElementById("confirmarSenha");

    const ia =
        document.getElementById("iaAnalise");

    const scannerFill =
        document.getElementById("scannerFill");

    const scannerStatus =
        document.getElementById("scannerStatus");

    const progressFill =
        document.getElementById("progressFill");

    const progressText =
        document.getElementById("progressText");

    const codigoRecuperacao =
        document.getElementById("codigoRecuperacao");

    const resumoUsuario =
        document.getElementById("resumoUsuario");

    const resumoEmail =
        document.getElementById("resumoEmail");

    const resumoCodigo =
        document.getElementById("resumoCodigo");

    const strengthBar =
        document.getElementById("strengthBar");

    const strengthText =
        document.getElementById("strengthText");

    const tentativas =
        document.getElementById("tentativas");

    let totalTentativas = 0;

    let codigoGerado = "";

    /* =====================================
       RESUMO AUTOMÁTICO
    ===================================== */

    usuario.addEventListener("input", () => {

        resumoUsuario.textContent =
            usuario.value || "-";

        atualizarIA();
        atualizarProgresso();

    });

    email.addEventListener("input", () => {

        resumoEmail.textContent =
            email.value || "-";

        atualizarIA();
        atualizarProgresso();

    });

    /* =====================================
       IA
    ===================================== */

    function atualizarIA(){

        let mensagem =
            "Aguardando informações para validação.";

        if(
            usuario.value &&
            email.value
        ){

            mensagem = `
            Identidade parcialmente validada.

            Usuário localizado.

            Sistema pronto para gerar
            código de recuperação.
            `;
        }

        if(
            codigoGerado
        ){

            mensagem = `
            Código emitido com sucesso.

            Prosseguir para redefinição
            de credenciais.
            `;
        }

        ia.textContent = mensagem;
    }

    /* =====================================
       PROGRESSO
    ===================================== */

    function atualizarProgresso(){

        let pontos = 0;

        if(usuario.value)
            pontos++;

        if(email.value)
            pontos++;

        if(codigoGerado)
            pontos++;

        if(novaSenha.value)
            pontos++;

        const percentual =
            (pontos / 4) * 100;

        progressFill.style.width =
            percentual + "%";

        if(percentual <= 25){

            progressText.textContent =
                "Etapa 1 de 4 - Identificação";
        }
        else if(percentual <= 50){

            progressText.textContent =
                "Etapa 2 de 4 - Validação";
        }
        else if(percentual <= 75){

            progressText.textContent =
                "Etapa 3 de 4 - Nova Senha";
        }
        else{

            progressText.textContent =
                "Etapa 4 de 4 - Finalização";
        }
    }

    /* =====================================
       VALIDAR IDENTIDADE
    ===================================== */

    document
        .getElementById("btnValidar")
        .addEventListener("click", () => {

            if(
                !usuario.value ||
                !email.value
            ){

                alert(
                    "Preencha usuário e e-mail."
                );

                return;
            }

            scannerFill.style.width = "0%";

            scannerStatus.textContent =
                "Iniciando análise...";

            let progresso = 0;

            const scanner =
                setInterval(() => {

                    progresso += 5;

                    scannerFill.style.width =
                        progresso + "%";

                    scannerStatus.textContent =
                        `Validando identidade... ${progresso}%`;

                    if(progresso >= 100){

                        clearInterval(scanner);

                        scannerStatus.textContent =
                            "✅ Identidade validada";

                        atualizarIA();

                    }

                }, 80);

        });

    /* =====================================
       GERAR CÓDIGO
    ===================================== */

    document
        .getElementById("btnGerarCodigo")
        .addEventListener("click", () => {

            codigoGerado =
                "CP-REC-" +
                Math.floor(
                    10000 +
                    Math.random() * 90000
                );

            codigoRecuperacao.textContent =
                codigoGerado;

            resumoCodigo.textContent =
                codigoGerado;

            atualizarIA();
            atualizarProgresso();

        });

    /* =====================================
       FORÇA DA SENHA
    ===================================== */

    novaSenha.addEventListener(
        "input",
        () => {

            let pontos = 0;

            const senha =
                novaSenha.value;

            if(senha.length >= 8)
                pontos++;

            if(/[A-Z]/.test(senha))
                pontos++;

            if(/[a-z]/.test(senha))
                pontos++;

            if(/[0-9]/.test(senha))
                pontos++;

            if(/[!@#$%^&*]/.test(senha))
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
            else if(percentual <= 80){

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

            atualizarProgresso();

        });

    /* =====================================
       REDEFINIR SENHA
    ===================================== */

    document
        .getElementById("btnRedefinir")
        .addEventListener("click", () => {

            totalTentativas++;

            tentativas.textContent =
                totalTentativas;

            if(
                !usuario.value ||
                !email.value ||
                !codigoGerado ||
                !novaSenha.value ||
                !confirmarSenha.value
            ){

                alert(
                    "Preencha todos os campos."
                );

                return;
            }

            if(
                novaSenha.value !==
                confirmarSenha.value
            ){

                alert(
                    "As senhas não coincidem."
                );

                return;
            }

            progressFill.style.width =
                "100%";

            progressText.textContent =
                "Recuperação concluída";

            ia.textContent =
                "Credenciais redefinidas com sucesso. Redirecionando para Login...";

            setTimeout(() => {

                alert(
                    "Senha redefinida com sucesso!"
                );

                window.location.href =
                    "/login";

            }, 2000);

        });

    /* =====================================
       VOLTAR
    ===================================== */

    document
        .getElementById("btnVoltar")
        .addEventListener("click", () => {

            window.location.href =
                "/login";

        });

});