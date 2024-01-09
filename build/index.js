var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/components/fathom.tsx
import { useLocation } from "@remix-run/react";
import { load, trackPageview } from "fathom-client";
import { useEffect, useRef } from "react";
var FATHOM_ID = "DAGHWZCL", FATHOM_URL = "https://cdn.usefathom.com/script.js", Fathom = () => {
  let location = useLocation(), fathom = useRef({
    isLoaded: !1,
    location: {
      pathname: "",
      search: ""
    }
  });
  return useEffect(() => {
    fathom.current.isLoaded === !1 ? (load(FATHOM_ID, {
      url: FATHOM_URL,
      includedDomains: [
        "inwavelabs.com",
        "*.inwavelabs.com",
        "www.inwavelabs.com"
      ],
      excludedDomains: [
        "inwavelabs.netlify.app",
        "localhost",
        "127.0.0.1",
        "localhost:3000"
      ]
    }), fathom.current.isLoaded = !0, fathom.current.location.pathname = location.pathname, fathom.current.location.search = location.search) : (fathom.current.location.pathname !== location.pathname || fathom.current.location.search !== location.search) && (trackPageview(), fathom.current.location.pathname = location.pathname, fathom.current.location.search = location.search);
  }, [location.pathname, location.search]), null;
}, fathom_default = Fathom;

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-FGQURYKU.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [{ rel: "stylesheet", href: tailwind_default }];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", className: "", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(
        "link",
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 22,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(
        "link",
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 27,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(
        "link",
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 33,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2("link", { rel: "manifest", href: "/site.webmanifest" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "bg-midnight bg-gradient-to-b from-midnight to-dawn text-moonlight bg-no-repeat min-h-full bg-fixed overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(fathom_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Inwave Labs" },
  { name: "description", content: "Inwave Labs" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV3("div", { className: "overflow-y-auto h-screen grid items-center", children: /* @__PURE__ */ jsxDEV3("div", { className: "text-md leading-7 px-6 py-12 md:px-8 md:py-24 font-mono md:text-lg md:leading-9 mx-auto max-w-5xl", children: [
    /* @__PURE__ */ jsxDEV3("main", { children: [
      /* @__PURE__ */ jsxDEV3("section", { className: "mb-9", children: /* @__PURE__ */ jsxDEV3("h1", { className: "mb-3 md:mb-0", children: [
        /* @__PURE__ */ jsxDEV3("strong", { className: "font-black", children: "Inwave Labs" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 17,
          columnNumber: 15
        }, this),
        " is an independent software company."
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("section", { className: "mb-9", children: /* @__PURE__ */ jsxDEV3("p", { className: "mb-3 md:mb-0", children: "We craft software of all kinds \u2014 apps, games, tools and websites." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("section", { className: "mb-9", children: /* @__PURE__ */ jsxDEV3("p", { className: "mb-3 md:mb-0", children: [
        "Inwave Labs is run by",
        " ",
        /* @__PURE__ */ jsxDEV3(
          "a",
          {
            href: "https://kennygoff.com",
            className: "font-black underline hover:text-white",
            children: "Kenny Goff"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 29,
            columnNumber: 15
          },
          this
        ),
        ", a creative developer. We made the game",
        " ",
        /* @__PURE__ */ jsxDEV3(
          "a",
          {
            href: "https://doubleturngame.com",
            className: "font-black underline hover:text-white",
            children: "Double Turn"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 36,
            columnNumber: 15
          },
          this
        ),
        ", a pro-wrestling platform fighter. We are working on something new!"
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("section", { className: "mb-9", children: [
        /* @__PURE__ */ jsxDEV3("h2", { className: "font-black", children: "Get in touch" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("p", { children: [
          /* @__PURE__ */ jsxDEV3(
            "span",
            {
              "aria-hidden": !0,
              className: "select-none inline-block w-[18px] md:w-[22px] mr-2",
              children: [
                "\u2192",
                " "
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 85,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV3(
            "a",
            {
              href: "mailto:kenny@inwavelabs.com",
              className: "underline hover:text-white",
              children: "kenny@inwavelabs.com"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 91,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3("footer", { children: [
      /* @__PURE__ */ jsxDEV3("p", { children: "Crafted in Hoboken, NJ" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this),
      "Made with ",
      /* @__PURE__ */ jsxDEV3("span", { style: { fontFamily: "none" }, children: "\u2665\uFE0E" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 102,
        columnNumber: 21
      }, this),
      " by",
      " ",
      /* @__PURE__ */ jsxDEV3(
        "a",
        {
          href: "https://kennygoff.com",
          className: "font-black underline hover:text-white",
          children: "Kenny Goff"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 103,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3("p", { children: "Inwave Labs, LLC \xA9 2017-2023" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 109,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ZMUMHI4A.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-KNFJXIPH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-5UZIPG5V.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SRGRBGIA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-QM2KKAP3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "187bbed1", hmr: { runtime: "/build/_shared/chunk-5UZIPG5V.js", timestamp: 1704836477091 }, url: "/build/manifest-187BBED1.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
