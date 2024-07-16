import { renderToString } from "preact-render-to-string";
import getPage from "../../getPage.js";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export default async (req, res) => {
  // Find the built code of client/pages/home/home.page.jsx
  const {
    js,
    preloadJs,
    css,
    exports: { pageToHtml },
    liveReloadScript,
  } = await getPage("home", req.hostname);

  const pageContext = { counter: 10, urlPathname: req.path };
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
         <div style="padding: 20px;">
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec varius velit, at pharetra odio. Nam sit amet lectus ac nulla congue auctor. Cras accumsan nisl ac enim tristique, non placerat purus pretium.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 1">
        <p>Nulla facilisi. Vivamus faucibus fermentum est, at dictum est fringilla a. Donec luctus, orci sit amet hendrerit dapibus, erat nulla placerat est, non congue mauris odio ac nisl. Etiam et fringilla eros, id suscipit magna.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 2">
        <p>Suspendisse potenti. Curabitur non massa ac nisi pharetra pretium. Integer vitae lacus a est ullamcorper fringilla. Proin tincidunt augue at erat egestas, non cursus ligula viverra.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 3">
        <p>Vivamus sit amet ex eu metus bibendum finibus. Integer consequat efficitur mi, a elementum tortor scelerisque eu. Fusce venenatis vestibulum ante, nec congue odio. Integer nec turpis a justo vehicula ullamcorper.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 4">
        <p>Morbi interdum, tortor sit amet consectetur efficitur, nulla eros feugiat turpis, a aliquam leo felis eget metus. Sed aliquam sem quis diam ultricies, et interdum purus cursus. Nam ut risus ligula.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 5">
        <p>Aenean vehicula odio vel elit hendrerit, in fermentum sapien bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus a magna sit amet nulla luctus dictum non et augue.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 6">
        <p>Quisque scelerisque, ipsum non tincidunt tempor, sapien nisi consequat dui, sit amet egestas orci turpis nec libero. Curabitur a libero sed turpis consectetur ullamcorper.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 7">
        <p>Pellentesque sit amet sapien nec libero posuere luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 8">
        <p>Curabitur nec justo id eros malesuada vestibulum. Phasellus interdum nunc sit amet augue hendrerit, nec posuere ligula volutpat. Ut dictum odio a dui sodales, a accumsan arcu sagittis.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 9">
        <p>Mauris et urna sit amet ligula tristique dapibus. Cras volutpat libero non lacus tincidunt, at fringilla nulla consectetur. Suspendisse potenti. Nunc bibendum magna nec velit interdum, sit amet cursus nisi tincidunt.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 10">
    </div>
        <div id="vretail-app" data-vretail-project-id=PR-THxjdDzCbTLQIYDGOFCu9QwGu></div>
<script src="https://collab-test.core.vretail.space/vretail-collab.umd.js"></script>

      </body>
    </html>
  `;

  res.status(200).set({ "Content-Type": "text/html" }).end(html);
};
