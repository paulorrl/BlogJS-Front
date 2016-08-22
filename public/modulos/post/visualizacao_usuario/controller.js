angular.module('blogjs.post').controller('VisualizacaoUsuarioPostController', function($scope, $routeParams, posts, usuarios) {

    var carregarPosts = function(){
        var usuarioId = $routeParams.id;
        var postId = $routeParams.postId;

        return posts.buscarPorUsuario(usuarioId, postId)
            .then(function(resultado) {
                $scope.post = resultado.data;
            })
            .catch(function(erro) {
                alert(erro);
            });
    };

    var salvarEdicao = function(post) {
        var usuarioId = $routeParams.id;
        var postId = $routeParams.postId;

        posts.atualizar(usuarioId, postId, post)
            .then(function(resultado) {
                $scope.post = resultado.data;
                cancelarEdicao();
            })
            .catch(function(erro) {
                alert(erro);
            });
    };

    var habilitarEdicao = function() {
        $scope.estaSendoEditado = true;
        $scope.postEditado = angular.copy($scope.post);
    };

    var cancelarEdicao = function() {
        $scope.estaSendoEditado = false;
        $scope.postEditado = {};
    };

    $scope.salvarEdicao = salvarEdicao;
    $scope.habilitarEdicao = habilitarEdicao;
    $scope.cancelarEdicao = cancelarEdicao;
    $scope.postEditado = {};
    carregarPosts();
});