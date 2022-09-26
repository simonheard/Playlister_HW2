import React from "react";

export default class SongCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDragging: false,
            draggedTo: false
        }
    }
    handleDragStart = (event) => {
        event.dataTransfer.setData("song", event.target.id);
        this.setState(prevState => ({
            isDragging: true,
            draggedTo: prevState.draggedTo
        }));
    }
    handleDragOver = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragEnter = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: false
        }));
    }
    handleDrop = (event) => {
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("song");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);

        console.log("from ", sourceId, " to ", targetId);
        
        this.setState(prevState => ({
            isDragging: false,
            draggedTo: false
        }));

        // ASK THE MODEL TO MOVE THE DATA
        if (sourceId && targetId){
            this.props.moveCallback(sourceId, targetId);
        }
    }

    handleDeleteSong = (event) => {
        //event.stopPropagation();
        this.props.deleteSongCallback(this.getItemNum()-1);
    }

    handleEditSong = (event) => {
        //event.stopPropagation();
        this.props.editSongCallback(this.getItemNum()-1);
    }

    getItemNum = () => {
        return this.props.id.substring("playlist-song-".length);
    }

    render() {
        const { song } = this.props;
        let num = this.getItemNum();
        //console.log("props: " + this.props.id);
        let itemClass = "playlister-song";
        if (this.state.draggedTo) {
            itemClass = "playlister-song-dragged-to";
        }
        return (
            <div
                id={'song-' + num}
                className={itemClass}
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
                onDoubleClick={this.handleEditSong}
                draggable="true"
            >
                {num}. <a id={'song-' + num} href={"https://www.youtube.com/watch?v="+song.youTubeId}> {song.title} by {song.artist} </a>
                <input
                    type="button"
                    id={"deletesong-" + (num)}
                    className="song-card-button"
                    onClick={this.handleDeleteSong}
                    value={"X"} />
            </div>
        )
    }
}