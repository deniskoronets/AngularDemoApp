export class User {

    readonly STORAGE_TOKEN_KEY = 'auth_token';

    readonly STORAGE_USER_INFO_KEY = 'auth_userinfo';

    /**
     * Indicates if current user is authenticated
     * @var {boolean}
     */
    private authenticated = false;

    /**
     * API token fetched by authorization
     */
    private token = '';

    /**
     * Information about user once authenticated
     */
    private userInfo: object;

    constructor() {
        const storageToken = localStorage.getItem(this.STORAGE_TOKEN_KEY);

        if (storageToken) {
            this.token = storageToken;
            this.authenticated = true;
            this.userInfo = JSON.parse(localStorage.getItem(this.STORAGE_USER_INFO_KEY));
        }
    }

    get id() {
        return this.userInfo.id;
    }

    public isAuthenticated(): boolean {
        return this.authenticated;
    }

    public authenticate(token: string, userInfo: object) {
        this.authenticated = true;
        this.token = token;
        this.userInfo = userInfo;

        localStorage.setItem(this.STORAGE_TOKEN_KEY, token);
        localStorage.setItem(this.STORAGE_USER_INFO_KEY, JSON.stringify(userInfo));
    }

    public getToken() {
        return this.token;
    }

    public logout() {
        this.authenticated = false;
        this.token = '';

        localStorage.setItem(this.STORAGE_TOKEN_KEY, '');
        localStorage.setItem(this.STORAGE_USER_INFO_KEY, '{}');
    }

    public getUserInfo() {
        return this.userInfo;
    }
}