const balanceSummaryView = (balance) => `
  <button class="btn btn-outline-success" style="padding:8px;" id="bitCountBtn">
    <span id='bitCount'>${balance.quantity}</span> bits
  </button>
`;

export default balanceSummaryView