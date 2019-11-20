class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }
  static titleize(string){
    let ignore= "the,a,an,but,of,and,for,at,by,from".split(",")
    return this.capitalize(string).split(" ").map(w=> ignore.includes(w) ? w : w[0].toUpperCase()+w.slice(1) ).join(" ")
  }
}