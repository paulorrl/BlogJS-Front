angular.module('blogjs.post').controller('VisualizacaoPostController', function($scope, $routeParams, posts) {

    var carregarPosts = function(){
        var postId = $routeParams.postId;

        return posts.buscarPorId(postId)
            .then(function(resultado) {
                $scope.post = resultado.data;
            })
            .catch(function(erro) {
                alert(erro);
            });
    };

    var comentar = function(comentario) {
        var postId = $routeParams.postId;

        posts.comentar(postId, comentario)
            .then(function(resultado) {
                $scope.post = resultado.data;
            })
            .catch(function(erro) {
                alert(erro.mensagem);
            });
    };

    $scope.comentar = comentar;
    carregarPosts();
});