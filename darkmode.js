const html = document.querySelector("html")
const checkbox = document.getElementById("mudarTema")


const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)
 

const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
    bg: "#263238",
    bgPanel: "#434343",
    colorHeadings: "#4a9f7a",
    colorText: "#B5B5B5"
} 

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
   // target.checked ? changeColors(darkMode) : changeColors(initialColors);

    if(checkbox.checked == true){
        var tema = "darkMode";
        localStorage.setItem("temaAtual", tema);
        changeColors(darkMode);
        // console.log("true");

            } else if(checkbox.checked == false){
                var tema = "initialColors";
                localStorage.setItem("temaAtual", tema);
                changeColors(initialColors);
                // console.log("false");
                    } else {
                        console.log("analise");
            }
        }
    
)


function getTema(){
    
    var temaAtual = localStorage.getItem("temaAtual");

    if(temaAtual == "darkMode"){
        
        document.getElementById("mudarTema").checked = true; 
        console.log("tema salvo carregado");
        changeColors(darkMode);
        
        
    } else if(temaAtual == "initialColors") {
        document.getElementById("mudarTema").checked = false; 
        console.log("tema padrão do sistema");
        changeColors(initialColors);
        
    }
}

