class BasePage {
    protected base_url: string;
    constructor(base_url: string) {
        this.base_url = base_url;
    }

    protected navigate(path: string): void {
        console.log("Navigating to:" + this.base_url + "/" + path);
    }

}
class LoginPage extends BasePage {
    constructor(base_url: string) {
        super(base_url);
    }
    public login(username: string, password: string, path: string): void {
        this.navigate(path);
        console.log("Base URL:" + this.base_url + "/" + path);
        console.log("Login with username:" + username);
        console.log("Login with password:" + password);
    }
}

let loginpage = new LoginPage("https://www.saucedemo.com");
loginpage.login("standard_user", "secret_sauce", "inventory.html");