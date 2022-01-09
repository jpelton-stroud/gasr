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

/**
 * loads page content
 */
function showContent(data) {
  $("main").fadeOut("slow", () => {
    $("main").html(data).fadeIn("fast");
  });
}

/**
 * Logs an error message and shows an alert to the user.
 */
function showError(error) {
  console.log(error);
  window.alert("An error has occurred, please try again.");
}
