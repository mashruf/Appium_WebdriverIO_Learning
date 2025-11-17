describe("Add note",()=>{
    it("skip tutorial", async ()=>{
        //click skip
        await $('//*[@text="SKIP"]').click();

        //assertion
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    })
})