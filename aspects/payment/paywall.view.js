const paywallView = (balance) => `
  <div id='paywall'>
    <div class="d-flex align-items-center justify-content-center text-center" style="margin: 0px auto; width: 1080px; height: 600px; margin-top: -600px; padding: 10px; z-index: 100;position: relative;color: #fff">
      <div>
        <h4 style="margin-bottom: 0px;">To Access this Content</h4>
        <span>please</span>
        <br/>
        <div class="row" style="margin-top: 15px;">
          <div class="col-5">
            <button class="btn btn-outline-success" style="float:right; margin-left: 25px; margin-right: -25px; padding: 5px;">
              <i class="icon icon-wallet"  style="margin-right: 5px;"></i>
              <span>Pay ${balance.quantity} bits</span>
            </button>
          </div>
          <div class="col-2" style="padding-top: 5px;">
            or
          </div>
          <div class="col-5">
            <button class="btn btn-outline-danger" style="float:left; margin-left: -25px; margin-right: 25px; padding: 5px;">
              <i class="icon icon-controller-play" style="margin-right: 0px;"></i>
              <span>Watch an Ad</span>
            </button>
          </div>
        </div>
        <a href="#">
          <p style="margin: 75px 0px -75px 0px;color:#fff;text-decoration: underline;">
            How does this work? 
            <span class="icon icon-help-with-circle"></span>
          </p>
        </a>
      </div>
    </div>
  </div>
`;

export default paywallView;