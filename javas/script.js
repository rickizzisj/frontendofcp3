let listaCadastrados = [
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
function logout() {
    sessionStorage.removeItem('usuario');
    window.location.href = '../html/cadastro.html'; 
}
window.onload = function() {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    if (usuario) {
        document.getElementById('boasvindas').textContent = 'Olá, ' + usuario.nomeUsuario;
    }
}