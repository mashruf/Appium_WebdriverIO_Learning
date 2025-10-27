describe("Find elements",()=>{

    it("By accessibility id", async () =>{

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

    it.only("By class", async () =>{

        //getting phone element by accessibility id
        const chrome = await $('~Chrome');

        //wait after getting the element
        await browser.pause(5000);

        //click the phone
        await chrome.click();

        //wait after getting the element
        await browser.pause(5000);

        //getting the search bar by class name
        const className = await $('android.widget.EditText');

        //getting the text of the placeholder of searchbar
        const text = await className.getText();

        //printing the placeholder text of the searchbar
        console.log("Text is "+ text);

        //asserting the text of the placeholder of the searchbar
        await expect(className).toHaveText('Search or type URL');
    })

})



