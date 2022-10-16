        // conteudo header
let headder = document.getElementById("headder");
let conteudoheadder = ` 
<header>
    <div class="logoTopo">
         <img src="css/imagens/LOGOff.png" >
    </div>
  <div class="menuLateral">
    <img onclick="menuL()" src="css/imagens/menuL.PNG">
    <div class="linksTopo">
       <ul>
        <li><a id="active" href="index.html"> Início </a></li>&nbsp;
        <li><a href="entretenimento.html"> Entretenimento </a></li>
        <li><a href="sobre.html"> Sobre  </a></li>&nbsp; &nbsp;
      </ul>
    </div>
 </div>
</header> `;
headder.innerHTML= conteudoheadder;

        // fim conteudo header
let foooter = document.getElementById("foooter");
let conteudofooter = ` <footer>
<div class="formularioFooter">

    <p id="deixeEmail"> Deixe seu email para estar ligado nas novidades dos novos serviços !!</p>
    <p id="avisoFormulario"></p>
    <input id="espacoEmail" type="email" placeholder="Clique aqui para inserir seu Email" required>
    <br>
    <input onclick="EnviarFormulario()" id="enviarFormulario" type="submit" value="Enviar">
</div>
<p> © 2022 </p>
</footer>`;
foooter.innerHTML=conteudofooter;
        // fim conteudo footer

        
        function EnviarFormulario() {

                let pAvisoFormulario = document.getElementById("avisoFormulario");
                pAvisoFormulario.innerHTML = "Formulario indisponível";
                pAvisoFormulario.style.color='red';

        }


        var ul = document.querySelector(".linksTopo ul");

        function menuL() {
                if (ul.classList.contains('open')){
                        ul.classList.remove('open');
                }else{
                        ul.classList.add('open');
                }
 }

let desenvolvimento = document.getElementById("desenvolvimento");
let conteudoDesenvolvimento = `<div class="desenvolvimento">
<div class="loading">

</div>
<p id="textoDesenvolvimento"> Página em desenvolvimento !! </p>
</div>`;

desenvolvimento.innerHTML= conteudoDesenvolvimento;
