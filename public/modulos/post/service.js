angular.module('blogjs.post').factory('posts', function($http, urlApi) {
    var registrar = function(post, usuarioId) {
        return $http.post(urlApi + '/v1/usuarios/' + usuarioId + '/posts/', post);
    };

    var atualizar = function(usuarioId, postId, post) {
        return $http.put(urlApi + '/v1/usuarios/' + usuarioId + '/posts/' + postId, post);
    };

    var buscarPorUsuario = function(usuarioId, postId) {
        return $http.get(urlApi + '/v1/usuarios/' + usuarioId + '/posts/' + postId);
    };

    var buscarPorId = function(postId) {
        return $http.get(urlApi + '/v1/posts/' + postId);
    };

    var listarPorUsuario = function(usuarioId) {
        return $http.get(urlApi + '/v1/usuarios/' + usuarioId + '/posts');
    };

    var listarTodos = function(titulo, pagina) {
        var page = pagina || 1;
        var url;

        if (titulo) {
            url = urlApi + '/v1/posts/?pagina=' + page + '&titulo=' + titulo;
        } else {
            url = urlApi + '/v1/posts/?pagina=' + page;
        }

        return $http.get(url);
    };

    var comentar = function(postId, comentario) {
        return $http.post(urlApi + '/v1/posts/' + postId + '/comentarios', comentario)
    };

    return {
        registrar:registrar,
        atualizar:atualizar,
        listarPorUsuario:listarPorUsuario,
        buscarPorUsuario:buscarPorUsuario,
        buscarPorId:buscarPorId,
        listarTodos:listarTodos,
        comentar:comentar
    };
});