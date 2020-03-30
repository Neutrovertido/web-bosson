const colorButton = document.getElementById('color');
const body = document.body;

const theme = localStorage.getItem('theme');

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
        localStorage.setItem('theme','dark');
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
        localStorage.setItem('theme','light');
    }
}