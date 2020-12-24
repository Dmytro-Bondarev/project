export class ServisePost {
    PostUrl='https://jsonplaceholder.typicode.com/posts'

    getPost() {
        return fetch(this.PostUrl)
    .then(value => value.json())
    .then(postsAPI => postsAPI);
}
}