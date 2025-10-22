describe("Android Elements Test",()=>{
    it("Find elements by accessibility id", async()=>{

        //find element by accessibility id
        const appOption = await $("~App");

        //Click on element
        appOption.click();

        //Assertion
        const actionBar = await $("~Action Bar");
        await expect(actionBar).toBeExisting();

    })

    it("Find element by class name", async()=>{

        //find element by class name
        const className = await $("android.widget.TextView");

        console.log(await className.getText());

        //Assertion
        await expect(className).toHaveText("API Demos");

        
    })

    it("Find elements by xpath", async ()=>{

        //xpath - (//tagname[@attribute=value])
        await $("//android.widget.TextView[@content-desc='Alert Dialogs']").click();

        //find by resource id
        await $("//android.widget.Button[@resource-id='io.appium.android.apis:id/select_button']").click();
    
    
        //find by text
        await $("//android.widget.TextView[@text='Command one']").click();


        //Assertion
        const textAssertion = $("//android.widget.TextView");
        await expect(textAssertion).toHaveText("You selected: 0 , Command one");
    })
})