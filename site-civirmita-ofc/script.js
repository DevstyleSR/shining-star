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