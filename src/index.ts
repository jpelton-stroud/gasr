const appTitle = "GASr Bootstrap5 Template";

function doGet(e) {
  let html = HtmlService.createTemplateFromFile("page/html");
  return html.evaluate().setTitle(appTitle);
};
