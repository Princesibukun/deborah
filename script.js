function myMenuFunction(){
    var menuBth = document.getElementById("myNavMenu");


if (menuBth.className === "nav-menu"){
    menuBth.className += "responsive";
}else{
    menuBth.className = "nav-menu";
}

}

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark");
});

var typingEffect = new Typed(".typedText",{
    strings: ["Designer", "Coder", "Frontend Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveeal(".featured-name",{ delay:100 });
sr.reveeal(".text-info",{ delay:200 });
sr.reveeal(".text-btn",{ delay:200 });
sr.reveeal(".social_icons",{ delay:200 });
sr.reveeal(".featured-image",{ delay:320 });

sr.reveeal(".project-box",{ interval:200 });

sr.reveeal(".top-header",{});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveeal(".about-info",{ delay:100 });
srLeft.reveeal(".contact-info",{ delay:100 });

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srRight.reveeal(".skill",{ delay:100 });
srRight.reveeal(".skill-box",{ delay:100 });

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;


    sections.forEach((current) => {
    
        const sectionHeight = current.offsetHeight,

        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active");
    }else{
        document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active");
    }
 });
}

window.addEventListener("scroll", scrollActive);



