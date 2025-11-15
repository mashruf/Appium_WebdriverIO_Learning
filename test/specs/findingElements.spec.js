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

    it("Find element by UiAutomator", async ()=>{
        //find by text contains
        await $('android= new UiSelector().textContains("Chrome")').click();
    })

    it("Find multiple elements", async () =>{

        const actualList = ["API Demos", "Access'ibility", "Accessibility",
             "Animation", "App", "Content",
             "Graphics", "Media", "NFC", "OS",
              "Preference", "Text", "Views"];
        
        
        const expectedList = [];

        //getting the elements
        const textList = await $$('android.widget.TextView');

        //loop through the textList and pushing to the array
        for(const element of textList){
            expectedList.push(await element.getText());
        }


        //Asserting the text of the elements
        await expect(expectedList).toEqual(actualList);
    
    })

    it.only("Working with text input field", async () =>{
        //getting by accessibility id
        await $('~Views').click();

        //getting by xpath
        await $('//*[@content-desc="Auto Complete"]').click();

        //getting by accessibility id
        await $('~1. Screen Top').click();

        //getting by xpath
        const textInput = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');

        //typing the text
        await textInput.addValue('Canada');

        //Asserting the text we typed in the text field
        await expect(textInput).toHaveText('Canada');


    })


})








