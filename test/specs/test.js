describe("Suite",()=>{
    it("test", async () =>{

        //getting phone element by accessibility id
        const phone = await $('~Phone');

        //wait after getting the element
        await browser.pause(5000);

        //click the phone
        await phone.click();

        //wait after getting the element
        await browser.pause(5000);

        //getting more option by accessibility id
        const moreOption = $('~More options');

        //asserting for more option to be exist
        await expect(moreOption).toBeExisting();
    })
})