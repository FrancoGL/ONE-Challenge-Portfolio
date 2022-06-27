let menu_bars = document.getElementById('menu-bars');
let menu_options = document.getElementById('menu-options');

const setActiveMenu = () => {
  menu_bars.addEventListener('click', (e) => {
    if (!menu_options.classList.contains('options__active')) {
      menu_options.classList.add('options__active');
    } else {
      menu_options.classList.remove('options__active');
    }

  })
}

setActiveMenu();