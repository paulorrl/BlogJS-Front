angular.module('blogjs.post').controller('PesquisaUsuarioPostController', function($scope, posts, $routeParams, usuarios, $location) {

    var carregarPosts = function() {
        posts.listarPorUsuario($routeParams.id)
            .then(function(resultado) {
                $scope.posts = resultado.data;
            })
            .catch(function(err) {
                alert(err);
            });
    };

    var carregarUsuario = function() {
        usuarios.buscar($routeParams.id)
            .then(function(resultado) {
                $scope.usuario = resultado.data;
            })
            .catch(function() {
                $location.path('/login');
            });
    };

    carregarPosts();
    carregarUsuario();
});