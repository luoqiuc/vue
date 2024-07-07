import{_ as s,c as n,o as e,a}from"./app-m0GYV5If.js";const l={},i=a(`<h3 id="引言" tabindex="-1"><a class="header-anchor" href="#引言"><span>引言</span></a></h3><p>对于一个程序员小白来说，拥有一个专属自己的博客网站是很酷炫的事情，接下来我就教大家如何用VuePress+GitHub Pages来打造你的自动化部署个人博客。</p><h3 id="一、为什么选择vuepress和github-pages" tabindex="-1"><a class="header-anchor" href="#一、为什么选择vuepress和github-pages"><span>一、为什么选择VuePress和GitHub Pages</span></a></h3><h4 id="vuepress-为开发者量身定制的静态站点生成器" tabindex="-1"><a class="header-anchor" href="#vuepress-为开发者量身定制的静态站点生成器"><span>VuePress：为开发者量身定制的静态站点生成器</span></a></h4><p>VuePress的核心优势在于：</p><ul><li><strong>Markdown为中心</strong>：编写文章就像写文档一样简单直接，支持Markdown扩展，让你专注于内容创作。</li><li><strong>Vue驱动的主题系统</strong>：自定义主题或使用现成的主题，轻松打造个性化界面。</li><li><strong>性能卓越</strong>：预渲染静态HTML，加载速度快，SEO友好。</li></ul><h4 id="github-pages-免费且强大的托管服务" tabindex="-1"><a class="header-anchor" href="#github-pages-免费且强大的托管服务"><span>GitHub Pages：免费且强大的托管服务</span></a></h4><p>GitHub Pages是GitHub提供的一项服务，允许用户免费托管静态网站。与VuePress结合，你可以：</p><ul><li><strong>自动化部署</strong>：每次推送代码到GitHub仓库，自动更新网站内容。</li><li><strong>域名绑定</strong>：支持自定义域名，让你的博客更加专业。</li><li><strong>安全稳定</strong>：依托GitHub的基础设施，无需担心服务器维护问题。</li></ul><h3 id="二、准备工作" tabindex="-1"><a class="header-anchor" href="#二、准备工作"><span>二、准备工作</span></a></h3><ul><li><p>github账号。</p></li><li><p>依赖环境：Node.Js v20.10.0+。</p></li><li><p>包管理器：pnpm、yarn、npm，推荐使用pnpm。</p></li><li><p>github账号，访问github卡顿可使用<a href="https://steampp.net/download" target="_blank" rel="noopener noreferrer">Watt Toolkit (原名Steam++)</a>加速。</p></li><li><p>vuepress官网v2.0.0-rc.14文档写的v18.16.0+似乎不准确，使用v18.17.0运行会报错，需升级nodejs。</p></li></ul><h3 id="三、创建github-pages网站" tabindex="-1"><a class="header-anchor" href="#三、创建github-pages网站"><span>三、创建GitHub Pages网站</span></a></h3><ol><li>在github中创建仓库，存储库必须命名为<code>username.github.io</code>，创建README.md文件。</li></ol><p><img src="https://cdn.nlark.com/yuque/0/2024/png/22094496/1719478510765-5aa6ca50-7a26-4f5e-9e86-dd83a2e85e71.png" alt="img"></p><ol><li>依次点击Settings→Pages→Visit site，打开访问已发布的网站。</li></ol><p><img src="https://cdn.nlark.com/yuque/0/2024/png/22094496/1719478527200-313761b5-0b70-44a0-893b-e1ae9f53b834.png" alt="img"></p><ol><li>现在你已经拥有一个属于自己的网站啦</li></ol><p><img src="https://cdn.nlark.com/yuque/0/2024/png/22094496/1719483124286-f8167194-d44f-4b48-8b16-6a8988dffe1e.png" alt="img"></p><h3 id="四、使用vuepress初始化项目" tabindex="-1"><a class="header-anchor" href="#四、使用vuepress初始化项目"><span>四、使用VuePress初始化项目</span></a></h3><h4 id="方式一-命令行创建" tabindex="-1"><a class="header-anchor" href="#方式一-命令行创建"><span>方式一：命令行创建：</span></a></h4><ol><li>通过 create-vuepress 直接创建项目模板</li></ol><p>项目类型改为docs，回车键一直到最后启动项目，或手动运行命令<code>pnpm run docs:dev</code>启动项目。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">pnpm</span> create vuepress vuepress-starter</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="https://cdn.nlark.com/yuque/0/2024/png/22094496/1719498775878-40da061a-4e87-489f-aaaa-d33fb8b33ee5.png" alt="img"></p><details class="lake-collapse"><summary id="u2c121d22"><span class="ne-text">blog和docs项目类型模板的区别？</span></summary><p id="u3e7fffc3" class="ne-p" style="margin:0;padding:0;min-height:24px;"><strong><span class="ne-text">blog (博客) 模板</span></strong><span class="ne-text">：适用于需要频繁更新内容、注重文章的展示和归档的场景。</span></p><ul class="ne-ul" style="margin:0;padding-left:23px;"><li id="u25292218" data-lake-index-type="0"><span class="ne-text" style="color:rgb(44, 44, 54);font-size:16px;">博客文章的分页。</span></li><li id="u671e00ed" data-lake-index-type="0"><span class="ne-text" style="color:rgb(44, 44, 54);font-size:16px;">用于显示最近文章、分类和标签的侧边栏或首页。</span></li><li id="ucaef521a" data-lake-index-type="0"><span class="ne-text" style="color:rgb(44, 44, 54);font-size:16px;">文章的元数据支持，例如发表日期、作者信息等。</span></li><li id="u414a7e0b" data-lake-index-type="0"><span class="ne-text" style="color:rgb(44, 44, 54);font-size:16px;">RSS/Atom Feed 支持，便于读者订阅更新。</span></li><li id="u52b86d82" data-lake-index-type="0"><span class="ne-text" style="color:rgb(44, 44, 54);font-size:16px;">可能会有评论系统集成或其他社交媒体分享功能的支持。</span></li></ul><p id="u2f98e840" class="ne-p" style="margin:0;padding:0;min-height:24px;"><img src="https://cdn.nlark.com/yuque/0/2024/png/22094496/1719500010756-0636123c-4cc1-4e00-b76b-82b0581e2723.png" width="2080.000055101184" id="ue01e0155" class="ne-image"></p><p id="u756fa46b" class="ne-p" style="margin:0;padding:0;min-height:24px;"><strong><span class="ne-text">docs (文档) 模板</span></strong><span class="ne-text">：</span><span class="ne-text" style="color:rgb(44, 44, 54);font-size:16px;">更适合技术文档、产品手册等需要结构化内容展示的场景。</span></p><ul class="ne-ul" style="margin:0;padding-left:23px;"><li id="u0d94abb5" data-lake-index-type="0"><span class="ne-text" style="color:rgb(44, 44, 54);font-size:16px;">以目录结构组织的内容。</span></li><li id="ue535ab5b" data-lake-index-type="0"><span class="ne-text" style="color:rgb(44, 44, 54);font-size:16px;">自动从 Markdown 文件的标题生成导航菜单。</span></li><li id="uc42198e9" data-lake-index-type="0"><span class="ne-text" style="color:rgb(44, 44, 54);font-size:16px;">更加简洁的页面布局，专注于内容展示。</span></li><li id="u4a5fe1e6" data-lake-index-type="0"><span class="ne-text" style="color:rgb(44, 44, 54);font-size:16px;">通常不包含博客相关的特性，如分页、文章元数据等。</span></li></ul><p id="ufcb4f95e" class="ne-p" style="margin:0;padding:0;min-height:24px;"><img src="https://cdn.nlark.com/yuque/0/2024/png/22094496/1719500509513-d8374a54-75df-4273-a4ad-29cda851ee3d.png" width="2080.000055101184" id="u81a8773e" class="ne-image"></p></details><h4 id="方式二-手动创建" tabindex="-1"><a class="header-anchor" href="#方式二-手动创建"><span>方式二：手动创建：</span></a></h4><ol><li>创建并进入一个新目录</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">mkdir</span> vuepress-starter</span>
<span class="line"><span class="token builtin class-name">cd</span> vuepress-starter</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>初始化项目，生成package.json文件</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">pnpm</span> init</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>安装VuePress</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 安装 vuepress</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress@next</span>
<span class="line"><span class="token comment"># 安装 vue依赖</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vue</span>
<span class="line"><span class="token comment"># 安装打包工具和主题</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> @vuepress/bundler-vite@next @vuepress/theme-default@next</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⚠️缺失vue依赖会造成项目运行和部署失败，使用pnpm安装vuepress时偶尔会不安装vue依赖，可能与安装的vuepress版本有关。</p><ol><li>创建<code>docs</code>目录和<code>docs/.vuepress</code>目录</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">mkdir</span> docs</span>
<span class="line"><span class="token function">mkdir</span> docs/.vuepress</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>创建 VuePress 配置文件<code>docs/.vuepress/config.js</code></li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/bundler-vite&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>新建一篇文档docs/README.md，输入文字# Hello VuePress</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md <span class="token comment"># 不推荐此方式</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>创建完成后，你项目的目录结构应该是这样的：</li></ol><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="line">├─ docs</span>
<span class="line">│  ├─ .vuepress</span>
<span class="line">│  │  └─ config.js</span>
<span class="line">│  └─ README.md</span>
<span class="line">└─ package.json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>在package.json文件添加以下scripts</li></ol><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>启动服务器</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">pnpm</span> run docs:dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>打开http://localhost:8080，查看运行效果</li></ol><p><img src="https://cdn.nlark.com/yuque/0/2024/png/22094496/1719478465360-4bedafd5-a8aa-464b-b770-a95c189267da.png" alt="img"></p><h3 id="五、自动化部署配置" tabindex="-1"><a class="header-anchor" href="#五、自动化部署配置"><span>五、自动化部署配置</span></a></h3><p>ℹ️ 这里我选择用同一个仓库的<strong>docs分支</strong>用来放项目源代码，<strong>main分支</strong>来存放打包部署后的静态文件。</p><ol><li>git初始化，并与建立远程仓库关联，以下username需换成自己的github用户名</li></ol><div class="language-git line-numbers-mode" data-highlighter="prismjs" data-ext="git" data-title="git"><pre class="language-git"><code><span class="line">git init</span>
<span class="line">git checkout -b docs</span>
<span class="line">git remote add origin https://github.com/username/username.github.io.git</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>添加.gitignore文件</li></ol><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line">node_modules</span>
<span class="line"># VuePress 默认临时文件目录</span>
<span class="line">docs/.vuepress/.temp</span>
<span class="line"># VuePress 默认缓存目录</span>
<span class="line">docs/.vuepress/.cache</span>
<span class="line"># VuePress 默认构建生成的静态文件目录</span>
<span class="line">docs/.vuepress/dist</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>修改/添加<code>.github/workflows/docs.yml</code>工作流配置文件</li></ol><div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain" data-title="plain"><pre class="language-plain"><code><span class="line">name: 部署文档</span>
<span class="line"></span>
<span class="line">on:</span>
<span class="line">  push:</span>
<span class="line">    branches:</span>
<span class="line">      # 确保这是你正在使用的分支名称</span>
<span class="line">      - docs</span>
<span class="line"></span>
<span class="line">permissions:</span>
<span class="line">  contents: write</span>
<span class="line"></span>
<span class="line">jobs:</span>
<span class="line">  deploy-main:</span>
<span class="line">    runs-on: ubuntu-latest</span>
<span class="line">    steps:</span>
<span class="line">      - name: Checkout</span>
<span class="line">        uses: actions/checkout@v3</span>
<span class="line">        with:</span>
<span class="line">          fetch-depth: 0</span>
<span class="line">          # 如果你文档需要 Git 子模块，取消注释下一行</span>
<span class="line">          # submodules: true</span>
<span class="line"></span>
<span class="line">      - name: 安装 pnpm</span>
<span class="line">        uses: pnpm/action-setup@v2</span>
<span class="line">        with:</span>
<span class="line">          run_install: true</span>
<span class="line">          version: 8</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">      - name: 设置 Node.js</span>
<span class="line">        uses: actions/setup-node@v3</span>
<span class="line">        with:</span>
<span class="line">          node-version: 20</span>
<span class="line">          cache: pnpm</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">      - name: 构建文档</span>
<span class="line">        env:</span>
<span class="line">          NODE_OPTIONS: --max_old_space_size=8192</span>
<span class="line">        run: |-</span>
<span class="line">          pnpm run docs:build</span>
<span class="line">          &gt; docs/.vuepress/dist/.nojekyll</span>
<span class="line"></span>
<span class="line">      - name: 部署文档</span>
<span class="line">        uses: JamesIves/github-pages-deploy-action@v4</span>
<span class="line">        with:</span>
<span class="line">          # 这是文档部署到的分支名称</span>
<span class="line">          branch: main</span>
<span class="line">          folder: docs/.vuepress/dist</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>使用命令行/代码编辑器推送代码，触发GitHub Actions自动部署</li></ol><div class="language-git line-numbers-mode" data-highlighter="prismjs" data-ext="git" data-title="git"><pre class="language-git"><code><span class="line">git add .</span>
<span class="line">git commit -m <span class="token string">&quot;first commit&quot;</span></span>
<span class="line">git push --set-upstream origin docs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.nlark.com/yuque/0/2024/png/22094496/1719482941668-ae1a2673-d73b-4608-9611-32823e4973c7.png" alt="img"></p><ol><li>部署成功后，访问已发布的网站，网址为https://username.github.io</li></ol><p><img src="https://cdn.nlark.com/yuque/0/2024/png/22094496/1719540709335-b33a7da5-5d1b-4a25-90e7-72712aa97aa2.png" alt="img"></p><h3 id="六、问题记录" tabindex="-1"><a class="header-anchor" href="#六、问题记录"><span>六、问题记录</span></a></h3><ol><li>使用node-v18.17.0安装依赖，运行项目报错&#39;node:events&#39; does not provide an export named &#39;addAbortListener&#39;？ 解决方法：需升级nodejs版本，VuePress官网文档v2.0.0-rc.14写的依赖Node.js v18.16.0+似乎不准确；</li><li>使用Steam++后，git拉取推送代码报错SSL证书/443 Time out问题？</li></ol><p>解决方法：见<a href="https://github.com/BeyondDimension/SteamTools/discussions/234?sort=new" target="_blank" rel="noopener noreferrer">参考文档3</a>。</p><ol><li>运行本地项目网页显示乱码问题？</li></ol><p>解决方法：用<code>echo &#39;# Hello VuePress&#39; &gt; docs/README.md</code>创建的文件格式为UTF-16LE，网页显示会产生乱码，需使用记事本将文件另存为<strong>所有文件保存</strong>类型<strong>UTF-8编码</strong>格式；</p><ol><li>使用VuePress官网文档<code>.github/workflows/docs.yml</code>代码配置工作流导致的部署问题？</li></ol><p>解决方法：</p><ul><li><ul><li>在github网址配置并生成GITHUB_TOKEN</li></ul></li></ul><p>右上角账户Settings→Developer settings→Personal access tokens→Tokens (classic)→Generate new token (classic)</p><p><img src="https://cdn.nlark.com/yuque/0/2024/png/22094496/1719478638426-9c0dfa75-1ebe-42a5-8404-94159091e549.png" alt="img"></p><ul><li><ul><li>开启Workflow读写仓库权限</li></ul></li></ul><p>修改配置Settings→Actions→General→Workflow permissions，选择支持读写权限，点击save保存。</p><p><img src="https://cdn.nlark.com/yuque/0/2024/png/22094496/1719478690619-593ad42a-f2cb-4276-8952-c7c24ad81b86.png" alt="img"></p><h3 id="七、参考文档" tabindex="-1"><a class="header-anchor" href="#七、参考文档"><span>七、参考文档</span></a></h3><ol><li><a href="https://v2.vuepress.vuejs.org/zh/guide/getting-started.html" target="_blank" rel="noopener noreferrer">快速上手 | VuePress</a></li><li><a href="https://docs.github.com/zh/pages/getting-started-with-github-pages/creating-a-github-pages-site" target="_blank" rel="noopener noreferrer">创建 GitHub Pages 站点 - GitHub 文档</a></li><li><a href="https://github.com/BeyondDimension/SteamTools/discussions/234?sort=new" target="_blank" rel="noopener noreferrer">使用Steam++解决github的 443：Timed out问题 · BeyondDimension/SteamTools · Discussion #234</a></li></ol><h3 id="八、结尾" tabindex="-1"><a class="header-anchor" href="#八、结尾"><span>八、结尾</span></a></h3><p>至此，大功告成，你已经成功搭建了一个基于VuePress+GitHub Pages的个人博客。</p>`,77),p=[i];function t(c,d){return e(),n("div",null,p)}const o=s(l,[["render",t],["__file","get-started.html.vue"]]),u=JSON.parse('{"path":"/get-started.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"引言","slug":"引言","link":"#引言","children":[]},{"level":3,"title":"一、为什么选择VuePress和GitHub Pages","slug":"一、为什么选择vuepress和github-pages","link":"#一、为什么选择vuepress和github-pages","children":[]},{"level":3,"title":"二、准备工作","slug":"二、准备工作","link":"#二、准备工作","children":[]},{"level":3,"title":"三、创建GitHub Pages网站","slug":"三、创建github-pages网站","link":"#三、创建github-pages网站","children":[]},{"level":3,"title":"四、使用VuePress初始化项目","slug":"四、使用vuepress初始化项目","link":"#四、使用vuepress初始化项目","children":[]},{"level":3,"title":"五、自动化部署配置","slug":"五、自动化部署配置","link":"#五、自动化部署配置","children":[]},{"level":3,"title":"六、问题记录","slug":"六、问题记录","link":"#六、问题记录","children":[]},{"level":3,"title":"七、参考文档","slug":"七、参考文档","link":"#七、参考文档","children":[]},{"level":3,"title":"八、结尾","slug":"八、结尾","link":"#八、结尾","children":[]}],"git":{"updatedTime":1720098215000,"contributors":[{"name":"lengxc","email":"lengxc@qiysd.com","commits":2}]},"filePathRelative":"get-started.md"}');export{o as comp,u as data};
