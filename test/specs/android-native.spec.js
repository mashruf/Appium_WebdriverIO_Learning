describe("Android native feature tests",()=>{
    it("Access an activity directly", async () =>{

        //access activity
        await driver.startActivity("io.appium.android.apis",".app.AlertDialogSamples");

        //pause
        await driver.pause(3000);

        //assertion
        await expect ($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    it("Working with dialog box", async ()=>{
        //access activity
        await driver.startActivity("io.appium.android.apis",".app.AlertDialogSamples");

        //click on first dialog
        await $('~OK Cancel dialog with a message').click();

        //Getting text from the alert box
        console.log('Alert text -->',await driver.getAlertText());

        //Accept alert
        // await driver.acceptAlert();

        //Dismiss alert
        // await driver.dismissAlert();

        //Clicking the ok button of alert box
        await $('//*[@resource-id="android:id/button1"]').click();

        //assertion- alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    })

    it("Vertical Scrolling", async ()=>{
        
        //Going to the scrollable screen
        await $('~App').click();
        await $('~Activity').click();

        //scroll to the end
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        //Scroll text into view
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        //click element after scrolling to the end
        // await $('~Secure Surfaces').click();

    })

    it.only("Horizontal Scrolling", async ()=>{
        
        //Go to the activity screen
        await driver.startActivity(
            'io.appium.android.apis','.view.Gallery1'
        );

        //Horizontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')

        //pause
        await driver.pause(3000);

    })
})