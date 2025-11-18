import DeleteNote from "../../screenobjects/android/delete-note.screen"


describe("Screen object model for deleting note",()=>{
    it("Delete note",async()=>{
        
        //skip tutorial
        await DeleteNote.skipTutorial();
        
        //Add and save note
        await DeleteNote.addAndSaveNote("Favourite Movie","IT\nX-Men\nDhoom");

        //Delete Note
        await DeleteNote.savedNote.click();
        await DeleteNote.moreOption.click();
        await DeleteNote.delete.click();
        await DeleteNote.ok.click();
        await DeleteNote.burgerButton.click();
        await DeleteNote.trash.click();
        await expect(DeleteNote.noteInTrash).toBeDisplayed();
        
        
    })
})