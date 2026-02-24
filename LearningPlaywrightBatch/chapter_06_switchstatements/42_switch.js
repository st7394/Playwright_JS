let responsecode = 401;

switch (responsecode) {
    case 200:
        console.log("Success");
        break;
    case 201:
        console.log("Created");
        break;
    case 401:
        console.log("Unauthorized");
        break;
    case 500:
        console.log("Server Error");
        break;
    case 404:
        console.log("Not Found");
        break;
    case 403:
        console.log("Forbidden");
        break;
    default:
        console.log("Unknown response code");
}