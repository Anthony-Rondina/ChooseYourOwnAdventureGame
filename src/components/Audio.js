const Player = React.createClass({

    getInitialState: function () {
        return {
            songs: [],
            playing: false
        }
    },

    audio: new Audio,

    playSong: function () {
        console.log("play")
        this.setState({ playing: true });
        this.audio.src = this.state.songs[this.props.song];
        this.audio.play();
    },

    pauseSong: function () {
        console.log("pause");
        this.setState({ playing: false });
        this.audio.pause();
    },

    render: function () {
        return (
            <p onClick={this.state.playing ? this.pauseSong : this.playSong}>Play/Pause</p>
        )
    }

});