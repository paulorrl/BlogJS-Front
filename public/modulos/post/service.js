angular.module('blogjs.post').factory('posts', function($http) {
    var registrar = function(post, usuarioId) {
        return $http.post('http://localhost:9000/v1/usuarios/' + usuarioId + '/posts/', post);
    };

    var buscarPorUsuario = function(usuarioId, postId) {
        return $http.get('http://localhost:9000/v1/usuarios/' + usuarioId + '/posts/' + postId);
    };

    var listarPorUsuario = function(usuarioId) {
        return $http.get('http://localhost:9000/v1/usuarios/' + usuarioId + '/posts');
    };

    var listarTodos = function() {
        return $http.get('http://localhost:9000/v1/posts');
    };

    return {
        registrar:registrar,
        listarPorUsuario:listarPorUsuario,
        buscarPorUsuario:buscarPorUsuario,
        listarTodos:listarTodos
    };
});