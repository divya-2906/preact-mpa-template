import { renderToString } from "preact-render-to-string";
import getPage from "../../getPage.js";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export default async (req, res) => {
  // Find the built code of client/pages/about/about.page.jsx
  const {
    js,
    preloadJs,
    css,
    exports: { pageToHtml },
    liveReloadScript,
  } = await getPage("about", req.hostname);

  const pageContext = { urlPathname: req.path };
  const pageHtml = pageToHtml(pageContext, renderToString);
  const html = /* html */ `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="${css}">
          <link rel="stylesheet"
  href="https://collab-test.core.vretail.space/style.css"/>
        ${preloadJs
          .map((js) => /* html */ `<link rel="modulepreload" href="${js}">`)
          .join("\n")}
        <script>window.pageContext=${JSON.stringify(pageContext)};</script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" integrity="sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js" integrity="sha512-7Pi/otdlbbCR+LnW+F7PwFcSDJOuUJB3OxtEHbg4vSMvzvJjde4Po1v4BR9Gdc9aXNUNFVUY+SK51wWT8WF0Gg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script type="module" src="${js}"></script>
        ${
          liveReloadScript
            ? /* html */ `<script src="${liveReloadScript}"></script>`
            : ""
        }
      </head>
      <body>
        ${pageHtml}
        <div id="vretail-app" data-vretail-project-id=PR-THxjdDzCbTLQIYDGOFCu9QwGu></div>
<script src="https://collab-test.core.vretail.space/vretail-collab.umd.js"></script>
      </body>
    </html>
  `;

  res.status(200).set({ "Content-Type": "text/html" }).end(html);
};
