window.onload = function() {
    console.log("welcome to the site.")

    const c = document.getElementById("mainCanvas");
    var ctx = c.getContext("2d");

    c.width  = window.innerWidth;
    c.height = window.innerHeight;
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);

    document.getElementById("download_resume").onclick = () => {
        window.location = "/personal_site/resume_arshia.pdf"
    }
}