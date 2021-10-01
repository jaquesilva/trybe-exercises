import React from 'react';
import VideoGame from './VideoGame';

class VideoGameList extends React.Component {
  render() {
    const games = this.props.games;

    return (
      <div>
        {games.map((game) => (
          <VideoGame game={game} />
        ))}
      </div>
    );
  }
}

export default VideoGameList;