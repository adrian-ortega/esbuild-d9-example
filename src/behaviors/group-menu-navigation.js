class GroupMenuBar {
  constructor(el) {
    this.el = el;
    this.walk();
  }


  walk() {
    // stuff;
  }
}

class GroupMenuNavigation {
  constructor() {
    this.menuBars = null;
  }

  attach(context, settings) {
    this.addEventListeners();
  }

  load() {
    [...document.querySelectorAll(
      '.group-horizontal-menu > nav > ul.menu'
    )].map(el => new GroupMenuBar(el))
  }

  addEventListeners() {
    window.addEventListener('load', this.load.bind(this))
  }
}

export default new GroupMenuNavigation();