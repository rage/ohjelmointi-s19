const courseSettings = {
  language: "fi",
  name: "Ohjelmointi Syksy 2019",
  subtitle: "Opi ohjelmoinnin alkeet",
  slug: "ohjelmointi-s19",
  tmcCourse: "ohjelmoinnin-perusteet-s19",
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
    { title: "Osa 4", tba: "20.9.2019" },
    { title: "Osa 5", tba: "27.9.2019" },
    { title: "Osa 6", tba: "4.10.2019" },
    { title: "Osa 7", tba: "11.10.2019" },
    { separator: true, title: "Ohjelmoinnin jatkokurssi" },
    { title: "Osa 8", tba: "TBA" },
    { title: "Osa 9", tba: "TBA" },
    { title: "Osa 10", tba: "TBA" },
    { title: "Osa 11", tba: "TBA" },
    { title: "Osa 12", tba: "TBA" },
    { title: "Osa 13", tba: "TBA" },
    { title: "Osa 14", tba: "TBA" },

  ],
  splitCourses: false,
}

module.exports = {
  default: courseSettings,
}
