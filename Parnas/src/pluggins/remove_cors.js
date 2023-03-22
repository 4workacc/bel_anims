export const remove_cors = () => {
    return {
      name: "no-attribute",
      transformIndexHtml(html) {
        return html.replace(`type="module" crossorigin`, "");
      }
  }
}
  


