function navbarView() {
  const { items, profile } = this.layout;

  return `
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="index.html">
        <img src="assets/img/alexandria-logo.png" width="30px" height="30px" class="d-inline-block align-top" alt="">
        ΛLΞXΛNDRIΛ
      </a>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto" style="list-style: none;width: 100%; padding-right: 20px; padding-left: 25px;  margin: 0px auto; text-align: center; display: block;">
          ${items.map(item => `
            <li style="display:inline-block;">
              ${item}
            </li>
          `)}
        </ul>
      </div>

      <div>
        ${profile}
      </div>
    </nav>  
  `;
}

export default navbarView