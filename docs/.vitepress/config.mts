import { defineConfig } from 'vitepress'
import { readFileList } from './tools/readFileList'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BLOG",
  description: "Un blog sulla tecnologia",
  themeConfig: {
    // search: {
    //   provider: 'local'
    // },
    notFound: {
      linkText: "Torna alla Home",
      linkLabel: "torna alla home",
      quote: "Pagina non trovata",
      title: "Errore",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/derewith/derewith-blog' }
    ],

    sidebar: [
      {
        text: 'Home',
        items: [
          { text: 'Blog', link: '/' },
        ]
      },
      ...readFileList("2025", "12"),
      ...readFileList("2025", "11"),
      ...readFileList("2025", "10"),
      ...readFileList("2025", "09"),
      ...readFileList("2025", "08"),
      ...readFileList("2025", "07"),
      ...readFileList("2025", "06"),
      ...readFileList("2025", "05"),
      ...readFileList("2025", "04"),
      ...readFileList("2025", "03"),
      ...readFileList("2025", "02")
    ]
  },

})
