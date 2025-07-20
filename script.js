let Naos = ""
function sim() {
  Naos = 1
  const section1 = document.getElementById("Escolher");
  section1.style.display = "flex"
  section1.scrollIntoView({ behavior: "smooth"})
  const section = document.getElementById("BuildsSalvas");
  section.style.display = "block";
  section.scrollIntoView({ behavior: "smooth" });
  
  const Tabela = document.querySelector(".Tabelas")
  const logo = document.getElementById("logo")
  
  Tabela.style.display = "none";
  Tabela.scrollIntoView({ behavior: "smooth" });
  logo.style.display = "none"
  
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

// Criar function onde caso o usuário aperte em um dos 3 selecionados vá para a section de build deles
let Escolhas = ""
function Fox() {
  Escolhas = 1
  if(Escolhas === 1) {
    const sectionFox = document.getElementById("Sla")
    sectionFox.style.display = "block"
    sectionFox.scrollIntoView({ behavior: "smooth"})
  // Escolher
    const section1 = document.getElementById("Escolher");
    section1.style.display = "none"
    //Builds salvas
     const section = document.getElementById("BuildsSalvas");
     section.style.display = "none"
  }
}
let jpzin = ""
function Jpbr() {
  jpzin = 1
  if (jpzin === 1){
    const sectionJp = document.getElementById("Jp")
    sectionJp.style.display = "block"
    sectionJp.scrollIntoView({ behavior: "smooth"})
    const section1 = document.getElementById("Escolher");
    section1.style.display = "none"
    //Builds salvas
     const section = document.getElementById("BuildsSalvas");
     section.style.display = "none" 
  }
}
let ichigos = ""
function Ichigo(){
ichigos = 1
if (ichigos === 1){
          const sectionIchigo = document.getElementById("Ichigo")
    sectionIchigo.style.display = "block"
    sectionIchigo.scrollIntoView({ behavior: "smooth"})
    const section1 = document.getElementById("Escolher");
    section1.style.display = "none"
    //Builds salvas
     const section = document.getElementById("BuildsSalvas");
     section.style.display = "none" 
  }
    sectionIchigo.scrollIntoView({ behavior: "smooth"})
    const section1 = document.getElementById("Escolher");
    section1.style.display = "none"
    //Builds salvas
     const section = document.getElementById("BuildsSalvas");
     section.style.display = "none" 
  }



function Sair() {
  if (Escolhas === 1 || jpzin === 1 || ichigos === 1) { 
    const sectionFox = document.getElementById("Sla")
    sectionFox.style.display = "none"

    const sectionJp = document.getElementById("Jp")
    sectionJp.style.display = "none"

    const sectionIchigo = document.getElementById("Ichigo")
    sectionIchigo.style.display = "none"
 
    // Escolher
const section1 = document.getElementById("Escolher");
    section1.style.display = "flex"
    //Builds salvas
     const section = document.getElementById("BuildsSalvas");
     section.style.display = "flex"
}
} 

