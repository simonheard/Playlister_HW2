import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * DeleteSong_Transaction
 * 
 * This class represents a transaction that works with delete
 * song. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initPosInList, initSongObject) {
        super();
        this.app = initApp;
        this.posInList = initPosInList;
        this.songObject = initSongObject;
    }

    doTransaction() {
        this.app.deleteSong(this.posInList);
    }
    
    undoTransaction() {
        this.app.undoDeleteSong(this.posInList, this.songObject);
    }
}