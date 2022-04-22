// If you're using a different HTML File name than "index", cahnge the filename in the brackets on the end of line 6. For example "...File("site.html");"
// To deploy the site, click the blue "Deploy" button in the top right corner and select "New Deployment" and "Web App" as the deploment type.
// For future deployments/new versions you can just click deploy without selecting a deployment type.

function doGet() {
  return HtmlService.createHtmlOutputFromFile("index");
}
