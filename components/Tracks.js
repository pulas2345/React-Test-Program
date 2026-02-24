import React, { Component } from "react";
import PlayIcon from "@material-ui/icons/PlayCircleFilled";
import PauseIcon from "@material-ui/icons/PauseCircleFilled";
import ErrorIcon from "@material-ui/icons/Error";
import { motion } from "framer-motion";

class Tracks extends Component {
  state = {
    playing: false,
    demoAudio: null,
    playingPreviewUrl: null,
    active: true,
  };

  playAudio = (previewUrl) => () => {
    const demoAudio = new Audio(previewUrl);

    if (!this.state.playing) {
      demoAudio.volume = 0.2;
      demoAudio.play();
      this.setState({
        playing: true,
        demoAudio,
        playingPreviewUrl: previewUrl,
      });
    } else {
      this.state.demoAudio.pause();

      if (this.state.playingPreviewUrl === previewUrl) {
        this.setState({ playing: false });
      } else {
        demoAudio.volume = 0.2;
        demoAudio.play();
        this.setState({ demoAudio, playingPreviewUrl: previewUrl });
      }

      if (!this.state.active) {
        demoAudio.pause();
      }
    }
  };

  trackIcon = (track) => {
    if (!track.preview_url) {
      return <ErrorIcon fontSize="large" />;
    }

    if (
      this.state.playing &&
      this.state.playingPreviewUrl == track.preview_url
    ) {
      return <PauseIcon fontSize="large" />;
    }

    return <PlayIcon fontSize="large" />;
  };

  render() {
    const { tracks } = this.props;

    return (
      <div>
        {tracks.map((track) => {
          const { id, name, album, preview_url } = track;

          return (
            <motion.div
              key={id}
              className="track"
              onClick={this.playAudio(preview_url)}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: 1, duration: 0.5 },
              }}
              exit={{
                opacity: 0,
                scale: 0,
                transition: { delay: 0.5, duration: 0.5 },
              }}
            >
              <img
                src={album.images[0].url}
                alt="track-cover"
                className="track-image"
              />
              <p className="track-text">{name}</p>
              <p className="track-icon">{this.trackIcon(track)}</p>
            </motion.div>
          );
        })}
      </div>
    );
  }
}

export default Tracks;
