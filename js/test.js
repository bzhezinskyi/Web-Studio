({
  toCloseModalClickEscape(e) {
    const isEscape = e.code === "Escape";
    if (isEscape) {
      window.removeEventListener(
        "keydown",
        this.toCloseModalClickEscape.bind(this)
      );
    }
  },
})();
