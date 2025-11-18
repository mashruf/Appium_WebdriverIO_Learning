class AddNoteScreen{

    get skipBtn(){
        return $('//*[@text="SKIP"]');
    }

    get addNoteText(){
        return $('//*[@text="Add note"]');
    }

    get addNote(){
        return $('//*[@text="Add note"]');
    }

    get text(){
        return $('//*[@text="Text"]');
    }

    get editingText(){
        return $('//*[@text="Editing"]');
    }

    get title(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get editNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    async saveNote(){
       await driver.back();
       await driver.back();
    }

    get noteVisible(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get noteTitleCheck(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }
}

export default new AddNoteScreen;