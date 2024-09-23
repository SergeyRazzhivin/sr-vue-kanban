import{_ as n,c as a,a as p,o as t}from"./app-C7qooByP.js";const e={};function o(l,s){return t(),a("div",null,s[0]||(s[0]=[p(`<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> LoremIpsum <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;lorem-ipsum&#39;</span></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> SortableOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;sortablejs&#39;</span></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> avatars <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../assets/avatars&#39;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">import</span> PrioritySvg <span class="token keyword">from</span> <span class="token string">&#39;./shared/PrioritySvg.vue&#39;</span></span>
<span class="line">  <span class="token keyword">import</span> UKanban <span class="token keyword">from</span> <span class="token string">&#39;./UKanban.vue&#39;</span></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> KanbanColumn<span class="token punctuation">,</span> UKanbanResult <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./uKanbanTypes&#39;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> lorem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoremIpsum</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">generateMockData</span><span class="token punctuation">(</span>col<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> row<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> KanbanColumn<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token generic-function"><span class="token function">reactive</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">let</span> itemId <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">let</span> columnId <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> col<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> row<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          id<span class="token operator">:</span> itemId<span class="token punctuation">,</span></span>
<span class="line">          avatar<span class="token operator">:</span> avatars<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          priority<span class="token operator">:</span> <span class="token string">&#39;High&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          branch<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">TT-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>itemId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-task-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>itemId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">          title<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Task-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>itemId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">          task<span class="token operator">:</span> lorem<span class="token punctuation">.</span><span class="token function">generateSentences</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        itemId<span class="token operator">++</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        status<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Column-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>columnId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">        items<span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      columnId<span class="token operator">++</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> result</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token generic-function"><span class="token function">computed</span><span class="token generic class-name"><span class="token operator">&lt;</span>SortableOptions<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      group<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;group&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      animation<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span></span>
<span class="line">      swapThreshold<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      forceFallback<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">onUpdate</span><span class="token punctuation">(</span>value<span class="token operator">:</span> UKanbanResult<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;update&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;wrapp&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>UKanban</span>
<span class="line">      <span class="token operator">:</span>columns<span class="token operator">=</span><span class="token string">&quot;generateMockData(5, 3)&quot;</span></span>
<span class="line">      <span class="token operator">:</span>options<span class="token operator">=</span><span class="token string">&quot;options&quot;</span></span>
<span class="line">      <span class="token decorator"><span class="token at operator">@</span><span class="token function">update</span></span><span class="token operator">=</span><span class="token string">&quot;onUpdate&quot;</span></span>
<span class="line">    <span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>template #item<span class="token operator">=</span><span class="token string">&quot;{ elem }&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>div</span>
<span class="line">          <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;elem.id&quot;</span></span>
<span class="line">          <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;draggable&quot;</span></span>
<span class="line">        <span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;app-card&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;app-card-header&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">              <span class="token operator">&lt;</span>h4<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> elem<span class="token punctuation">.</span>title <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">&gt;</span></span>
<span class="line">              <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;app-card-task&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> elem<span class="token punctuation">.</span>task <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;app-card-bottom&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">              <span class="token operator">&lt;</span>PrioritySvg <span class="token operator">:</span>priority<span class="token operator">=</span><span class="token string">&quot;elem.priority&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">              <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;app-card-footer&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">                <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;app-card-branch&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">                  <span class="token punctuation">{</span><span class="token punctuation">{</span> elem<span class="token punctuation">.</span>branch <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">                <span class="token operator">&lt;</span>img</span>
<span class="line">                  <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;app-card-avatar&quot;</span></span>
<span class="line">                  <span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">&quot;elem.avatar&quot;</span></span>
<span class="line">                  alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span></span>
<span class="line">                <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">              <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>UKanban<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const i=n(e,[["render",o],["__file","documentation.html.vue"]]),r=JSON.parse('{"path":"/doc/documentation.html","title":"Documentation","lang":"ru-RU","frontmatter":{"lang":"ru-RU","title":"Documentation","description":"Documentation"},"headers":[],"git":{"updatedTime":1727107214000,"contributors":[{"name":"SergeyRazjiwin","email":"razgiva@gmail.com","commits":1}]},"filePathRelative":"doc/documentation.md"}');export{i as comp,r as data};
