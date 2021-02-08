export default class PostSer{
    postUrl='https://jsonplaceholder.typicode.com/posts';

    async ServesPost(){
        return await fetch(this.postUrl)
            .then(value => value.json());
    }

}