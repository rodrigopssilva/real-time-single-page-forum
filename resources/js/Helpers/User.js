import Token from './Token';
import AppStorage from './AppStorage';

class User {
    login(form) {
        axios.post('/api/auth/login', form)
            .then(response => this.responseAfterLogin(response))
            .catch(error => console.log(error.response.data));
    }

    responseAfterLogin(response) {
        const token = response.data.access_token;
        const user = response.data.user;

        if (Token.isValid(token)) {
            AppStorage.store(user, token);
            window.location = '/forum'; // :(
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken();
        if (storedToken) {
            return Token.isValid(storedToken);
        }
        return false;
    }

    isLoggedIn() {
        return this.hasToken();
    }

    logout() {
        AppStorage.clear();
        window.location = '/forum'; // :(
    }

    name() {
        if (this.isLoggedIn()) {
            return AppStorage.getUser();
        }
    }

    id() {
        if (this.isLoggedIn()) {
            const payload = Token.payload(AppStorage.getToken());
            return payload.sub;
        }
    }

    own(id) {
        return this.id() == id;
    }
}

export default User = new User();
