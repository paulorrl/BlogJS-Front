angular.module('blogjs.post').controller('VisualizacaoPostController', function($scope, $routeParams, posts, usuarios) {

    var carregarPosts = function(){
        var usuarioId = $routeParams.id;
        var postId = $routeParams.postId;

        return posts.buscar(usuarioId, postId)
            .then(function(resultado) {
                console.log(resultado.data);
                $scope.post = resultado.data;
            })
            .catch(function(erro) {
                alert(erro);
            });
    };

    carregarPosts();
});