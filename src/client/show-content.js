/**
 * loads page content
 */
function showContent(data) {
  $("main").fadeOut("slow", () => {
    $("main").html(data).fadeIn("fast");
  });
}
