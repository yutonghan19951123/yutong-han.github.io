export default defineAppConfig({
  global: {
      picture: {
    dark: '/public/img/yutong.jpg',
    light: '/public/img/yutong.jpg',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'hanyutong19951123@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    }
  },
  uiPro: {
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description:
          'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-gmail',
        'to': '',
        'account': 'hanyutong19951123@gmail.com',
        'target': '_blank',
        'aria-label': 'Gmail address'
      },
      {
        'icon': 'i-el:linkedin',
        'to': 'https://www.linkedin.com/in/yutonghan1123',
        'target': '_blank',
        'aria-label': 'Linkedin address'
      },
      {
        'icon': 'i-simple-icons-wechat',
        'to': '',
        'account': 'hanyutong19951123',
        'target': '',
        'aria-label': 'WeChat ID'
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/yutonghan19951123',
        'target': '_blank',
        'aria-label': 'GitHub address'
      }
    ]
  }
})
