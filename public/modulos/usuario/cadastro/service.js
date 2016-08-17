angular.module('blogjs.usuario').factory('usuarios', function() {

    var cadastrar = function(usuario) {
        var id = getId();
        usuario.id = id + 1;
        setId(usuario.id);

        var usuarios = getUsuarios();
        usuarios.push(usuario);
        setUsuarios(usuarios);
    };

    var autenticar = function(usuario) {
        var encontrado = getUsuarios().find(function(obj) {
            return obj.login === usuario.login && obj.senha === usuario.senha;
        });

        if (encontrado) {
            localStorage.setItem('usuarioLogado', JSON.stringify(encontrado));
        }
        return encontrado;
    };

    var getUsuarioLogado = function(){
        return JSON.parse(localStorage.getItem('usuarioLogado'));
    };

    var buscar = function(id) {
        var encontrado = getUsuarios().find(function(obj) {
            return obj.id === id;
        });
        return encontrado;
    };

    var sair = function(){
        localStorage.removeItem('usuarioLogado');
    };

    var getId = function() {
        var id = localStorage.getItem('currentId');

        if (id) {
            return parseInt(id);
        } else {
            return 0;
        }
    };

    var setId = function(id) {
        localStorage.setItem('currentId', id);
    };

    var getUsuarios = function(){
        var dados = localStorage.getItem('usuarios');

        if (dados) {
            return JSON.parse(dados);
        } else {
            return [];
        }
    };

    var setUsuarios = function(usuarios){
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    };

    return {
        cadastrar: cadastrar,
        autenticar: autenticar,
        buscar:buscar,
        getUsuarioLogado:getUsuarioLogado,
        sair:sair
    }
});