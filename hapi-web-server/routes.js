const route = [
{
  method: "GET",
  path: "/",
  handler: (request, h) => {
    return "Homepage"
  }
},
{
  method: "*",
  path: "/",
  handler: (request, h) => {
    return "Halaman tidak dapat diakses dengan method tersebut"
  }
},  
{
  method: "GET",
  path: "/about",
  handler: (request, h) => {
    return "About Page"
  }
},
{
  method: 'GET',
  path: '/hello/{name?}',
  handler: (request, h) => {
      const {name = "stranger"} = request.params
      const {lang} = request.query

      if (lang === "id") {
        return `Hai ${name}`
      }
      
      return `Hello ${name}!`
  }
},
{
  method: "*",
  path: "/about",
  handler: (request, h) => {
    return "Halaman tidak dapat diakses dengan method tersebut"
  }
},
{
  method: "*",
  path: "/{any*}",
  handler: (request, h) => {
    return "Halaman tidak ditemukan"
  }
}
]

module.exports = route