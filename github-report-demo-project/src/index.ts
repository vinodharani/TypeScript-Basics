import {GitHubApiService} from './GitHubApiService'
import { User } from './User';

let ghas = new GitHubApiService();
ghas.getUserInfo("koushikkothagal", (user : User) => {
    console.log(user);
});