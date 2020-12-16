window.onload = function() {
    console.log("welcome to the site.")

    //draw the squares!
    const c = document.getElementById("mainCanvas");
    let ctx = c.getContext("2d");

    c.width  = window.innerWidth;
    c.height = window.innerHeight;
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);

    document.getElementById("download_resume").onclick = () => {
        window.location = "https://arshiyasolei.github.io/personal_site/resume_arshia.pdf"
    }

    //load interactive background
    VANTA.NET({
        el: "#interactive",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xd0d14
      })
}