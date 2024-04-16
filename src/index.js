const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    
    const navlink = document.querySelectorAll(`a[href="#${sectionId}"]`);

    if (entry.isIntersecting) {
        console.log(navlink)

      navlink[1].classList.add("active");
     
    } else {
        navlink[1].classList.remove("active");
    }
   
  });
}, { threshold: 0.35 });

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});
