angular.module('blogjs.post').factory('posts', function() {
    var posts = [];
    var id = 0;

    var registrar = function(post) {
        var novoId = getId() + 1;
        post.id = novoId
        setId(novoId);

        var posts = getPosts();
        post.dataRegistro = new Date();
        posts.push(post);
        setPosts(posts);
    };

    var buscar = function(id){
        var postEncontrado = getPosts().find(function(post) {
            return post.id === id;
        });
        return postEncontrado;
    };

    var listar = function() {
        return getPosts();
    };

    var getId = function() {
        var id = localStorage.getItem('currentPostId');

        if (id) {
            return parseInt(id);
        } else {
            return 0;
        }
    };

    var setId = function(id) {
        localStorage.setItem('currentPostId', id);
    };

    var getPosts = function(){
        var dados = localStorage.getItem('posts');

        if (dados) {
            return JSON.parse(dados);
        } else {
            return [];
        }
    };

    var setPosts = function(posts){
        localStorage.setItem('posts', JSON.stringify(posts));
    };

    return {
        registrar:registrar,
        listar: listar,
        buscar:buscar
    };
});