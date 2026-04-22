interface ApiResponse {
    readonly statuscode: number;
    readonly data: any;
    readonly message: string;
    body: string;
    headers?: object;
    responsetime?: number;
}


let response: ApiResponse = {
    statuscode: 200,
    data: "Login Successful",
    message: "Login Successful",
    body: "Login Successful",
    //headers: "Login Successful",
    // responsetime: 1200
}

function getApiResponse(response: ApiResponse): ApiResponse {
    return response;
}
// response.statuscode = 404;
console.log(getApiResponse(response));
