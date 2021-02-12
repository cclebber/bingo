var backgrounds=[
    'background-image: linear-gradient(to bottom right, #FDEB71, #F8D800)',
    'background-image: linear-gradient(to bottom right, #ABDCFF, #0396FF)',
    'background-image: linear-gradient(to bottom right, #FEB692, #EA5455)',
    'background-image: linear-gradient(to bottom right, #FFF6B7, #F6416C)',
    'background-image: linear-gradient(to bottom right, #81FBB8, #28C76F)',
    'background-image: linear-gradient(to bottom right, #E2B0FF, #9F44D3)',
]

function reset(){
    numerosTotais=[...numeros];
    numerosSorteados=[];
    for(i=0;i<75;i++)numerosSorteados[i]=false; 
}

reset();

function limpar(){
    reset();
    localStorage.removeItem('numeros');
    localStorage.removeItem('sorteio');
    document.getElementById('choice').innerHTML="";
    document.getElementById('choice-label').innerHTML="";
    montaTelaEscolhas();
}

if(!!localStorage.getItem('numeros')){
    numerosTotais=JSON.parse(localStorage.getItem('numeros'));
    numerosSorteados=JSON.parse(localStorage.getItem('sorteio'));
}


function escolheNumero(){
    var random = Math.floor(Math.random() * numerosTotais.length)
    var numeroEscolhido=numerosTotais[random];
    numerosTotais.splice(random, 1);
    numerosSorteados[numeroEscolhido.value-1]=true;
    document.getElementById('choice').innerHTML=numeroEscolhido.value;
    document.getElementById('choice-label').innerHTML=numeroEscolhido.label;
    montaTelaEscolhas();
    localStorage.setItem('numeros', JSON.stringify(numerosTotais));
    localStorage.setItem('sorteio', JSON.stringify(numerosSorteados));
}



function montaTelaEscolhas()
{
    var tela = document.getElementById('escolhas');
    $('.box').remove();
    numerosSorteados.forEach((numero, index) => {
        var value="";
        if(numero)value=index+1;
        var background=backgrounds[(index%6)];
        var div=document.createElement('div');
        div.className='box';
        div.style=background;
        div.innerHTML=value;
        tela.append(div);
    });
}

function vertabela(){
    $('#choice-container').hide();
    $('#tabela-container').show();
}

function verchoice(){
    $('#choice-container').show();
    $('#tabela-container').hide();
}


window.onload=()=>{

    $('#tabela-container').hide();
    montaTelaEscolhas();

}


