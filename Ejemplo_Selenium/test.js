const {Builder, By, Key} = require ("selenium-webdriver");
require("chromedriver");

async function ejemplo() {
    var User = "jun22@outlook.com";
    var Password = "tacos123";


    let driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("http://localhost/LoginJr_Selenium/index.html");
    await driver.findElement(By.id("email")).sendKeys(User,Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(Password,Key.RETURN);
    await driver.findElement(By.id("login")).click();
    

    

}
ejemplo();
