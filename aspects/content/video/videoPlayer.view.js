function videoPlayerView() {
  const { video: { url, types }, artifact: { fileInfo, title } } = this;
  const poster = fileInfo.files.find(f => 'coverArt' === f.type).originUrl;

  return `
    <div id='video' style="width: 1080px; height: 600px; margin-left: auto; margin-right: auto; display: block; z-index: -1; position: static;" id="vidContainer">
    <h2>${title}</h2>
      <video id="my-video" class="video-js vjs-big-play-centered"
        poster='${poster}' controls preload="auto" data-setup="{ controls: true, }" style="width: 100%; height: 100%; background-size: 100% 100%; object-fit: fill;">
        ${types.map(type => `
          <source src='${url}' type='${type}'>
        `)}
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a web browser that
          <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
        </p>
      </video>
    </div>
    `;
}

export default videoPlayerView