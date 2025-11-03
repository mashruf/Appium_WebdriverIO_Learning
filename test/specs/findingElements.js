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

    it("By class", async () =>{

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

    it("By xpath", async () =>{

        //getting phone element by accessibility id
        const chrome = await $('~Chrome');

        //wait after getting the element
        await browser.pause(5000);

        //click the phone
        await chrome.click();

        //wait after getting the element
        await browser.pause(5000);

        //getting the search bar by xpath
        const xpath = await $('//android.widget.EditText[@resource-id="com.android.chrome:id/search_box_text"]');

        //getting the text of the placeholder of searchbar
        const text = await xpath.getText();

        //printing the placeholder text of the searchbar
        console.log("Text is "+ text);

        //asserting the text of the placeholder of the searchbar
        await expect(xpath).toHaveText('Search or type URL');
    })

    it.only("Find element by UiAutomator", async ()=>{
        //find by text contains
        await $('android= new UiSelector().textContains("Chrome")').click();
    })


})








