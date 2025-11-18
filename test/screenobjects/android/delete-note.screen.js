import AddNoteScreen from "./add-note.screen";

class DeleteNote{
    async skipTutorial(){
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.addNoteText).toBeDisplayed();
    }

    async addAndSaveNote(noteHeader, noteBody){
        
        await AddNoteScreen.addNote.click();
        
        await AddNoteScreen.text.click();
        
        await expect(AddNoteScreen.editingText).toBeDisplayed();
        
        await AddNoteScreen.title.addValue(noteHeader);
        
        await AddNoteScreen.editNote.addValue(noteBody);
        
        AddNoteScreen.saveNote();
        
        await expect(AddNoteScreen.noteVisible).toBeDisplayed();
        
        await expect(AddNoteScreen.noteTitleCheck).toHaveText(noteHeader);
    }

    get savedNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get moreOption(){
        return $('~More');
    }

    get delete(){
        return $('//*[@text="Delete"]');
    }

    get ok(){
        return $('//*[@text="OK"]');
    }

    get burgerButton(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trash(){
        return $('//*[@text="Trash Can"]');
    }

    get noteInTrash(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

}

export default new DeleteNote;