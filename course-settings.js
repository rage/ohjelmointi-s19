const courseSettings = {
  language: "fi",
  name: "Ohjelmointi Syksy 2019",
  subtitle: "Opi ohjelmoinnin alkeet",
  slug: "ohjelmointi-s19",
  tmcCourse: "ohjelmoinnin-jatkokurssi-s19",
  tmcOrganization: "hy",
  bannerPath: "banner.svg",
  sidebarEntries: [
    {
      title: "Tietoa kurssista",
      path: "/",
    },
    {
      title: "Osaamistavoitteet",
      path: "/osaamistavoitteet",
    },
    { title: "Tukiväylät", path: "/tukivaylat" },
    {
      title: "Usein kysytyt kysymykset",
      path: "/usein-kysytyt-kysymykset",
    },
    { separator: true, title: "Ohjelmoinnin perusteet" },
  ],
  sidebarFuturePages: [
    { title: "Osa 13", tba: "29.11." },
    { title: "Osa 14", tba: "6.12." },

  ],
  splitCourses: true,
}

module.exports = {
  default: courseSettings,
}
