<template><div><h1 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started"><span>Get Started</span></a></h1>
<h3 id="instalation" tabindex="-1"><a class="header-anchor" href="#instalation"><span>Instalation</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i @rs_scope/vue-kanban</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data"><span>Data</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        status<span class="token operator">:</span> <span class="token string">'Column - 1'</span><span class="token punctuation">,</span></span>
<span class="line">        items<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        status<span class="token operator">:</span> <span class="token string">'Column - 2'</span><span class="token punctuation">,</span></span>
<span class="line">        items<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="template" tabindex="-1"><a class="header-anchor" href="#template"><span>Template</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueKanban</span></span>
<span class="line">    <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@update</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onUpdate<span class="token punctuation">"</span></span></span>
<span class="line"><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


