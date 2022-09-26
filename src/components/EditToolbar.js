import React from "react";

export default class EditToolbar extends React.Component {
    handleAddSong = () => {
        if(this.props.canAddSong){
            this.props.addSongCallback();
        }
    }
    handleKeyDown = (event) => {
        if ((event.metaKey || event.ctrlKey) && event.code === 'KeyZ') {
            console.log('Pressed Command/Control + Z');
            if(this.props.canUndo){
                this.props.undoCallback();
            }
        }
        if ((event.metaKey || event.ctrlKey) && event.code === 'KeyY') {
            console.log('Pressed Command/Control + Y');
            if(this.props.canRedo){
                this.props.redoCallback();
            }
        }
        
    }
    render() {
        const { canAddSong, canUndo, canRedo, canClose, 
                undoCallback, redoCallback, closeCallback} = this.props;
        let addSongClass = "toolbar-button";
        let undoClass = "toolbar-button";
        let redoClass = "toolbar-button";
        let closeClass = "toolbar-button";
        if (!canAddSong) addSongClass += "-disabled";
        if (!canUndo) undoClass += "-disabled";
        if (!canRedo) redoClass += "-disabled";
        if (!canClose) closeClass += "-disabled";
        document.addEventListener("keydown", this.handleKeyDown);
        return (
            <div id="edit-toolbar">
            <input 
                type="button" 
                id='add-song-button' 
                value="+" 
                className={addSongClass}
                onClick={this.handleAddSong}
            />
            <input 
                type="button" 
                id='undo-button' 
                value="⟲" 
                className={undoClass} 
                onClick={undoCallback}
            />
            <input 
                type="button" 
                id='redo-button' 
                value="⟳" 
                className={redoClass} 
                onClick={redoCallback}
            />
            <input 
                type="button" 
                id='close-button' 
                value="&#x2715;" 
                className={closeClass} 
                onClick={closeCallback}
            />
        </div>
        )
    }
}