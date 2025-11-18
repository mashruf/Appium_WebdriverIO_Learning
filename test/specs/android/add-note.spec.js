describe("Add note",()=>{
    it("skip tutorial", async ()=>{
        //click skip
        await $('//*[@text="SKIP"]').click();

        //assertion
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    })
    it("Add note, save changes and verify note", async ()=>{
        //click add note
        await $('//*[@text="Add note"]').click();

        //click text
        await $('//*[@text="Text"]').click();

        //asserton editing should be displayed
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        //add title of note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
        .addValue("Favorite superheroes");

        //Add note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
        .addValue("Spiderman\nSuperman\nHulk");

        //save note
        await driver.back();
        await driver.back();

        //Assertion note is saved
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'))
        .toBeDisplayed();

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'))
        .toHaveText('Favorite superheroes');


    })

    it("Delete note", async()=>{

        //click on save note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
        .click();

        //click on options
        await $('~More').click();

        //click delete
        await $('//*[@text="Delete"]').click();

        //click ok
        await $('//*[@text="OK"]').click();

        //assertion saved note is not displayed in home screen
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'))
        .not.toBeDisplayed();

        //click burger button
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
        .click();

        //go to trash
        await $('//*[@text="Trash Can"]').click();

        //assertion whether the note is deleted
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'))
        .toBeDisplayed();

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'))
        .toHaveText('Favorite superheroes');
    })
})