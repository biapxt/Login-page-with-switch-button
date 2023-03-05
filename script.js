function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector(".image img")

    if(html.classList.contains("light")){
        img.setAttribute("src", "./assets/logolightsvg.svg")
    }else{
        img.setAttribute("src", "./assets/logodarksvg.svg")
    }
}