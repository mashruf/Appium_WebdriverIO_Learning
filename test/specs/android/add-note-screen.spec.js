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
})







