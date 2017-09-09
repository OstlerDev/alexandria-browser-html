function mainLayoutView() {
  const { navbar, main, footer } = this.layout;

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="assets/img/favicon.ico">

        <title>Alexandria</title>

        <!-- Bootstrap core CSS -->
        <link href="assets/css/bootstrap.min.css" rel="stylesheet">
        <link href="assets/css/entypo.css" rel="stylesheet">

        <link href="assets/css/animate.css" rel="stylesheet">
        <link href="assets/css/flag-icon.min.css" rel="stylesheet">

        <link href="http://vjs.zencdn.net/6.2.0/video-js.css" rel="stylesheet">
        <link href="assets/css/alexandria.videojs.css" rel="stylesheet"> 
        <link href="assets/css/bs-marketing.block.css" rel="stylesheet"> 

        <style type="text/css">
          .vjs-poster {
            background-size: 100%;
          }

          .blur {
            -webkit-filter: blur(15px);
            -moz-filter: blur(15px);
            -o-filter: blur(15px);
            -ms-filter: blur(15px);
            filter: blur(15px);
          }

          .btn-outline-secondary {
            border-color: #333 !important;
            color: #333 !important;;
          }

          .btn-outline-white {
            border-color: #fff;
            color: #fff;
            background-color: rgba(255,255,255,0);
          }

          .outline-white {
            border-color: #fff;
          }

          .btn-outline-white:hover {
            background-color: rgba(255,255,255,0.2);
          }

          .btn-white {
            color: #fff;
          }

          .no-link-styling {
            text-decoration: none;
            color: #292b2c;
            cursor: pointer; 
            cursor: hand;
          }

          .no-link-styling:hover {
            color: #000;
          }

          .dropdown-item .narrow {
            padding-left: 5px;
            padding-right: 5px;
          }

          .fixed-bottom {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 1030;
            margin-top: -50px;
          }

          .app-block-footer {
            background-color: rgb(27, 28, 29);
            color: #444;
            color: rgba(116, 119, 123, .5);
          }

          .mp-icon {
            font-size: 2em;
            padding-left: 5px;
            padding-right: 5px;
          }
        </style>
      </head>

      <body>

        ${navbar}

        <main>
          ${main}
        </main>

        ${footer}
      </body>
    </html>

  `;
}

export default mainLayoutView