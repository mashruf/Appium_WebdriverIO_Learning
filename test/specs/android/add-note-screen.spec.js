import AddNoteScreen from "../../screenobjects/android/add-note.screen";

describe("Add note",()=>{
    it("skip tutorial", async ()=>{
        //click skip
        await AddNoteScreen.skipBtn.click();

        //assertion
        await expect(AddNoteScreen.addNoteText).toBeDisplayed();
    })
    it("Add note, save changes and verify note", async ()=>{
        //click add note
        await AddNoteScreen.addNote.click();

        //click text
        await AddNoteScreen.text.click();

        //asserton editing should be displayed
        await expect(AddNoteScreen.editingText).toBeDisplayed();

        //add title of note
        await AddNoteScreen.title.addValue("Favorite superheroes");

        //Add note
        await AddNoteScreen.editNote.addValue("Spiderman\nSuperman\nHulk");

        //save note
        AddNoteScreen.saveNote();

        //Assertion note is saved
        await expect(AddNoteScreen.noteVisible).toBeDisplayed();

        await expect(AddNoteScreen.noteTitleCheck).toHaveText('Favorite superheroes');


    })

    xit("Delete note", async()=>{

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







