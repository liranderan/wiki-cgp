
export interface Resource {
  name: string
  logo: string
  desc: string
  href: string
  tags?: string[]
}

export interface ResourceCategory {
  name: string
  resources: Resource[]
}

export const resourceData: ResourceCategory[] = [
  {
    name: '代码托管',
    resources: [
      {
        name: 'GitHub',
        desc: '全球最大的软件项目托管平台，发现优质开源项目',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/',
        tags: ['GitHub', '代码托管'],
      },
      {
        name: 'Gitee',
        desc: 'Gitee 是中国领先的基于 Git 的代码托管平台，类似于全球知名的 GitHub',
        logo: '/img/resource/gitee.ico',
        href: 'https://gitee.com/',
        tags: ['代码托管'],
      },
      {
        name: 'Gitlab',
        desc: '更快地交付安全代码，部署到任何云，并推动业务成果',
        logo: 'https://gitlab.com/uploads/-/system/group/avatar/6543/logo-extra-whitespace.png?width=64',
        href: 'https://gitlab.com/',
        tags: ['代码托管'],
      },
      {
        name: 'Gitea',
        desc: 'Gitea 是一个开源社区驱动的轻量级代码托管解决方案，后端采用 Go 编写，采用 MIT 许可证.',
        logo: 'https://gitea.io/images/favicon.png',
        href: 'https://gitea.io/',
        tags: ['代码托管'],
      },
      {
        name: 'Coding',
        desc: '提供一站式研发管理平台及云原生开发工具，让软件研发如同工业生产般简单高效，助力企业提升研发管理效能',
        logo: '/img/resource/coding.png',
        href: 'https://coding.net/',
        tags: ['代码托管'],
      },
    ],
  },
  {
    name: '设计',
    resources: [
      {
        name: 'Mastergo',
        desc: '面向团队的专业 UI/UX 设计工具，多人同时编辑、随时在线评审、设计一键交付，让想法更快实现',
        logo: 'https://mastergo.com/favicon.ico',
        href: 'https://mastergo.com/',
        tags: ['设计'],
      },
      {
        name: '即时设计',
        desc: '可云端编辑的专业级 UI 设计工具，为中国设计师量身打造，Windows 也能用的「协作版 Sketch」',
        logo: 'https://img.js.design/assets/webImg/favicon.ico',
        href: 'https://js.design/',
        tags: ['设计'],
      },
      {
        name: 'Figma',
        desc: 'Figma 是为 UI 设计而生的设计工具，除了有和 Sketch 一样基本的操作和功能，还有许多专为 UI 设计而生的强大功能。',
        logo: '/img/resource/figma.png',
        href: 'https://www.figma.com/',
        tags: ['设计'],
      },
      {
        name: 'Pixso',
        desc: '一站式完成原型、设计、交互与交付，为数字化团队协作提效',
        logo: 'https://cms.pixso.cn/images/logo.svg',
        href: 'https://pixso.cn/',
        tags: ['设计'],
      },
    ],
  },
  {
    name: '字体图标',
    resources: [
      {
        name: 'iconify',
        desc: '数千个图标，一个统一的框架',
        logo: 'https://icon-sets.iconify.design/favicon.ico',
        href: 'https://icon-sets.iconify.design/',
        tags: ['图标'],
      },
      {
        name: 'Typing SVG',
        desc: '一个动态生成的可自定义 SVG 打字效果',
        logo: '/img/resource/typing-svg.png',
        href: 'https://readme-typing-svg.herokuapp.com/demo/',
        tags: ['字体'],
      },
    ],
  },
]
