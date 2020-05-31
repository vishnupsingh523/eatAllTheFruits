
    $(".start").hide();
    $(".start").slideDown(2000);

    // on click start the game 
    function startTheGame(){
        $(".start").slideUp(1000);

            document.querySelector("#images").style.filter = "blur(0px)";
            document.querySelector(".main h1").style.filter = "blur(0px)";   

    // This is the first sound of the game start.
        playSound("audio/Super.mp3");
    }






    //
    var len = 0;
    var count = document.querySelectorAll("img");
    $("img").click(function(){
        len++;
        if(len == count.length)
        {
            var ele = document.createElement("h1");
            ele.innerHTML = "... GAME OVER!!";
            ele.style.fontSize = "100px";
            ele.style.fontFamily = "cursive";
            ele.style.alignSelf = "center";
            ele.style.textShadow = "5px 5px 10px red";
            var container = document.querySelector("#images");
            container.appendChild(ele);
            $(ele).hide();
            $(ele).fadeIn(5000);
            playSound("audio/Fantasy7.mp3");
        }
        else{
            playSound("audio/delicious.mp3")
        }
        $(this).hide(500);
    });


    var mysound;
    function playSound(src){
        mysound = new sound(src);
        mysound.play();
    }

    function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function(){
            this.sound.play();
        }
        this.stop = function(){
            this.sound.pause();
        }    
    }
