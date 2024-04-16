// // Hier kannst du JavaScript-Funktionen hinzufügen, um die gewünschten Funktionen zu implementieren.
// // Zum Beispiel die Autofill-Funktion für die Suchleiste oder das Dropdown-Menü für den User-Symbol-Link.
// // Du kannst auch das Sandwich-Menü für die mobile Ansicht hinzufügen.

// // Beispiel für eine Autofill-Funktion für die Suchleiste:
// const searchInput = document.getElementById('search-input');
// searchInput.addEventListener('input', function() {
//     // Implementiere hier die Logik für die Autofill-Funktion basierend auf deinen Anforderungen.
//     // Zum Beispiel: Vorschläge aus einer Liste von Suchbegriffen anzeigen.
// });

// // Beispiel für das Dropdown-Menü für den User-Symbol-Link:
// const userDropdown = document.querySelector('.dropdown');
// const userDropdownContent = document.querySelector('.dropdown-content');
// userDropdown.addEventListener('click', function() {
//     userDropdownContent.classList.toggle('show');
// });

// Beispiel für das Sandwich-Menü in der mobilen Ansicht:
// const sandwichMenu = document.querySelector('.sandwich');
// const sandwichLinks = document.querySelector('.sandwich-links');
// sandwichMenu.addEventListener('click', function() {
//     sandwichLinks.classList.toggle('show');
// });

$(document).ready(function() {
    $('.navbar__mobile-toggle').click(function() {
      $('.navbar__menu').slideToggle();
    });


    $('.menu').click(function () {
        $('.sandwich_content').toggleClass('show');
    });
  });
  
