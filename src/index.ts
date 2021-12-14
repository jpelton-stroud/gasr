const appTitle = "GASr Bootstrap5 Template";

function doGet(e) {
  let html = HtmlService.createTemplateFromFile("page/html");
  return html
    .evaluate()
    .setTitle(appTitle)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}
