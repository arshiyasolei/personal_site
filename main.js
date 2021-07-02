/** @type {HTMLCanvasElement} */

const state = {
    targets: [],
    mouse: undefined,
    validClicks: 0,
    c: undefined,
    ctx: undefined
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

window.onload = function() {
    console.log("welcome to the site.")
    //draw the squares!
    drawSquares()
    draw()
    document.getElementById("download_resume").onclick = () => {
        window.location = "https://arshiyasolei.github.io/personal_site/resume_arshia.pdf"
    }
}

const drawSquares = () => {
    const c = document.getElementById("cornerSquare");
    const ctx = c.getContext("2d");

    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
}

const draw = (timestamp) => {

    if (!state.c) state.c = document.getElementById("interactive");
    if (!state.ctx) {
        state.ctx = state.c.getContext("2d");
        state.c.width  = window.innerWidth;
        state.c.height = window.innerHeight;
    }
   
    if (!state.targets.length) {
        state.targets = Array(6)
            .fill(0)
            .map((a) => { 
                return {
                    x: rand(0,state.c.width-1),
                    y: rand(0,state.c.height-1),
                    width: 100,
                    rate: 0.6,
                    rgb: `rgb(${rand(0,256)}, ${rand(0,256)}, ${rand(0,256)} )`
                }
            })
    }
    const c = state.c
    const ctx = state.ctx
    
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'rgb(0, 0, 12)';
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'rgb(200, 0, 0)';

    if (state.mouse) {
        // ctx.fillRect(state.mouse.x,state.mouse.y,100,100)
    }

    if (timestamp && Math.round(timestamp) % 6 == 0) {
        state.targets.push({
            x: rand(0,state.c.width-1),
            y: rand(0,state.c.height-1),
            width: 100,
            rate: rand(1,4) / 3,
            rgb: `rgb(${rand(0,256)}, ${rand(0,256)}, ${rand(0,256)} )`
        })
    }

    state.targets.forEach((elm,i) => {
        ctx.fillStyle = elm.rgb
        ctx.fillRect(elm.x,elm.y,elm.width,elm.width)
        state.targets[i].width -= state.targets[i].rate
    })

    state.targets = state.targets.filter((elm) => elm.width > 0)

    c.onmousemove = (e) => {
        state.mouse = {x: e.clientX, y: e.clientY}
    }

    window.onresize = (e) => {
        state.c.width  = window.innerWidth;
        state.c.height = window.innerHeight;
    }
    requestAnimationFrame(draw)

}