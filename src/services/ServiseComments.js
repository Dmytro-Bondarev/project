export class ServiseComments {
    cmtUrl='https://jsonplaceholder.typicode.com/comments'

    getCom() {
        return fetch(this.cmtUrl)
            .then(value => value.json())
            .then(commentsAPI => commentsAPI);
    }
}