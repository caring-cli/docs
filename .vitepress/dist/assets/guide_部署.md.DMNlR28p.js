import{_ as s,c as i,o as a,a3 as e}from"./chunks/framework.JR-NCfhW.js";const g=JSON.parse('{"title":"部署 VitePress 站点","description":"","frontmatter":{},"headers":[],"relativePath":"guide/部署.md","filePath":"guide/部署.md","lastUpdated":null}'),t={name:"guide/部署.md"},n=e(`<h1 id="部署-vitepress-站点" tabindex="-1">部署 VitePress 站点 <a class="header-anchor" href="#部署-vitepress-站点" aria-label="Permalink to &quot;部署 VitePress 站点&quot;">​</a></h1><p>以下指南基于一些前提：</p><ul><li>VitePress 站点位于项目的 <code>docs</code> 目录中。</li><li>你使用的是默认的生成输出目录 （<code>.vitepress/dist</code>）。</li><li>VitePress 作为本地依赖项安装在项目中，并且你已在 <code>package.json</code> 中设置以下脚本：</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress build docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress preview docs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="本地构建与调试" tabindex="-1">本地构建与调试 <a class="header-anchor" href="#本地构建与调试" aria-label="Permalink to &quot;本地构建与调试&quot;">​</a></h2><p>1.运行以下命令来构建文档：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:build</span></span></code></pre></div><p>2.构建文档后，通过运行以下命令可以在本地预览它：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:preview</span></span></code></pre></div><p><code>preview</code> 命令将启动一个本地静态 Web 服务 <code>http://localhost:4173</code>，该服务以 <code>.vitepress/dist 作为源文件</code>。这是检查生产版本在本地环境中是否正常的一种简单方法。</p>`,10),p=[n];function l(h,d,o,c,r,k){return a(),i("div",null,p)}const E=s(t,[["render",l]]);export{g as __pageData,E as default};
