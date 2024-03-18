function expandSourceCode(index) {
    var post = document.getElementById('post' + index);
    post.classList.remove('truncate');
    post.classList.add('expanded');
}