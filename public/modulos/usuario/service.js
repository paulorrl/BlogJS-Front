angular.module('blogjs.usuario').factory('usuarios', function($http) {
    var cadastrar = function(usuario) {
        return $http.post('http://localhost:9000/v1/usuarios', usuario)
    };

    var autenticar = function(login, senha) {
        var auth = { login:login, senha:senha };
        return $http.post('http://localhost:9000/v1/usuarios/auth', auth);
    };

    var getUsuarioLogado = function(){
        return JSON.parse(localStorage.getItem('usuarioLogado'));
    };

    var buscar = function(id) {
        return $http.get('http://localhost:9000/v1/usuarios/' + id);
    };

    var sair = function(){
        localStorage.removeItem('usuarioLogado');
    };

    return {
        cadastrar: cadastrar,
        autenticar: autenticar,
        buscar:buscar,
        getUsuarioLogado:getUsuarioLogado,
        sair:sair
    };
});