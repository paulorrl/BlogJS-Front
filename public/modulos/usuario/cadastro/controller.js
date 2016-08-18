angular.module('blogjs.usuario').controller('CadastroUsuarioController', function($scope, $location, usuarios) {
    $scope.usuario = {};

    $scope.cadastrar = function(usuario) {
        if (valido(usuario)) {
            usuarios.cadastrar(usuario)
                .then(function(resultado) {
                    $location.path('login');
                })
                .catch(function(err) {
                    alert('Não foi possível registrar!');
                });
        } else {
            alert("Dados inválidos!");
        }
    };

    var valido = function(usuario) {
        return usuario.nome && usuario.login && usuario.senha;
    };
});