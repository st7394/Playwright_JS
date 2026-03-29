let config = {};
config.url = "https://www.saucedemo.com/";
config.username = "standard_user";
config.password = "secret_sauce";
console.log(config);
config.password = "stamina";
console.log(config);

delete config.password;
console.log(config);