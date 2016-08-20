angular.module('blogjs.post').controller('PesquisaPostController', function($scope, posts, $routeParams, usuarios, $location) {

    var carregarPosts = function() {
        posts.listar($routeParams.id)
            .then(function(resultado) {
                $scope.posts = resultado.data;
            })
            .catch(function(err) {
                console.log(err);
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