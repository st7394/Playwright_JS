export {};

enum Browser {
    Chrome = "chrome",
    Firefox = "firefox",
    Safari = "safari",
    Edge = "edge"
}

function launchBrowser(browser: Browser) {
    switch (browser) {
        case Browser.Chrome:
            console.log("Launching Chrome...");
            break;
        case Browser.Firefox:
            console.log("Launching Firefox...");
            break;
        case Browser.Safari:
            console.log("Launching Safari...");
            break;
        case Browser.Edge:
            console.log("Launching Edge...");
            break;
        default:
            console.log("Unknown browser");
    }
}

launchBrowser(Browser.Chrome);
launchBrowser(Browser.Firefox);
launchBrowser(Browser.Safari);
launchBrowser(Browser.Edge);
