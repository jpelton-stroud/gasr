const appTitle = "GASr Bootstrap5 Template";

function doGet(e) {
  let html = HtmlService.createTemplateFromFile("page/index");
  return html
    .evaluate()
    .setTitle(appTitle)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}

function scriptSuccess(success: boolean) {
  if (success)
    return {
      message: "This is an example of a script success",
      type: "success",
    };
  else throw new Error("This is an example of a script failure")
}
