const appTitle = "GASr Bootstrap5 Template";

function doGet(e) {
  let html = HtmlService.createHtmlOutputFromFile("page/html");
  return html.setTitle(appTitle);
};
