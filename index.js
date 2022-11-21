const toggleTheme = () => {
    const body = document.body;
    const nav = document.getElementById("nav_bar")
    const a_tag = document.querySelectorAll("[id='a_tag']")
    const icons = document.getElementById("nav-icon")
    
    
    nav.classList.toggle('bg-dark')
    icons.classList.toggle("dark-mode")
    for (let i = 0; i < a_tag.length; i++) {
        const element = a_tag[i];
        console.log(element);
        element.classList.toggle('dark-mode')
    }
    
}