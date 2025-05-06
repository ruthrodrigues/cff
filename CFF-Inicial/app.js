const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.get('/', (req, res) => {
    res.render('index', { title: 'Início' });
});

app.get('/quem-somos', (req, res) => {
    res.render('quem-somos', { title: 'Quem Somos' });
});

app.get('/historico', (req, res) => {
    res.render('historico', { title: 'Histórico' });
});

app.get('/diretores', (req, res) => {
    res.render('diretores', { title: 'Diretores' });
});

app.get('/eventos', (req, res) => {
    res.render('eventos', { title: 'Eventos' });
});

app.get('/ceara-de-tradicoes', (req, res) => {
    res.render('ceara-de-tradicoes', { title: 'Ceará de Tradições' });
});

app.get('/contato', (req, res) => {
    res.render('contato', { title: 'Entre em Contato' });
});

app.listen(8000, () => {
    console.log('Servidor rodando em http://localhost:8000');
});
