import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
        const { songName, deleteSongCallback, hideDeleteSongModalCallback } = this.props;
        let name = "";
        if (songName){
            name = songName;
        }
        return (
            <div 
                className="modal" 
                id="delete-song-modal" 
                data-animation="slideInOutLeft">
                    <div className="modal-root" id='verify-delete-song-root'>
                        <div className="modal-north">
                            Remove song?
                        </div>
                        <div className="modal-center">
                            <div className="modal-center-content">
                                Are you sure you wish to permanently remove {name} from the playlist?
                            </div>
                        </div>
                        <div className="modal-south">
                            <input type="button" 
                                id="delete-song-confirm-button" 
                                className="modal-button" 
                                onClick={deleteSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="delete-song-cancel-button" 
                                className="modal-button" 
                                onClick={hideDeleteSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}