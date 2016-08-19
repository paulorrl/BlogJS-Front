angular.module('blogjs.post').controller('PesquisaPostController', function($scope, posts, $routeParams, usuarios, $location) {

    var carregarPosts = function()
    {
        $scope.posts = posts.listar();
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