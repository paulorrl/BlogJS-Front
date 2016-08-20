angular.module('blogjs.post').controller('PesquisaPostController', function($scope, posts, $routeParams, usuarios, $location) {

    var carregarPosts = function() {
        posts.listarTodos()
            .then(function(resultado) {
                $scope.posts = resultado.data;
            })
            .catch(function(err) {
                console.log(err);
                alert(err);
            });
    };

    carregarPosts();
});