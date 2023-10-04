document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector("#prev-btn");
    const nextBtn = document.querySelector("#next-btn");

    let currentIndex = 0;

    // Função para mostrar o slide atual
    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    // Função para avançar para o próximo slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Função para retroceder para o slide anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Navegação automática a cada 5 segundos (ajuste o tempo conforme necessário)
    setInterval(nextSlide, 5000);

    // Adicionar eventos de clique aos botões de navegação
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
});
