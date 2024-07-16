import { hydrate } from 'preact';
import { Counter } from './Counter';
import { HomeLayout } from '../../layouts/HomeLayout';

function Page({ pageContext }) {
  return (
    <HomeLayout pageContext={pageContext}>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter initialState={pageContext.counter} />
        </li>
        
      </ul>
       <div>
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec varius velit, at pharetra odio. Nam sit amet lectus ac nulla congue auctor. Cras accumsan nisl ac enim tristique, non placerat purus pretium.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 1" />
        <p>Nulla facilisi. Vivamus faucibus fermentum est, at dictum est fringilla a. Donec luctus, orci sit amet hendrerit dapibus, erat nulla placerat est, non congue mauris odio ac nisl. Etiam et fringilla eros, id suscipit magna.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 2" />
        <p>Suspendisse potenti. Curabitur non massa ac nisi pharetra pretium. Integer vitae lacus a est ullamcorper fringilla. Proin tincidunt augue at erat egestas, non cursus ligula viverra.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 3" />
        <p>Vivamus sit amet ex eu metus bibendum finibus. Integer consequat efficitur mi, a elementum tortor scelerisque eu. Fusce venenatis vestibulum ante, nec congue odio. Integer nec turpis a justo vehicula ullamcorper.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 4" />
        <p>Morbi interdum, tortor sit amet consectetur efficitur, nulla eros feugiat turpis, a aliquam leo felis eget metus. Sed aliquam sem quis diam ultricies, et interdum purus cursus. Nam ut risus ligula.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 5" />
        <p>Aenean vehicula odio vel elit hendrerit, in fermentum sapien bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus a magna sit amet nulla luctus dictum non et augue.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 6" />
        <p>Quisque scelerisque, ipsum non tincidunt tempor, sapien nisi consequat dui, sit amet egestas orci turpis nec libero. Curabitur a libero sed turpis consectetur ullamcorper.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 7" />
        <p>Pellentesque sit amet sapien nec libero posuere luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 8" />
        <p>Curabitur nec justo id eros malesuada vestibulum. Phasellus interdum nunc sit amet augue hendrerit, nec posuere ligula volutpat. Ut dictum odio a dui sodales, a accumsan arcu sagittis.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 9" />
        <p>Mauris et urna sit amet ligula tristique dapibus. Cras volutpat libero non lacus tincidunt, at fringilla nulla consectetur. Suspendisse potenti. Nunc bibendum magna nec velit interdum, sit amet cursus nisi tincidunt.</p>
        <img src="https://via.placeholder.com/300x200" alt="Placeholder Image 10" />
    </div>
    </HomeLayout>
  );
}

// Client side hydration
if (typeof window !== 'undefined') {
  const body = document.querySelector('body');
  hydrate(<Page pageContext={window.pageContext} />, body);
}

// Server render helper
// Not importing 'preact-render-to-string'.renderToString directly,
// because it will end up unnecessarily in the client side bundle
function pageToHtml(pageContext, renderToString) {
  return renderToString(<Page pageContext={pageContext} />);
}

export { pageToHtml };
