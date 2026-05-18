// تأثير ظهور الزر عند تحميل الصفحة

window.addEventListener("load", () => {

    const btn = document.querySelector(".btn");

    btn.style.opacity = "0";

    setTimeout(() => {
        btn.style.transition = "1s";
        btn.style.opacity = "1";
    }, 1000);

});
// أزرار اقرأ المزيد

const buttons = document.querySelectorAll(".info-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const infoBox =
            button.nextElementSibling;

        infoBox.classList.toggle("active");

    });

});

// العدادات الرقمية

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 30);

        } else {

            counter.innerText = target;
        }

    };

    updateCounter();

});

// سلايدر العمارة الإسلامية

const slides =
document.querySelectorAll(".slide");

const nextBtn =
document.querySelector(".next");

const prevBtn =
document.querySelector(".prev");

let currentSlide = 0;

/* عرض الشريحة */

function showSlide(index){

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

/* التالي */

nextBtn.addEventListener("click", () => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    showSlide(currentSlide);

});

/* السابق */

prevBtn.addEventListener("click", () => {

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

});

/* تشغيل تلقائي */

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 5000);

// قسم الاختبارات التفاعلية

const quizData = [

    {
        question: "من هو مؤسس علم الجبر؟",

        answers: [
            "ابن سينا",
            "الخوارزمي",
            "الرازي",
            "ابن الهيثم"
        ],

        correct: "الخوارزمي"
    },

    {
        question: "من هو رائد علم البصريات؟",

        answers: [
            "ابن الهيثم",
            "الخوارزمي",
            "الرازي",
            "جابر بن حيان"
        ],

        correct: "ابن الهيثم"
    },

    {
        question: "في أي مدينة بدأت الحضارة الإسلامية؟",

        answers: [
            "بغداد",
            "قرطبة",
            "مكة المكرمة",
            "دمشق"
        ],

        correct: "مكة المكرمة"
    }

];

let currentQuestion = 0;
let score = 0;

const questionEl =
document.getElementById("question");

const answerButtons =
document.querySelectorAll(".answer-btn");

const scoreEl =
document.getElementById("score");

const resultMessage =
document.getElementById("result-message");

const nextBtn =
document.getElementById("next-question");

/* تحميل السؤال */

function loadQuestion(){

    const currentQuiz =
    quizData[currentQuestion];

    questionEl.textContent =
    currentQuiz.question;

    answerButtons.forEach((button,index)=>{

        button.textContent =
        currentQuiz.answers[index];

        button.style.background =
        "#111827";

        button.style.color = "white";

    });

}

loadQuestion();

/* اختيار الإجابة */

answerButtons.forEach(button=>{

    button.addEventListener("click", ()=>{

        const currentQuiz =
        quizData[currentQuestion];

        if(button.textContent === currentQuiz.correct){

            button.style.background =
            "green";

            score++;

            scoreEl.textContent = score;

            resultMessage.textContent =
            "إجابة صحيحة ✅";

        } else {

            button.style.background =
            "red";

            resultMessage.textContent =
            "إجابة خاطئة ❌";

        }

    });

});

/* السؤال التالي */

nextBtn.addEventListener("click", ()=>{

    currentQuestion++;

    resultMessage.textContent = "";

    if(currentQuestion < quizData.length){

        loadQuestion();

    } else {

        questionEl.textContent =
        "انتهى الاختبار 🎉";

        document.querySelector(".answers")
        .style.display = "none";

        nextBtn.style.display = "none";

        resultMessage.textContent =
        `لقد حصلت على ${score} من ${quizData.length}`;

    }

});

// نموذج التواصل

const form =
document.getElementById("contactForm");

const formMessage =
document.getElementById("form-message");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const message =
    document.getElementById("message").value;

    if(name && email && message){

        formMessage.textContent =
        "تم إرسال الرسالة بنجاح ✅";

        formMessage.style.color = "lightgreen";

        form.reset();

    } else {

        formMessage.textContent =
        "يرجى تعبئة جميع الحقول ❌";

        formMessage.style.color = "red";

    }

});


// بيانات العلماء

const scientists = {

    ibnSina: {
        title: "ابن سينا",
        text: "طبيب وفيلسوف مسلم، يُعتبر من أعظم علماء الطب في التاريخ."
    },

    khwarizmi: {
        title: "الخوارزمي",
        text: "مؤسس علم الجبر ومطور مفهوم الخوارزميات."
    },

    ibnHaytham: {
        title: "ابن الهيثم",
        text: "رائد علم البصريات ومؤسس المنهج العلمي التجريبي."
    },

    razi: {
        title: "الرازي",
        text: "طبيب وكيميائي مشهور وله إسهامات كبيرة في الطب."
    }

};

// فتح النافذة

function showScientist(name){

    document.getElementById("scientistTitle").innerText =
    scientists[name].title;

    document.getElementById("scientistText").innerText =
    scientists[name].text;

    document.getElementById("scientistModal").style.display = "flex";
}

// إغلاق النافذة

function closeScientist(){
    document.getElementById("scientistModal").style.display = "none";
}

// إغلاق عند الضغط خارج النافذة
window.onclick = function(e){
    const modal = document.getElementById("scientistModal");
    if(e.target === modal){
        modal.style.display = "none";
    }
}






