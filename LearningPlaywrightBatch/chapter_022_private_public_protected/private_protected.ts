class Apiclient {
    private baseurl: string;
    private token: string;
    protected timeout: number;

    constructor(baseurl: string, token: string, timeout: number = 10000) {
        this.baseurl = baseurl;
        this.token = token;
        this.timeout = timeout;
    }

    private getAuthheader(): string {
        return "Bearer " + this.token;
    }
    public sendreq(path: string): void {
        console.log("Base URL: " + this.baseurl);
        console.log("Token: " + this.token);
        console.log("Timeout: " + this.timeout);
        console.log("Path: " + path);
    }

}
let client = new Apiclient("https://jsonplaceholder.typicode.com", "1234567890", 200000);
// console.log("Base Url:", client.baseurl);
// console.log("Token:", client.token);
// console.log("Timeout:", client.timeout);
client.sendreq("/posts");