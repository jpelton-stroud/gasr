/**
 * Run initializations on web app load.
 */
$(function () {
  // doSomething on document.ready()
  google.script.run
    .withSuccessHandler(showContent)
    .withFailureHandler(showError)
    .echo("Hello, cruel world!");
});
