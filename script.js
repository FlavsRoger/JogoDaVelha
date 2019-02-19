let jogo=[];
let tabuleiro=[];
let turnoJogador=0; 
let verifica;
let jogando=true;
let nivel=1;
let turnoCpu=1;  
let quemInicia=0;  

function verificarVitoria(){
    let resultado = "";
 
    //Linha
    for(let l=0;l<3;l++){
     if(jogo[l][0] == jogo[l][1] && jogo[l][1] == jogo[l][2]){
        return jogo[l][0];
     }
    }
 
    //Coluna
    for(let l=0;l<3;l++){
     if(jogo[0][l] == jogo[1][l] && jogo[1][l] == jogo[2][l]){
        return jogo[0][l];
     }
    }
 
    //Diagonais
    if(jogo[0][0] == jogo[1][1] && jogo[1][1] == jogo[2][2]){
        return jogo[0][0];
    }
    if(jogo[0][2] == jogo[1][1] && jogo[1][1] == jogo[2][0]){
        return jogo[0][2];
    }
 
    



function jogadaDaCpu(){  
    if(jogando){
        let l,c;
        if(nivel==1){
            do {
                l=Math.round(Math.random()*2);
                c=Math.round(Math.random()*2);
            }while(jogo[l][c]!="");
            jogo[l][c]="O";
        }else if(nivel==2){
            //NIVEL 2
        }
        verifica=verificarVitoria();
        if(verifica!=""){
            alert(verifica+" venceu");
            jogando=false;
        }
        atualizarTabuleiro();
        quemJoga=0;
        }
    }

function jogar(p){
    if((jogando)&&(turnoJogador==0)){
        switch(p){
            case 1:
                if(jogo[0][0]==""){
                    jogo[0][0]="X";
                    turnoJogador=1;
                }
            break;
            case 2:
                if(jogo[0][1]==""){
                    jogo[0][1]="X";
                    turnoJogador=1;
                }
            break;
            case 3:
                if(jogo[0][2]==""){
                    jogo[0][2]="X";
                    turnoJogador=1;
                }
            break;
            case 4:
                if(jogo[1][0]==""){
                    jogo[1][0]="X";
                    turnoJogador=1;
                }
            break;
            case 5:
                if(jogo[1][1]==""){
                    jogo[1][1]="X";
                    turnoJogador=1;
                }
            break;
            case 6:
                if(jogo[1][2]==""){
                    jogo[1][2]="X";
                    turnoJogador=1;
                }
            break;
            case 7:
                if(jogo[2][0]==""){
                    jogo[2][0]="X";
                    turnJogador=1;
                }
            break;
            case 8:
                if(jogo[2][1]==""){
                    jogo[2][1]="X";
                    turnoJogador=1;
                }
            break;
            default: //case 9
                if(jogo[2][2]==""){
                    jogo[2][2]="X";
                    turnoJogador=1;
                }
            break;
        
        }
        if(quemJoga==1){
        atualizarTabuleiro();
        verifica=verificarVitoria();
        if(verifica!=""){
            alert(verifica+" venceu");
            jogando=false;
        }
        jogadaDaCpu(); 
        }
    }
}

function atualizarTabuleiro(){
    for(let l=0;l<3;l++){  // letra 'l' = linha
        for(let c=0;c<3;c++){ // letra 'c' = coluna
            if(jogo[l][c]=="X"){
                tabuleiro[l][c].innerHTML="X";
                tabuleiro[l][c].style.cursor="default";
            }else if(jogo[l][c]=="O"){
                tabuleiro[l][c].innerHTML="O";
                tabuleiro[l][c].style.cursor="default";
            }else{
                tabuleiro[l][c].innerHTML="";
                tabuleiro[l][c].style.cursor="pointer";                       
            }
        }
    }
}


function iniciar(){
    jogando=true;
    turnoCpu=1;
    jogo=[
            ["","",""],
            ["","",""],
            ["","",""]
    ];
    tabuleiro=[
        [document.getElementById("a1"),document.getElementById("a2"),document.getElementById("a3")],
        [document.getElementById("b1"),document.getElementById("b2"),document.getElementById("b3")],
        [document.getElementById("c1"),document.getElementById("c2"),document.getElementById("c3")]
    ];
    atualizarTabuleiro();
        if(quemInicia==1){
            quemInicia=0;
            quemJoga=quemInicia;
            document.getElementById("dvQuemComeca").innerHTML="Quem começa: Jogador";
            
        }else{
            quemInicia=1;
            quemJoga=quemInicia;
            document.getElementById("dvQuemComeca").innerHTML="Quem começa: CPU";
            jogadaDaCpu(); 
            
        }
    }

    window.addEventListener("load",iniciar());
    