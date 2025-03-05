// Dados dos profissionais
const profissionais = {
    pedreiros: [
        { imagem: "imgs/pedreiros/pedreiroTeste.jpg", nome: "Carlos Oliveira", telefone: "11 97777-7777" },
        { imagem: "imgs/pedreiros/pedreiroTeste.jpg", nome: "Carlos Oliveira", telefone: "11 97777-7777" },
        { imagem: "imgs/pedreiros/pedreiroTeste.jpg", nome: "Lucas Silva", telefone: "11 99999-9999" }
    ],
    eletricistas: [
        { imagem: "imgs/pedreiros/pedreiroTeste.jpg", nome: "Mario Luigi", telefone: "11 98888-8888" },
        { imagem: "imgs/pedreiros/pedreiroTeste.jpg", nome: "Carlos Oliveira", telefone: "11 97777-7777" },
        { imagem: "imgs/pedreiros/pedreiroTeste.jpg", nome: "Pedro Silva", telefone: "11 96666-6666" }
    ],
    encanadores: [
        { imagem: "imgs/pedreiros/pedreiroTeste.jpg", nome: "José Almeida", telefone: "11 95555-5555" },
        { imagem: "imgs/pedreiros/pedreiroTeste.jpg", nome: "Carlos Oliveira", telefone: "11 97777-7777" },
        { imagem: "imgs/pedreiros/pedreiroTeste.jpg", nome: "Lúcio Castro", telefone: "11 94444-4444" }
    ]
};

// Alternar abas
function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`)?.classList.add("active");

    renderCards(tabId);
}

// Renderizar os cards
function renderCards(tabId) {
    const container = document.getElementById(`cards-${tabId}`);
    container.innerHTML = "";

    if (profissionais[tabId]) {
        profissionais[tabId].forEach(p => {
            container.innerHTML += `
                <div class="card">
                    <img src="${p.imagem}" alt="${p.nome}">
                    <h2>${p.nome}</h2>
                    <p>${p.telefone}</p>
                    <a href="https://wa.me/55${p.telefone.replace(/\D/g, '')}" class="whatsapp-button">WhatsApp</a>
                </div>
            `;
        });
    }
}

// Carregar a aba inicial
document.addEventListener("DOMContentLoaded", () => showTab('pedreiros'));
