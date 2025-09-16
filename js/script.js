// Código do menu esquerdo com cada titulo de tópicos
document.addEventListener('mouseover', e => {
    const isLeftmenuButton = e.target.matches("[data-leftmenu-button]");
    if (!isLeftmenuButton && e.target.closest('[data-leftmenu]') != null)
        return;
    
    let atualLeftmenu
    if (isLeftmenuButton) {
        atualLeftmenu = e.target.closest('[data-leftmenu]');
        atualLeftmenu.classList.toggle('active');
    }

    atualLeftmenu.addEventListener('mouseleave', () => {
            atualLeftmenu.classList.remove('active');
    }, { once: true });
})

// Código para manter o background do item do menu com a cor escura quando tiver clicado e remover a cor escura dos outros
const items = document.querySelectorAll(".list-topics-container li");
const sections = document.querySelectorAll("section[id]");

// Atualiza o background color do item do menu quando da scroll na tela
function updateActive() {
  let current = "";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });

  items.forEach(item => {
    const link = item.querySelector("a");
    item.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}

window.addEventListener("scroll", updateActive);
  items.forEach(item => {
    item.addEventListener("click", () => {
      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
});