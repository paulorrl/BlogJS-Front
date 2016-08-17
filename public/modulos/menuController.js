angular.module('blogjs').controller('MenuController', function($scope, usuarios, $location){

    var carregarUsuario = function() {
        return usuarios.getUsuarioLogado();
    };

    $scope.usuarioLogado = carregarUsuario();
    $scope.sair = function() {
        sair($scope.usuarioLogado);
        usuarios.sair()
    };

    var sair = function(usuario){
        $scope.usuarioLogado = null;
        $location.path('/');
    };

    $scope.$on('usuario.entrou', function(evento, usuario) {
        console.log('Recebendo evento: usuário entrou');
        $scope.usuarioLogado = usuario;
        $location.path('usuarios/' + usuario.id + '/posts');
    });

    $scope.$on('usuario.saiu', function(evento, usuario){
        console.log('Recebendo evento: usuário saiu');
        sair(usuario);
    });
});