function profileSummaryView(user) {
  return `
    <div class="btn-group">
      <button class="btn btn-outline-info" style="margin-left: 10px;padding:0px;"><img src="assets/img/avatar.png" style="width:30px;height:30px;" /></button>
      <button class="btn btn-outline-info" style="color:#fff !important;padding:8px;">
        ${user.name}
      </button>
      ${this.layout.balance}
    </div>
  `;
}

export default profileSummaryView