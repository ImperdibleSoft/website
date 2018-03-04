import React from 'react';

const Avatar = ({
  className = '',
  main,
  pair,
}) => (
  <div className={`Avatar ${pair ? 'Avatar--paired' : ''} ${className}`}>
    { main &&
      <div className="Avatar-main">
        <img className={`Avatar-picture ${main.className}`} src={main.url} />
      </div>
    }

    { pair &&
      <div className="Avatar-pair">
        <img className={`Avatar-picture ${pair.className}`} src={pair.url} />
      </div>
    }
  </div>
);

Avatar.displayName = 'Avatar';

export default Avatar;
