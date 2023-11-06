setInterval(()=>{
    document.getElementById("clock").textContent = new Date().toLocaleTimeString("br");
    
    const dataatual = Date.now();
    const today = new Date(dataatual);
    document.getElementById("Data").textContent=today.toLocaleDateString();
    document.getElementById("ano").textContent=today.getFullYear();
}
)

function alertar(){
    alert("Desculpe, está em manutenção no momento.")
}



var a = {
    simples: 10,
    intermediario: 15,
    sofisticado: 20
}

function realizarorcamento(){

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
    var tpv = document.querySelector("input[name='radio1']:checked").value
    var tp = a[`${tpv}`]
    var area = document.querySelector(".area").value*tp
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
    
