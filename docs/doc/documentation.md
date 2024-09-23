---
lang: ru-RU
title: Documentation
description: Documentation
---

```ts
<script setup lang="ts">
  import { LoremIpsum } from 'lorem-ipsum'
  import { SortableOptions } from 'sortablejs'
  import { computed, reactive } from 'vue'

  import { avatars } from '../assets/avatars'

  import PrioritySvg from './shared/PrioritySvg.vue'
  import UKanban from './UKanban.vue'
  import { KanbanColumn, UKanbanResult } from './uKanbanTypes'

  const lorem = new LoremIpsum()
  function generateMockData(col: number, row: number): KanbanColumn[] {
    const result = reactive<any>([])
    let itemId = 1
    let columnId = 1
    for (let i = 0; i < col; i++) {
      const items = []
      for (let i = 0; i < row; i++) {
        items.push({
          id: itemId,
          avatar: avatars[0],
          priority: 'High',
          branch: `TT-${itemId}-task-${itemId}`,
          title: `Task-${itemId}`,
          task: lorem.generateSentences(Math.floor(Math.random()) + 1),
        })
        itemId++
      }
      result.push({
        status: `Column-${columnId}`,
        items,
      })
      columnId++
    }
    return result
  }

  const options = computed<SortableOptions>(() => {
    return {
      group: { name: 'group' },
      animation: 300,
      swapThreshold: 1,
      forceFallback: true,
    }
  })
  function onUpdate(value: UKanbanResult) {
    console.info('update', value)
  }
</script>

<template>
  <div class="wrapp">
    <UKanban
      :columns="generateMockData(5, 3)"
      :options="options"
      @update="onUpdate"
    >
      <template #item="{ elem }">
        <div
          :key="elem.id"
          class="draggable"
        >
          <div class="app-card">
            <div class="app-card-header">
              <h4>{{ elem.title }}</h4>
              <div class="app-card-task">{{ elem.task }}</div>
            </div>
            <div class="app-card-bottom">
              <PrioritySvg :priority="elem.priority" />
              <div class="app-card-footer">
                <div class="app-card-branch">
                  {{ elem.branch }}
                </div>
                <img
                  class="app-card-avatar"
                  :src="elem.avatar"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </template>
    </UKanban>
  </div>
</template>
```
