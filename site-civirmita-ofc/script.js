setInterval(()=>{
    document.getElementById("clock").textContent = new Date().toLocaleTimeString("br");
    
    const dataatual = Date.now();
    const today = new Date(dataatual);
    document.getElementById("Data").textContent=today.toLocaleDateString();
    document.getElementById("ano").textContent=today.getFullYear();

   
}
)


function diretorias(){
    location.href="dir_admfinanceiro.html"

    var dir ={
        presidencia: "",
        admfin: ""
    }
    dir.push({admfin:"peidei"})
    console.log(dir)

}





function orcamento1(){

    document.querySelector(".conteudoani0").style.display="none"
    document.querySelector(".orcamento_box").classList.add("imgani")

    setTimeout(()=>{
        document.querySelector(".orcamento_box").classList.remove("imgani")
        document.querySelector(".orcamento_box").classList.add("imgani2")
    },1000)

    setTimeout(()=>{
        document.querySelector(".conteudoani").style.display="block"
        document.querySelector(".orcamento_box").classList.remove("imgani2")
    },2000)
} //fecha a função orçamento1 

    var valores_orçamento1 = {
        simples: 10,
        intermediario: 15,
        sofisticado: 20
    }
    

function realizarorcamento1(){

    document.querySelector(".conteudoani").style.display="none"
    document.querySelector(".orcamento_box").classList.add("imgani")

    setTimeout(()=>{
        document.querySelector(".orcamento_box").classList.remove("imgani")
        document.querySelector(".orcamento_box").classList.add("imgani2")
    },1000)

    setTimeout(()=>{
        document.querySelector(".conteudoani2").style.display="block"
        document.querySelector(".orcamento_box").classList.remove("imgani2")
    },2000)



    
    document.querySelector(".area_do_projeto_span").textContent = "  "+ document.querySelector(".area").value +' metros quadrados'
    document.querySelector(".tipo_de_projeto_span").textContent = "  "+ document.querySelector("input[name='radio']:checked").value
    var tipo_de_projeto = document.querySelector("input[name='radio']:checked").value
    var area = document.querySelector(".area").value
    if (tipo_de_projeto=="arquitetonico"){
        if (area >= 200 ){
            var orcamentovalor = area*15.50
            
        }else{
            var orcamentovalor = area*12
            
        }
    }else if( tipo_de_projeto =="eletrico"){
        if (area >= 500 ){
            var orcamentovalor = area*4.70
            
        }else{
            var orcamentovalor = area*5.80
            
        }
    }else if( tipo_de_projeto == "estrutural"){
        if (area >= 500 ){
            var orcamentovalor = area*7.10
            
        }else{
            var orcamentovalor = area*8.30
            
        }
    }else if(tipo_de_projeto=="esgoto"){
        if (area >= 500 ){
            var orcamentovalor = area*2
            
        }else{
            var orcamentovalor = area*2.50
            
        }
    }
    

    var investimento = orcamentovalor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.querySelector(".Investimento_span").textContent = "  "+ investimento + " reais"

}


function realizarorcamento2(){

    document.querySelector(".conteudoani").style.display="none"
    document.querySelector(".orcamento_box").classList.add("imgani")

    setTimeout(()=>{
        document.querySelector(".orcamento_box").classList.remove("imgani")
        document.querySelector(".orcamento_box").classList.add("imgani2")
    },1000)

    setTimeout(()=>{
        document.querySelector(".conteudoani2").style.display="block"
        document.querySelector(".orcamento_box").classList.remove("imgani2")
    },2000)


    
    document.querySelector(".area_do_projeto_span").textContent = "  "+ document.querySelector(".area").value +' metros quadrados'
    document.querySelector(".tipo_de_projeto_span").textContent = "  "+ document.querySelector("input[name='radio']:checked").value
    document.querySelector(".modelo_de_projeto_span").textContent = "  "+ document.querySelector("input[name='radio1']:checked").value
    var tipo_projeto = document.querySelector("input[name='radio1']:checked").value
    var valor_do_tipo_projeto = valores_orçamento1[`${tipo_projeto}`]
    var area = document.querySelector(".area").value*valor_do_tipo_projeto
    var investimento = area.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.querySelector(".Investimento_span").textContent = "  "+ investimento + " reais"

}










function novoorcamento(){
    
    document.querySelector(".conteudoani2").style.display="none"
    document.querySelector(".orcamento_box").classList.add("imgani")

    setTimeout(()=>{
        document.querySelector(".orcamento_box").classList.remove("imgani")
        document.querySelector(".orcamento_box").classList.add("imgani2")
    },1000)

    setTimeout(()=>{
        document.querySelector(".conteudoani").style.display="block"
        document.querySelector(".orcamento_box").classList.remove("imgani2")
    },2000)

}
function orcamento(){
    location.href="orçamento.html"
}
function cadastro(){
    location.href="cadastro.html"
}









 
