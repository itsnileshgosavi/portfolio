const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    
    const navlink = document.querySelectorAll(`a[href="#${sectionId}"]`);
    
    if (entry.isIntersecting) {


      navlink[1].classList.add("active");
     
    } else {
        navlink[1].classList.remove("active");
    }

   
   
  });
}, { threshold: 0.35 });

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

const heroObserver = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    //making bg opaque if hero section is not intersecting
    const header = document.querySelector("header");
    
    if (entry.target.id === "hero") {
      if (entry.isIntersecting) {
        header.classList.add('bg-opacity-0');
        header.classList.remove('dark:bg-[#060709]');
      } else {
        header.classList.remove('bg-opacity-0');
        header.classList.add('dark:bg-[#060709]');
      }
    }
  })
},{ threshold:  0.2})
document.querySelectorAll("section").forEach((section) => {
  heroObserver.observe(section);
});



//dark night functionality
const darkModeToggle = document.getElementById("darkModeToggle");
  const darkModeToggleMb = document.getElementById("darkModeToggleMb");
  const htmlTag = document.getElementById("htmlTag");
document.addEventListener("DOMContentLoaded", function () {
  
  
  darkModeToggle.addEventListener("click", function () {
    htmlTag.classList.toggle("dark");
    if(localStorage.theme =="light"){
      localStorage.theme ="dark"

    }else if(localStorage.theme =="dark"){
      localStorage.theme ="light"
    }
    
  });
  darkModeToggleMb.addEventListener("click", function () {
    htmlTag.classList.toggle("dark");
    if(localStorage.theme =="light"){
      localStorage.setItem("theme", "dark")

    }else if(localStorage.theme =="dark"){
      localStorage.setItem("theme", "light")
    }
  });

// making the system preference as default dark/light mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  darkModeToggle.checked = true;
  
} else {
  document.documentElement.classList.remove("dark");
}
});

