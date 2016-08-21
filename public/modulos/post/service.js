angular.module('blogjs.post').factory('posts', function($http) {
    var registrar = function(post, usuarioId) {
        return $http.post('http://localhost:9000/v1/usuarios/' + usuarioId + '/posts/', post);
    };

    var buscarPorUsuario = function(usuarioId, postId) {
        return $http.get('http://localhost:9000/v1/usuarios/' + usuarioId + '/posts/' + postId);
    };

    var buscarPorId = function(postId) {
        return $http.get('http://localhost:9000/v1/posts/' + postId);
    };

    var listarPorUsuario = function(usuarioId) {
        return $http.get('http://localhost:9000/v1/usuarios/' + usuarioId + '/posts');
    };

    var listarTodos = function(titulo, pagina) {
        var page = pagina || 1;
        var url;

        if (titulo) {
            url = 'http://localhost:9000/v1/posts/?pagina=' + page + '&titulo=' + titulo;
        } else {
            url = 'http://localhost:9000/v1/posts/?pagina=' + page;
        }

        return $http.get(url);
    };

    var comentar = function(postId, comentario) {
        return $http.post('http://localhost:9000/v1/posts/' + postId + '/comentarios', comentario)
    };

    return {
        registrar:registrar,
        listarPorUsuario:listarPorUsuario,
        buscarPorUsuario:buscarPorUsuario,
        buscarPorId:buscarPorId,
        listarTodos:listarTodos,
        comentar:comentar
    };
});