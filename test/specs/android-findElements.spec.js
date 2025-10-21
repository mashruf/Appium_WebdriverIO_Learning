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
})