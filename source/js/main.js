function FooterSocialLinkHover(e) {
    e.setAttribute('color', '#ff702a')
}
function Menu() {
    document.querySelector('.header__nav').classList.toggle('header__nav--menu-active')
    document.querySelector('.header__list').classList.toggle('header__list--menu-active')

    const links = document.querySelectorAll('.header__nav-link')
    for (let index = 0; index < links.length; index++) {
        const element = links[index];
        element.addEventListener('click', () => {
            document.querySelector('.header__nav').classList.remove('header__nav--menu-active')
            document.querySelector('.header__list').classList.remove('header__list--menu-active')
        })
    }
}

