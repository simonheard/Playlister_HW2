import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * EditSong_Transaction
 * 
 * This class represents a transaction that works with edit
 * song. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initPosInList, initOldSong, initNewSong) {
        super();
        this.app = initApp;
        this.posInList = initPosInList;
        this.oldSong = initOldSong;
        this.newSong = initNewSong;
    }

    doTransaction() {
        this.app.editSong(this.posInList, this.newSong);
    }
    
    undoTransaction() {
        this.app.editSong(this.posInList, this.oldSong);
    }
}