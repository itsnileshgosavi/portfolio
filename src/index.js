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
const localStorageTheme = localStorage.theme;

document.addEventListener("DOMContentLoaded", function () {
  
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

darkModeToggle.addEventListener("click", function () {
  htmlTag.classList.toggle("dark");
  if(localStorageTheme){
    if(localStorageTheme==="dark"){
      localStorage.theme="light"
    }else{
      localStorage.theme="dark"
    }
  }else{
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
      localStorage.theme="light"
    }else{
      localStorage.theme="dark"
    }
  }
  
});
darkModeToggleMb.addEventListener("click", function () {
  htmlTag.classList.toggle("dark");
  if(localStorageTheme){
    if(localStorageTheme==="dark"){
      localStorage.theme="light"
    }else{
      localStorage.theme="dark"
    }
  }else{
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
      localStorage.theme="light"
    }else{
      localStorage.theme="dark"
    }
  }
});

const mybutton = document.getElementById("btn-back-to-top");

const scrollFunction = () => {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
  console.log(document.documentElement.scrollTop)
 
    const skillElements = document.querySelectorAll(".progress");
    const radialProgressEle = document.querySelectorAll('.radial-progress');
    radialProgressEle.forEach(element=>{
      const targetValue = element.style.getPropertyValue('--value');
      element.style.setProperty('--final-value', targetValue);
      if(document.documentElement.scrollTop>1440 && document.documentElement.scrollTop<2400){
        element.classList.add("animate-radial-progress");
        }else{
          element.classList.remove("animate-radial-progress")
        }
    })
    skillElements.forEach(element=>{
      const width = element.getAttribute('data-width');
      element.style.setProperty('--dynamic-width', width);
      if(document.documentElement.scrollTop>1440 && document.documentElement.scrollTop<2500){
      element.classList.add("animate-progress");
      }else{
        element.classList.remove("animate-progress")
      }
    })
  
};

scrollFunction();

const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction);

//animating projects
document.addEventListener("DOMContentLoaded", function() {
  const carousalItems = document.querySelectorAll('.animate-p');

  // Initialize Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the animation class when the element is in the viewport
        entry.target.classList.add('flip-in-ver-left');
      } else {
        // Remove the animation class when the element exits the viewport
        entry.target.classList.remove('flip-in-ver-left');
      }
    });
  }, { threshold: 0.1 }); // Trigger when at least 10% of the element is visible

  // Observe each carousal item
  carousalItems.forEach(item => {
    observer.observe(item);
  });
});


