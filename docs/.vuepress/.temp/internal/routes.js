export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/projects/sr_scope/vue-kanban-doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/doc/demo.html", { loader: () => import(/* webpackChunkName: "doc_demo.html" */"C:/projects/sr_scope/vue-kanban-doc/docs/.vuepress/.temp/pages/doc/demo.html.js"), meta: {"title":"Demo"} }],
  ["/doc/documentation.html", { loader: () => import(/* webpackChunkName: "doc_documentation.html" */"C:/projects/sr_scope/vue-kanban-doc/docs/.vuepress/.temp/pages/doc/documentation.html.js"), meta: {"title":"Documentation"} }],
  ["/doc/get-started.html", { loader: () => import(/* webpackChunkName: "doc_get-started.html" */"C:/projects/sr_scope/vue-kanban-doc/docs/.vuepress/.temp/pages/doc/get-started.html.js"), meta: {"title":"Get started"} }],
  ["/doc/", { loader: () => import(/* webpackChunkName: "doc_index.html" */"C:/projects/sr_scope/vue-kanban-doc/docs/.vuepress/.temp/pages/doc/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/projects/sr_scope/vue-kanban-doc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
