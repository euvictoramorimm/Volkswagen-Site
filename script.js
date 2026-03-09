// Array de objetos simulando o banco de dados de carros
const carros = [
    {
        modelo: "Volkswagen Polo Highline",
        ano: 2026,
        preco: "R$ 118.990,00",
        // Usando links de imagens de alta qualidade procurados
        imagem: "image_1.png" 
    },
    {
        modelo: "Volkswagen Nivus Highline",
        ano: 2026,
        preco: "R$ 149.990,00",
        imagem: "image_2.png"
    },
    {
        modelo: "Volkswagen Taos Highline",
        ano: 2026,
        preco: "R$ 212.990,00",
        imagem: "image_3.png"
    }
];

const carGrid = document.getElementById('car-grid');
const searchInput = document.getElementById('searchInput');

// Função para renderizar os cards na vitrine
function renderizarVitrine(listaCarros) {
    // Limpa o grid antes de renderizar
    carGrid.innerHTML = '';
    
    if (listaCarros.length === 0) {
        carGrid.innerHTML = '<p class="mensagem-vazia">Nenhum veículo encontrado com esse nome.</p>';
        return;
    }
    
    // Mapeia o array e cria o HTML para cada carro
    listaCarros.forEach(carro => {
        const card = document.createElement('div');
        card.className = 'car-card';
        
        card.innerHTML = `
            <img src="${carro.imagem}" alt="${carro.modelo}" onerror="this.onerror=null; this.src='https://via.placeholder.com/400x220?text=Imagem+N%C3%A3o+Dispon%C3%ADvel';">
            <div class="car-info">
                <h3>${carro.modelo}</h3>
                <p><strong>Ano:</strong> ${carro.ano}</p>
                <p class="car-price">${carro.preco}</p>
                <a href="#contato" class="btn-cta">Tenho Interesse</a>
            </div>
        `;
        
        // Injeta o card no grid
        carGrid.appendChild(card);
    });
}

// Event listener para a barra de busca
searchInput.addEventListener('input', (event) => {
    const termoBusca = event.target.value.toLowerCase(); // Converte busca para minúsculo
    
    // Filtra os carros que contêm o termo de busca no modelo
    const carrosFiltrados = carros.filter(carro => 
        carro.modelo.toLowerCase().includes(termoBusca)
    );
    
    // Renderiza apenas os carros filtrados
    renderizarVitrine(carrosFiltrados);
});

// Renderização inicial ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderizarVitrine(carros);
});