function miniplayerView() {
  return `
    <nav class="navbar fixed-bottom" style="background-color: #ffffff;height:52px;padding-top:3px;">
      <div class="row">
        <div class="col-6">
          <div class="row">
            <div class="col-3">
              <div class="row" style="padding: 0px 20px;">
                <span class="col mp-icon icon icon-controller-jump-to-start"></span>
                <span class="col mp-icon icon icon-controller-play"></span>
                <span class="col mp-icon icon icon-controller-next"></span>
              </div>
            </div>
            <div class="col-9" style="display:flex;justify-content:center;align-items:center;">
              <span style="padding-right:10px;">2:05</span>
              <div class="progress" style="height: 10px;width:100%;background-color: #bdbdbd;">
                <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span style="padding-left:10px;">4:20</span>
            </div>
          </div>
        </div>
        <div class="col-6" style="padding: 4px 20px;display:flex;">
          <img class="rounded" src="assets/img/album-artwork.jpg" width="40px" height="40px">
          <div style="padding: 0px 10px;">
            <div style="font-weight:700;font-size:14px;">Tiny Human</div>
            <div style="color: #555;font-size:12px;">Imogen Heap - Tiny Human</div>
          </div>
        </div>
      </div>
    </nav>
  `;
}

export default miniplayerView   