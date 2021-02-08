export default class ComSer {
    cmtUrl='https://jsonplaceholder.typicode.com/comments';

    async ServesCom(){
        return await fetch (this.cmtUrl)
            .then(value => value.json());
    }
}