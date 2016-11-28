// this import should be first in order to load some required settings (like globals and reflect-metadata)
function main() {
    var platformModule = require("nativescript-angular/platform");
    var appModule = require("./app.module");
    const platform = platformModule.platformNativeScriptDynamic();
    platform.bootstrapModule(appModule.AppModule);
}
global["__appReload"] = main;
main();
