export default class UserSer {
    UserUrl = 'https://jsonplaceholder.typicode.com/users'

    async ServesUser() {
        return await fetch(this.UserUrl)
            .then(value => value.json())
    }

    async user(id) {
        return await fetch(this.UserUrl+`/${id}`).then(value => value.json());
   }
};