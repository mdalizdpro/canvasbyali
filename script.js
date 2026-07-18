// Canvas by Ali Contact Hub
document.addEventListener("DOMContentLoaded", () => {

    // Fade-in animation
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity .8s ease";
        document.body.style.opacity = "1";
    }, 100);

    // Button click animation
    const buttons = document.querySelectorAll(".buttons a");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            button.style.transform = "scale(.95)";
            setTimeout(() => {
                button.style.transform = "";
            }, 150);
        });
    });

    console.log("Canvas by Ali Contact Hub Loaded Successfully.");
});

// Copy text function (Future use)
function copyText(text){
    navigator.clipboard.writeText(text)
    .then(()=>{
        alert("Copied: " + text);
    })
    .catch(()=>{
        alert("Copy failed.");
    });
}
