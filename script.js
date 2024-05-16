document.addEventListener('keydown', function (e) {
    if (e.keyCode === 65) {
        const audio = new Audio('ride.wav');
        audio.play();
        var box = this.getElementById('boxes-1');
        box.style.backgroundColor = "yellow";
        setTimeout(function () {
            box.style.backgroundColor = "aqua";
        }, 300);
        //alert("a is pressed");
    }

    else if (e.keyCode == 83) {
        const audio = new Audio('boom.wav');
        audio.play();
        var box = this.getElementById('boxes-2');
        box.style.backgroundColor = "yellow";
        setTimeout(function () {
            box.style.backgroundColor = "aqua";
        }, 300);
        // alert("s is pressed");
    }

    else if (e.keyCode == 68) {
        const audio = new Audio('clap.wav');
        audio.play();
        var box = this.getElementById('boxes-3');
        box.style.backgroundColor = "yellow";
        setTimeout(function () {
            box.style.backgroundColor = "aqua";
        }, 300);
        // alert(" d is pressed");
    }

    else if (e.keyCode == 70) {
        const audio = new Audio('kick.wav');
        audio.play();
        var box = this.getElementById('boxes-4');
        box.style.backgroundColor = "yellow";
        setTimeout(function () {
            box.style.backgroundColor = "aqua";
        }, 300);
        // alert("f is pressed");
    }

    else  if (e.keyCode == 71) {
        const audio = new Audio('snare.wav');
        audio.play();
        var box = this.getElementById('boxes-5');
        box.style.backgroundColor = "yellow";
        setTimeout(function () {
            box.style.backgroundColor = "aqua";
        }, 300);
        //alert("g is pressed");
    }

    else if (e.keyCode == 72) {
        const audio = new Audio('tom.wav');
        audio.play();
        var box = this.getElementById('boxes-6');
        box.style.backgroundColor = "yellow";
        setTimeout(function () {
            box.style.backgroundColor = "aqua";
        }, 300);
        //alert("h is pressed");
    }

    else  if (e.keyCode == 74) {
        const audio = new Audio('openhat.wav');
        audio.play();
        var box = this.getElementById('boxes-7');
        box.style.backgroundColor = "yellow";
        setTimeout(function () {
            box.style.backgroundColor = "aqua";
        }, 300);
        //alert("j is pressed");
    }

    else if (e.keyCode == 75) {
        const audio = new Audio('ride.wav');
        audio.play();
        var box = this.getElementById('boxes-8');
        box.style.backgroundColor = "yellow";
        setTimeout(function () {
            box.style.backgroundColor = "aqua";
        }, 300);
        // alert("k is pressed");
    }

    else if (e.keyCode == 76) {
        const audio = new Audio('tom.wav');
        audio.play();
        var box = this.getElementById('boxes-9');
        box.style.backgroundColor = "yellow";
        setTimeout(function () {
            box.style.backgroundColor = "aqua";
        }, 300);
        //alert("l is pressed");
    }
    else
    {
        const audio = new Audio('funny-spring-jump-140378.mp3');
        audio.play();
    }

    //document.getElementById('audio').play();
});
