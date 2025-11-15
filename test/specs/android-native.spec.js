describe("Android native feature tests",()=>{
    it("Access an activity directly", async () =>{

        //access activity
        await driver.startActivity("io.appium.android.apis",".app.AlertDialogSamples");

        //pause
        await driver.pause(3000);

        //assertion
        await expect ($('//*[@text="App/Alert Dialogs"]')).toExist();
    })
})