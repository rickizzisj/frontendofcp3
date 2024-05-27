let listaCadastrados = [
    { emailUsuario: "henriqueizzi@gmail.com", senhaUsuario: "123", nomeUsuario: "Henrique Izzi" },
    { emailUsuario: "profalexandre@fiap.com.br", senhaUsuario: "fiap", nomeUsuario: "Prof Alexandre" },
];

function validaLogin() {
    const emailInput = document.getElementById('idEmail');
    const senhaInput = document.getElementById('idSenha');
    const valida = document.querySelector('.padronizacao');

    const usuarioCadastrado = listaCadastrados.find(user => user.emailUsuario === emailInput.value && user.senhaUsuario === senhaInput.value);
    console.log(usuarioCadastrado);

    if (usuarioCadastrado) {
        valida.textContent = 'Sucesso!';
        valida.style.color = 'green';
        sessionStorage.setItem('usuario', JSON.stringify(usuarioCadastrado));
        alert("PROF O WINDOW.LOCATION.HREF NÃO REDIRECIONA DE FORMA ALGUMA!!! Os comandos estão corretos mas ele não redireciona, tentamos de todas as formas: Chatgpt, Vídeos, W3C e etc tente resolver se conseguir ai sim pode tirar ponto ok assim? vlw tmj")
        window.location.href = 'index.html';  // Caminho corrigido

        alert("O seja Bem-vindo {usuario} foi prejudicado por conta do bug do window.location essa mensagem deveria aparecer na próxima janela que o comando bugado abriria assim redirecionando para a nova página com o texto corretamente. Enfim, os comandos estão corretos exceto esse não sei porque")
        
    } else {
        valida.textContent = 'Erro!';
        valida.style.color = 'red';
    }

    setTimeout(() => {
        valida.textContent = '';
    }, 4000);
}

function logout() {
    sessionStorage.removeItem('usuario');
    window.location.href = 'cadastro.html';  // Caminho corrigido
}

window.onload = function() {
    const usuario = sessionStorage.getItem('usuario');
    if (usuario) {
        const usuarioJson = JSON.parse(usuario);
        document.getElementById('boasvindas').textContent = 'Olá, ' + usuarioJson.nomeUsuario;
    }
}




























/*let listaCadastrados = [
    { emailUsuario:"henriqueizzi@gmail.com", senhaUsuario:"123",nomeUsuario:"Henrique Izzi" },
    { emailUsuario:"profalexandre@fiap.com.br", senhaUsuario:"fiap",nomeUsuario:"Prof Alexandre" },
];

function validaLogin() {
    const usuarioJson = localStorage.getItem("usuario-validado");
    const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;

    if (usuario) {
        console.log(usuario.emailUsuario);
    }

    const emailInput = document.getElementById('idEmail');
    const senhaInput = document.getElementById('idSenha');
    const valida = document.querySelector('.padronizacao');

    const usuarioCadastrado = listaCadastrados.find(user => user.emailUsuario === emailInput.value && user.senhaUsuario === senhaInput.value);

    
}
    if (usuarioCadastrado) {
    valida.textContent = 'Sucesso!';
    valida.style.color = 'green';
    sessionStorage.setItem('usuario', JSON.stringify(usuarioCadastrado));
    setTimeout(() => {
        window.location.href = '../html/index.html';
    }, 500);}   
    
    else {
    valida.textContent = 'Erro!';
    valida.style.color = 'red';
}

setTimeout(() => {
    valida.textContent = '';
}, 5000);

return !!usuarioCadastrado;
function logout() {
    sessionStorage.removeItem('usuario');
    window.location.href = '../html/cadastro.html'; 
}
window.onload = function() {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    if (usuario) {
        document.getElementById('boasvindas').textContent = 'Olá, ' + usuario.nomeUsuario;
    }
}*/