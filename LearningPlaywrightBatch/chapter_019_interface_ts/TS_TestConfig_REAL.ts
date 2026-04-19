interface configsetting {
    baseURL: string;
    headless: boolean;
    browser: string;
    timeout?: number;
    viewport: { width: number; height: number };

}

let config: configsetting = {
    baseURL: "https://app.vwo.com",
    headless: true,
    browser: "chromium",
    timeout: 10000,
    viewport: { width: 1920, height: 1080 }
}

let config2: configsetting = {
    baseURL: "https://app.vwo.com",
    headless: false,
    browser: "chromium",
    viewport: { width: 1120, height: 180 }
}
function setupTest(config: configsetting) {
    console.log("Setting up test with config: " + JSON.stringify(config));
}

setupTest(config);
setupTest(config2);

