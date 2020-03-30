const colorButton = document.getElementById('navitemI');
const body = document.body;

const theme = localStorage.getItem('PCMRtheme');

if(theme === 'dark') {
    body.classList.remove('light');
}

if (theme) {
    body.classList.add(theme);
}

colorButton.onclick = () => {
    if (body.classList.contains('light')) {
        body.classList.add('dark');
        body.classList.remove('light');
        localStorage.setItem('PCMRtheme','dark');
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
        localStorage.setItem('PCMRtheme','light');
    }
}