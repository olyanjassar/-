window.onload = function () {

    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    console.log("Slides found:", slides.length);
    console.log("Next button:", nextBtn);
    console.log("Prev button:", prevBtn);

    let index = 0;

    function showSlide(i) {

        slides.forEach(s => s.classList.remove("active"));

        slides[i].classList.add("active");
    }

    // تأكد أنه في صورة تظهر أولاً
    showSlide(index);

    // زر التالي
    nextBtn.onclick = function () {

        index++;

        if (index >= slides.length) {
            index = 0;
        }

        showSlide(index);
    };

    // زر السابق
    prevBtn.onclick = function () {

        index--;

        if (index < 0) {
            index = slides.length - 1;
        }

        showSlide(index);
    };

    // تلقائي
    setInterval(function () {

        index++;

        if (index >= slides.length) {
            index = 0;
        }

        showSlide(index);

    }, 4000);

};