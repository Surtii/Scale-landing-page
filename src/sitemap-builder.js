require("babel-register")

const router = require("./sitemap-routes").default
const Sitemap = require("react-router-sitemap").default

(
    new Sitemap(router)
    .build("https://scalex.africa")
    .save("./public/sitemap.xml")
)
