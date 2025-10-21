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

    it.only("Find element by class name", async()=>{

        //find element by class name
        const className = await $("android.widget.TextView");

        console.log(await className.getText());

        //Assertion
        await expect(className).toHaveText("API Demos");

        
    })
})