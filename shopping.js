const searchInput = 
document.getElementById('searchinput')

const cards = 
document.querySelectorAll('.card');
function filterApps() {
   const value = 
   searchInput.value.toLowerCase().trim();

   cards.forEach(card => {
      constName = card.getAttribute('data-name').toLowerCase();

      if(value === "" || constName.includes(value)) {

         card.style.display = "block";
   }
      else {
        card.style.display = "none";
   }
});
}
const icon = {
   document.getElementById('theme-btn');
   icon.onclick = function() {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')); {
         icon.innerHTML = "dark_mode";
         icon.style,color = "yellow";

      } else {
         icon.innerHTML = "light_mode";
         icon.style.color = "0range";
      }

   }
}
searchInput.addEventListener('input',filterApps);
searchInput.addEventListener('keypress',(e) => {
   if (e.key === 'Enter'){
      filterApps();
   }
});