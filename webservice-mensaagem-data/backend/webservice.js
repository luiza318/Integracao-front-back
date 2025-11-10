const http = require('http');
const port = 3000;
const {mensagemAleatoria, dataHoraFormatadaLocal} = require('./mensagem-data');
const server = http.createServer((req, res) => {
 const { method, url } = req;

 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
 res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS') {
  res.writeHead(204);
  return res.end();
 }

  if (url === '/mensagem' && method === 'POST') {
    try {
      const mensagem = mensagemAleatoria(); 
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ sucesso: true, mensagem }));
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ sucesso: false, erro: e.message }));
    }
  }

    if (url === '/data' && method === 'POST') {
    try {
      const data = dataHoraFormatadaLocal(); 
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ sucesso: true, data }));
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ sucesso: false, erro: e.data }));
    }
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
});

server.listen(port, () => console.log(`Servidor online na porta ${port}`));
