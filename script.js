let Naos = ""

function sim() {
     Naos = 1
    const section = document.getElementById("BuildsSalvas");
    section.style.display = "block";
  section.scrollIntoView({ behavior: "smooth" });

  const Tabela = document.querySelector("Tabelas")
  const logo = document.getElementById("logo")
  const botao = document.querySelector("botoes")

   Tabela.style.display = "none";
 
}

function nao() {
    if (Naos === 1){
        const section = document.getElementById("BuildsSalvas");
    section.style.display = "none";
  section.scrollIntoView({ behavior: "smooth" }); 
    } else if (Naos === "") {
     alert ("Por que você apertou não?")
    }
}
