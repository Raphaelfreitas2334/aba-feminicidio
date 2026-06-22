document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       BOOT SCREEN
    ===================================== */

    setTimeout(() => {

        const boot =
            document.getElementById(
                "bootScreen"
            );

        boot.style.opacity = "0";

        setTimeout(() => {

            boot.style.display = "none";

        }, 1000);

    }, 3500);

    /* =====================================
       CONTADOR
    ===================================== */

    const contador =
        document.getElementById(
            "crimeCounter"
        );

    let total = 7000;

    setInterval(() => {

        total +=
            Math.floor(
                Math.random() * 3
            );

        contador.textContent =
            total.toLocaleString(
                "pt-BR"
            );

    }, 2500);

    /* =====================================
       IA MENSAGENS
    ===================================== */

    const mensagens = [

        "Monitorando ocorrências em tempo real...",

        "Analisando padrões criminais...",

        "Processando dados de Diadema...",

        "Atualizando modelo preditivo...",

        "Sistema pronto para autenticação.",

        "Monitorando bairros críticos...",

        "Avaliando tendências futuras..."
    ];

    const ia =
        document.getElementById(
            "iaMessage"
        );

    let indice = 0;

    function escreverTexto(texto){

        ia.textContent = "";

        let pos = 0;

        const efeito =
            setInterval(() => {

                ia.textContent +=
                    texto.charAt(pos);

                pos++;

                if(pos >= texto.length){

                    clearInterval(
                        efeito
                    );
                }

            }, 40);

    }

    escreverTexto(
        mensagens[0]
    );

    setInterval(() => {

        indice++;

        if(
            indice >=
            mensagens.length
        ){
            indice = 0;
        }

        escreverTexto(
            mensagens[indice]
        );

    }, 5000);

    /* =====================================
       MOSTRAR SENHA
    ===================================== */

    const senha =
        document.getElementById(
            "senha"
        );

    const toggle =
        document.getElementById(
            "togglePassword"
        );

    toggle.addEventListener(
        "click",
        () => {

            if(
                senha.type ===
                "password"
            ){

                senha.type = "text";

                toggle.innerHTML =
                    '<i class="fa-solid fa-eye-slash"></i>';

            }
            else{

                senha.type =
                    "password";

                toggle.innerHTML =
                    '<i class="fa-solid fa-eye"></i>';
            }

        }
    );

    /* =====================================
       LOGIN
    ===================================== */

    const form =
        document.getElementById(
            "loginForm"
        );

    const barra =
        document.getElementById(
            "progressBar"
        );

    const status =
        document.getElementById(
            "authStatus"
        );

    form.addEventListener(
        "submit",
        e => {

            e.preventDefault();

            const usuario =
                document
                .getElementById(
                    "usuario"
                )
                .value;

            const senhaDigitada =
                document
                .getElementById(
                    "senha"
                )
                .value;

            barra.style.width = "0%";

            status.innerHTML =
                "Validando credenciais...";

            let progresso = 0;

            const loading =
                setInterval(() => {

                    progresso += 10;

                    barra.style.width =
                        progresso + "%";

                    if(
                        progresso >= 100
                    ){

                        clearInterval(
                            loading
                        );

                        if(
                            usuario ===
                            "admin"
                            &&
                            senhaDigitada ===
                            "123456"
                        ){

                            status.innerHTML =
                                "✅ Acesso autorizado";

                            status.style.color =
                                "#00ff88";

                            setTimeout(() => {

                                window.location.href =
                                    "/index";

                            }, 1500);

                        }
                        else{

                            status.innerHTML =
                                "❌ Credenciais inválidas";

                            status.style.color =
                                "#ff4d4d";

                            barra.style.width =
                                "0%";
                        }
                    }

                }, 120);

        }
    );

    /* =====================================
       CARD 3D
    ===================================== */

    const card =
        document.querySelector(
            ".login-card"
        );

    document.addEventListener(
        "mousemove",
        e => {

            const x =
                window.innerWidth / 2;

            const y =
                window.innerHeight / 2;

            const rotateY =
                (e.clientX - x)
                / 40;

            const rotateX =
                (y - e.clientY)
                / 40;

            card.style.transform =
                `
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                `;
        }
    );

    document.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "rotateX(0deg) rotateY(0deg)";
        }
    );

    /* =====================================
       PARTÍCULAS
    ===================================== */

    const container =
        document.getElementById(
            "particles"
        );

    for(let i = 0; i < 60; i++){

        const p =
            document.createElement(
                "div"
            );

        p.style.position =
            "absolute";

        p.style.width = "3px";

        p.style.height = "3px";

        p.style.borderRadius =
            "50%";

        p.style.background =
            "rgba(0,229,255,.7)";

        p.style.left =
            Math.random() * 100 +
            "%";

        p.style.top =
            Math.random() * 100 +
            "%";

        p.style.opacity =
            Math.random();

        p.style.animation =
            `flutuar ${
                4 + Math.random() * 8
            }s linear infinite`;

        container.appendChild(p);
    }

    const style =
        document.createElement(
            "style"
        );

    style.innerHTML = `

        @keyframes flutuar{

            from{

                transform:
                translateY(0px);
            }

            to{

                transform:
                translateY(-100vh);
            }

        }

    `;

    document.head.appendChild(
        style
    );

});