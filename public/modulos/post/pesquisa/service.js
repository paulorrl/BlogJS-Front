angular.module('blogjs.post').factory('posts', function($http) {
    var registrar = function(post, usuarioId) {
        return $http.post('http://localhost:9000/v1/usuarios/' + usuarioId + '/posts/', post);
    };

    var buscar = function(usuarioId, postId) {
        return $http.get('http://localhost:9000/v1/usuarios/' + usuarioId + '/posts/' + postId);
    };

    var listar = function(usuarioId) {
        return $http.get('http://localhost:9000/v1/usuarios/' + usuarioId + '/posts');
    };

    return {
        registrar:registrar,
        listar: listar,
        buscar:buscar
    };
});