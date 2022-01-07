export const appTitle = "Google Apps Script template";

/**
 * Generates the app page from a template file and returns it to the client
 * @returns HtmlOutput
 */
export function doGet(): GoogleAppsScript.HTML.HtmlOutput {
  return HtmlService.createTemplateFromFile("templates/page")
    .evaluate()
    .setTitle(appTitle);
}
