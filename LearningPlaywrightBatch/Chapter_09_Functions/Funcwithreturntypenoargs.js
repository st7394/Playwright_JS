function getcodes(status) {
    if (status >= 200 && status <= 299) {
        return "success"
    }
    else if (status >= 300 && status <= 399) {
        return "redirection";
    }
    else if (status >= 400 && status <= 499) {
        return "client error";
    }
    else if (status >= 500 && status <= 599) {
        return "server error";
    }
    else {
        return "unknown error";
    }
}
console.log(getcodes(200));
console.log(getcodes(300));
console.log(getcodes(400));
console.log(getcodes(500));
console.log(getcodes(600));