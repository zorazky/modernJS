import './style.css';

const person = (name) => `Hello ${name},`;

const app = document.createElement('div');
app.classList.add('highlight');
app.innerHTML = `<p>${person('George')} Welcome to webpack 4!</p>`;
document.body.appendChild(app);