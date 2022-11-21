const toggleTheme = () => {
    const body = document.body;
    const nav = document.getElementById("nav_bar")
    const a_tag = document.querySelectorAll("[id='a_tag']")
    
    nav.classList.toggle('dark-mode')
    
    for (let i = 0; i < a_tag.length; i++) {
        const element = a_tag[i];
        console.log(element);
        element.classList.toggle('dark-mode')
    }

    const icons = document.querySelectorAll("[id='nav_icon']")
        for (let i = 0; i < icons.length; i++) {
        const element = icons[i];
        console.log(element);
        element.classList.toggle('dark-mode')
    }
    
}