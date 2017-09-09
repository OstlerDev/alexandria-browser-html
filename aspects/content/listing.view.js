function listingView() {
  return `
    <div class="container" style="margin-top: 100px;margin-bottom:200px;">
      <h4 style="margin-bottom: 25px;">Suggested Content</h4>
      <div class="row">
        <a href="video.html" class="col-3 no-link-styling">
          <div class="card" style="margin-bottom: 15px;">
            <div style="margin-bottom:-30px;">
              <button class="btn btn-outline-primary btn-white" style="padding:3px 5px;">
                <span class="icon icon-credit" style="color: #5cb85c"></span>
                <span class="icon icon-clapperboard"></span>
              </button>
            </div>
            <img class="card-img-top" src="assets/img/apollo-11-poster.jpg" style="max-height: 125px; width: auto; object-fit: cover;" alt="Card image cap">
            <p style="text-align: right; margin-top: -25px;color:#fff;padding-right:5px;margin-bottom:-5px;background-color:rgba(0,0,0,0.3);">2:00</p>
            <div class="card-block" style="padding: 10px;">
              <strong>Apollo 11 - When Man land...</strong>
              <p style="margin-bottom:-10px;"><img class="rounded-circle" src="assets/img/nasa.jpg" width="30" height="30" style="margin-right:3px;margin-bottom:3px;margin-left:-5px;"><span style="padding-top:10px;">NASA Archive</span></p>
              <button class="btn btn-sm btn-outline-secondary" style="float:right;margin-right:-10px;margin-bottom:-10px;margin-top:-16px;">13,418 Views</button>
            </div>
          </div>
        </a>
        <a href="audio.html" class="col-3 no-link-styling">
          <div class="card" style="margin-bottom: 15px;">
            <div style="margin-bottom:-30px;">
              <button class="btn btn-outline-primary btn-white" style="padding:3px 5px;">
                <span class="icon icon-credit" style="color: #5cb85c"></span>
                <span class="icon icon-beamed-note"></span>
              </button>
            </div>
            <img class="card-img-top" src="assets/img/album-artwork.jpg" style="max-height: 125px; width: auto; object-fit: cover;" alt="Card image cap">
            <p style="text-align: right; margin-top: -25px;color:#fff;padding-right:5px;margin-bottom:-5px;background-color:rgba(0,0,0,0.3);">4:20</p>
            <div class="card-block" style="padding: 10px;">
              <strong>Tiny Human</strong>
              <p style="margin-bottom:-10px;"><img class="rounded-circle" src="assets/img/imogen-heap.jpg" width="30" height="30" style="margin-right:3px;margin-bottom:3px;margin-left:-5px;"><span style="padding-top:10px;">Imogen Heap</span></p>
              <button class="btn btn-sm btn-outline-secondary" style="float:right;margin-right:-10px;margin-bottom:-10px;margin-top:-16px;">8,194 Views</button>
            </div>
          </div>
        </a>
        <a href="game.html" class="col-3 no-link-styling">
          <div class="card" style="margin-bottom: 15px;">
            <div style="margin-bottom:-30px;">
              <button class="btn btn-outline-primary btn-white" style="padding:3px 5px;">
                <span class="icon icon-game-controller"></span>
              </button>
            </div>
            <img class="card-img-top" src="assets/img/2048.png" style="max-height: 125px; width: auto; object-fit: cover;" alt="Card image cap">
            <div class="card-block" style="padding: 10px;">
              <strong>2048</strong>
              <p style="margin-bottom:-10px;"><img class="rounded-circle" src="assets/img/gabriele.jpg" width="30" height="30" style="margin-right:3px;margin-bottom:3px;margin-left:-5px;"><span style="padding-top:10px;">Gabriele...</span></p>
              <button class="btn btn-sm btn-outline-secondary" style="float:right;margin-right:-10px;margin-bottom:-10px;margin-top:-16px;">123,456 Views</button>
            </div>
          </div>
        </a>
        <a href="pdf.html" class="col-3 no-link-styling">
          <div class="card" style="margin-bottom: 15px;">
            <div style="margin-bottom:-30px;">
              <button class="btn btn-outline-primary btn-white" style="padding:3px 5px;">
                <span class="icon icon-clipboard"></span>
              </button>
            </div>
            <img class="card-img-top" src="assets/img/bitcoin-cover.jpg" style="max-height: 125px; width: auto; object-fit: cover;" alt="Card image cap">
            <p style="text-align: right; margin-top: -25px;color:#fff;padding-right:5px;margin-bottom:-5px;background-color:rgba(0,0,0,0.3);">9 pages</p>
            <div class="card-block" style="padding: 10px;">
              <strong>Bitcoin Whitepaper</strong>
              <p style="margin-bottom:-10px;"><img class="rounded-circle" src="assets/img/bitcoin.png" width="30" height="30" style="margin-right:3px;margin-bottom:3px;margin-left:-5px;"><span style="padding-top:10px;">Satoshi N...</span></p>
              <button class="btn btn-sm btn-outline-secondary" style="float:right;margin-right:-10px;margin-bottom:-10px;margin-top:-16px;">1,205,841 Views</button>
            </div>
          </div>
        </a>
        <a href="text.html" class="col-3 no-link-styling">
          <div class="card" style="margin-bottom: 15px;">
            <div style="margin-bottom:-30px;">
              <button class="btn btn-outline-primary btn-white" style="padding:3px 5px;">
                <span class="icon icon-text"></span>
              </button>
            </div>
            <img class="card-img-top" src="assets/img/markdown.png" style="max-height: 125px; width: auto; object-fit: cover;" alt="Card image cap">
            <div class="card-block" style="padding: 10px;">
              <strong>Markdown/Text</strong>
              <p style="margin-bottom:-10px;"><img class="rounded-circle" src="assets/img/sky.jpg" width="30" height="30" style="margin-right:3px;margin-bottom:3px;margin-left:-5px;"><span style="padding-top:10px;">OstlerDev</span></p>
              <button class="btn btn-sm btn-outline-secondary" style="float:right;margin-right:-10px;margin-bottom:-10px;margin-top:-16px;">3,031 Views</button>
            </div>
          </div>
        </a>
        <a href="image.html" class="col-3 no-link-styling">
          <div class="card" style="margin-bottom: 15px;">
            <div style="margin-bottom:-30px;">
              <button class="btn btn-outline-primary btn-white" style="padding:3px 5px;">
                <span class="icon icon-image"></span>
              </button>
            </div>
            <img class="card-img-top" src="assets/img/bob-ross.jpg" style="max-height: 125px; width: auto; object-fit: cover;" alt="Card image cap">
            <div class="card-block" style="padding: 10px;">
              <strong>Mountain Retreat</strong>
              <p style="margin-bottom:-10px;"><img class="rounded-circle" src="assets/img/bobr.jpg" width="30" height="30" style="margin-right:3px;margin-bottom:3px;margin-left:-5px;"><span style="padding-top:10px;">Bob Ross</span></p>
              <button class="btn btn-sm btn-outline-secondary" style="float:right;margin-right:-10px;margin-bottom:-10px;margin-top:-16px;">3,031 Views</button>
            </div>
          </div>
        </a>
        <a href="code.html" class="col-3 no-link-styling">
          <div class="card" style="margin-bottom: 15px;">
            <div style="margin-bottom:-30px;">
              <button class="btn btn-outline-primary btn-white" style="padding:3px 5px;">
                <span class="icon icon-credit" style="color: #5cb85c"></span>
                <span class="icon icon-code"></span>
              </button>
            </div>
            <img class="card-img-top" src="assets/img/js.png" style="max-height: 125px; width: auto; object-fit: cover;" alt="Card image cap">
            <div class="card-block" style="padding: 10px;">
              <strong>Javascript Plugin</strong>
              <p style="margin-bottom:-10px;"><img class="rounded-circle" src="assets/img/sky.jpg" width="30" height="30" style="margin-right:3px;margin-bottom:3px;margin-left:-5px;"><span style="padding-top:10px;">OstlerDev</span></p>
              <button class="btn btn-sm btn-outline-secondary" style="float:right;margin-right:-10px;margin-bottom:-10px;margin-top:-16px;">3,031 Views</button>
            </div>
          </div>
        </a>
      </div>
    </div>
  `;
}

export default listingView