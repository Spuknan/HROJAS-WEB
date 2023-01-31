function changeNavbarOnScroll() {
   const navbar = document.querySelector(".scrollchange");

   window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
         navbar.classList.add("scrolled");
      } else {
         navbar.classList.remove("scrolled");
      }
   });
}
changeNavbarOnScroll();


function indexSaludo() {
   let fecha = new Date();
   let hora = fecha.getHours();
   let saludo;

   if (hora >= 5 && hora < 12) {
      saludo = "Buen día, ";
   } else if (hora >= 12 && hora < 19) {
      saludo = "Buenas tardes, ";
   } else if (hora >= 19 || hora <= 5) {
      saludo = "Buenas noches, ";
   }
   console.log(hora + "hs = " + saludo);

   document.getElementById("indexSaludo").innerHTML = saludo;
}


function calculateAge(birthday) {
   let ageDifMs = Date.now() - birthday.getTime();
   let ageDate = new Date(ageDifMs);
   return Math.abs(ageDate.getUTCFullYear() - 1970);
}
let birthday = new Date("1996/02/07");
let age = calculateAge(birthday);
document.getElementById("miEdad").innerHTML = age;