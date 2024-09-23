
  import { defineAsyncComponent } from 'vue'
import { defineClientConfig } from 'vuepress/client'

import { applyClientSetup } from 'C:/projects/npm/kanban-doc/node_modules/.pnpm/vuepress-theme-reco@2.0.0-rc.19_@algolia+client-search@4.24.0_@types+node@22.5.5_jiti@1.21.6__ygew7zyjwvlqjdg3xz5enhohry/node_modules/vuepress-theme-reco/lib/client/clientSetup.js'
import { applyClientEnhance } from 'C:/projects/npm/kanban-doc/node_modules/.pnpm/vuepress-theme-reco@2.0.0-rc.19_@algolia+client-search@4.24.0_@types+node@22.5.5_jiti@1.21.6__ygew7zyjwvlqjdg3xz5enhohry/node_modules/vuepress-theme-reco/lib/client/clientEnhance.js'

import * as layouts from 'C:/projects/npm/kanban-doc/node_modules/.pnpm/vuepress-theme-reco@2.0.0-rc.19_@algolia+client-search@4.24.0_@types+node@22.5.5_jiti@1.21.6__ygew7zyjwvlqjdg3xz5enhohry/node_modules/vuepress-theme-reco/lib/client/layouts/index.js'

  const layoutsFromDir = {}
export default defineClientConfig({
  enhance(...args) {
    applyClientEnhance(...args)
  },
  setup() {
    applyClientSetup()
  },
  // @ts-ignore
  layouts: { ...layouts, ...layoutsFromDir },
})
