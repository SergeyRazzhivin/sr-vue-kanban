export const SEARCH_INDEX = [
  {
    "title": "Home",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Demo",
    "headers": [],
    "path": "/doc/demo.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Documentation",
    "headers": [],
    "path": "/doc/documentation.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Get started",
    "headers": [
      {
        "level": 3,
        "title": "Instalation",
        "slug": "instalation",
        "link": "#instalation",
        "children": []
      },
      {
        "level": 3,
        "title": "Data",
        "slug": "data",
        "link": "#data",
        "children": []
      },
      {
        "level": 3,
        "title": "Template",
        "slug": "template",
        "link": "#template",
        "children": []
      }
    ],
    "path": "/doc/get-started.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/doc/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
