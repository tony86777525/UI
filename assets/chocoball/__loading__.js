pc.script.createLoadingScreen(function (app) {
    var showSplash = function () {
        window.devicePixelRatio = window.devicePixelRatio * 0.75;
        // splash wrapper
        var wrapper = document.createElement('div');
        wrapper.id = 'application-splash-wrapper';
        document.body.appendChild(wrapper);

        // add animation
        // document.getElementById('application-splash-wrapper').innerHTML =
        //     '<div aria-busy="true" aria-label="Loading" role="progressbar" class="container"><div class="swing"><div class="swing-l"></div><div></div><div></div><div></div><div></div><div></div> <div class="swing-r"></div></div><div class="shadow"><div class="shadow-l"></div><div></div><div></div><div></div><div></div><div></div><div class="shadow-r"></div></div></div>'
        // ;

        // splash
        var splash = document.createElement('div');
        splash.id = 'application-splash';
        wrapper.appendChild(splash);
        // splash.style.display = 'none';

        // var logo = document.createElement('img');
        // logo.src = 'https://chocolat.work/assets/img/user/pc/campaign/fortune/float_chocolachan/month_12.gif';
        // splash.appendChild(logo);
        // logo.onload = function () {
        //     splash.style.display = 'block';
        // };

        // add animation
        var animation = document.createElement('div');
        animation.innerHTML = 
            '<div class="loadAnimate"><div class="progress-container"><div class="progress-state state-load">Now Loading…</div><div class="progress-state state-finish">Complete!</div><div class="progress-box"><div class="progress-fill"></div></div></div><div class="dump-truck choco js-animatie active"><div class="front"></div><div class="bucket"></div><div class="base"></div><div class="wheel wheel-front"></div><div class="wheel wheel-middle"></div><div class="wheel wheel-back"></div></div><div class="dump-truck job js-animatie"><div class="front"></div><div class="bucket"></div><div class="base"></div><div class="wheel wheel-front"></div><div class="wheel wheel-middle"></div><div class="wheel wheel-back"></div></div></div>';
        splash.appendChild(animation);

        // var container = document.createElement('div');
        // container.id = 'progress-bar-container';
        // splash.appendChild(container);

        // var bar = document.createElement('div');
        // bar.id = 'progress-bar';
        // container.appendChild(bar);

    };

    var date1 = new Date();
    var stopLoadingAnimate = false;

    var hideSplash = function () {
        var date2 = new Date();
        var reciprocal = 10000 - Math.abs(date2-date1) - 1000;

        reciprocal = reciprocal >= 0 ? reciprocal : 0;

        setTimeout(function () {
            stopLoadingAnimate = true;
            var load = document.querySelector('.state-load');
            load.style.display = 'none';

            var finish = document.querySelector('.state-finish');
            finish.style.display = 'block';

            document.querySelector('.progress-fill').style.width = '100%';

            setTimeout(function () {
                var splash = document.getElementById('application-splash-wrapper');
                splash.parentElement.removeChild(splash);
                
                var uiGameMain = document.querySelector('[data-game-ui="main"]');
                if (null !== uiGameMain) {
                    uiGameMain.style.visibility = 'unset';
                }
            }, 1000);

            gameEvents(app);
        }, reciprocal);
    };

    // var setProgress = function (value) {
    //     var bar = document.getElementById('progress-bar');
    //     if(bar) {
    //         value = Math.min(1, Math.max(0, value));
    //         bar.style.width = value * 100 + '%';
    //     }
    // };

    var setProgress = function (value) {
        var bar = document.querySelector('.progress-fill');
        if(bar) {
            value = Math.min(1, Math.max(0, value));
            bar.style.width = (value * 100 - 1) + '%';
        }
    };

    var createCss = function () {
        var css = [
            '#application-splash-wrapper {',
            'position: absolute;',
            'top: 0;',
            'left: 0;',
            'height: 100%;',
            'width: 100%;',
            'background-color: #87beff;',
            '}',
            '*, *:before, *:after {',
            'border: 0;',
            'box-sizing: border-box;',
            'margin: 0;',
            'padding: 0;',
            '}',
            ':root {',
            'font-size: 20px;',
            '}',
            'body {',
            'background: #87beff;',
            'color: #222;',
            'font: 1em "Anton", sans-serif;',
            'line-height: 1.5;',
            'overflow-x: hidden;',
            '}',
            // add animation
            '.loadAnimate{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.dump-truck,.dump-truck div,.progress-container{position:absolute}.progress-container{top:0;left:0;transform:translate(-50%,-50%);height:7.5em;z-index:2;text-align:center;width:30em}.progress-box{border:.1em solid #ff7ca2;border-radius:3px;height:1.5em;overflow:hidden;transform:translateZ(0);position:relative;z-index:10}.progress-box .progress-fill{width:0%;height:100%;background-color:#ff9bba;transition:height .5s ease-out}.progress-state{color:#ff7ca2;font-size:48px;font-weight:700}.progress-state.state-finish{display:none}.dump-truck{top:2em;left:-15em;width:14em;height:8em;opacity:0;display:none}.dump-truck.choco .bucket{background:url(https://d919tivf645f5.cloudfront.net/files.chocolat.work/game/track/chocolat.png) no-repeat center/100% 100%}.dump-truck.job .bucket{background:url(https://d919tivf645f5.cloudfront.net/files.chocolat.work/game/track/job.png) no-repeat center/100% 100%}.dump-truck .front{background:linear-gradient(#fff,#fff) 2.7em .75em/.2em 2em,linear-gradient(#a0a0a0,#a0a0a0) 1em 3.5em/.8em .2em,linear-gradient(#505050,#505050) 3.3em 6.1em/.5em .2em,linear-gradient(#505050,#505050) 3.3em 6.8em/.5em .2em,linear-gradient(83deg,#282828 49%,rgba(40,40,40,0) 50%) 1em .75em/5em 2em,radial-gradient(3.4em 4.6em at 33% 100%,rgba(255,255,255,0) 49%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 59%,rgba(255,255,255,0) 60%),radial-gradient(3.4em 4.6em at 33% 100%,rgba(255,63,48,0) 49%,#fff 50%);background-repeat:no-repeat;border-radius:10% 20% 5% 25%/10% 50% 5% 100%;top:.4em;left:10.1em;width:3.9em;height:7em}.dump-truck .bucket{top:0;left:0;width:10em;height:5.5em;transform:rotate(0);transform-origin:22% 100%}.dump-truck .base{background:#7f5b58;border-radius:.25em;top:5.5em;left:2em;width:8.3em;height:1.5em}.dump-truck .wheel{background:radial-gradient(100% 100%,#282828 9%,rgba(40,40,40,0) 10%),radial-gradient(100% 100%,#a0a0a0 29%,rgba(160,160,160,0) 30%),linear-gradient(90deg,rgba(255,255,255,.15) 49%,rgba(255,255,255,0) 50%),radial-gradient(100% 100%,#282828 49%,rgba(40,40,40,0) 50%);border-radius:50%;bottom:0;width:2.4em;height:2.4em}.dump-truck .wheel-front{left:10.4em}.dump-truck .wheel-middle{left:4.5em}.dump-truck .wheel-back{left:2em}.dump-truck.choco.active{animation:backupL 5s ease-in-out 1 forwards}.dump-truck.job.active{animation:backupL 5s ease-in-out 1 forwards}.dump-truck.choco.active .wheel{animation:spinR 5s ease-in-out infinite}.dump-truck.job.active .wheel{animation:spinR 5s ease-in-out infinite}@keyframes backupL{from{transform:translateX(0)}from,to{opacity:0}to{transform:translateX(calc(30em - 14em))}12.5%,87.5%{opacity:1}}@keyframes spinR{from{transform:rotate(0)}to{transform:rotate(6turn)}}'
        ];

        // html 對應
        css.push(
            'html {',
            '-webkit-touch-callout: none;',
            '-webkit-user-select: none;',
            'touch-action: manipulation;',
            '}'
        );
        
        // mobile 對應
        if (true === pc.platform.mobile) {
            css.push(
                '#application-splash {',
                'transform: scale(0.45);',
                'position: absolute;',
                'top: 50%;',
                'left: 50%;',
                '}'
            );
        }
        
        css = css.join('\n');

        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);
    };

    createCss();
    showSplash();

    app.on('preload:end', function () {
        app.off('preload:progress');
    });
    app.on('preload:progress', setProgress);
    app.on('start', hideSplash);

    // load track image
    function onImageLoaded(url, cb) {
        var image = new Image();
        image.src = url;

        if (image.complete) cb();
        else image.onload = cb();
    }

    onImageLoaded('https://d919tivf645f5.cloudfront.net/files.chocolat.work/game/track/chocolat.png', function () {
        [].forEach.call(document.querySelectorAll('.dump-truck'), function (data) {
            data.style.display = 'block';
        });
    });

    // add animation
    [].forEach.call(document.querySelectorAll('.js-animatie'), function (animateTarget) {
        animateTarget.addEventListener('animationend',function(){
            var nextActive = document.querySelector('.js-animatie:not(.active)');
            var nowActive =  document.querySelector('.js-animatie.active');
            if (stopLoadingAnimate) {
                nowActive.classList.remove('active');
            } else {
                nowActive.classList.remove('active');
                nextActive.classList.add('active');
            }

        });
    });
});

function gameEvents(app) {
    $('[data-screen="main"]').show();

    let ButtonStartGame = $('[data-butotn="startGame"]'),
        ButtonReplayGame = $('[data-butotn="replayGame"]'),
        ButtonSound = $('[data-game-button]');

    ButtonStartGame.on("click",function() {
        app.fire("ui:game");
        app.fire("game:ready");
    });

    ButtonReplayGame.on("click", function() {
        app.fire("ui:game");
        app.fire("game:ready");
    });

    ButtonSound.on("click", function() {
        var soundOn = $(this).hasClass('on'),
            soundOff = $(this).hasClass('off');

        if (soundOn) {
            $(this).removeClass('on').addClass('off');
            app.fire("sound:off");
        }
        else if (soundOff) {
            $(this).removeClass('off').addClass('on');
            app.fire("sound:on");
        }
    });

    app.on("ui:menu", function () {
        $('[data-screen="game"]').hide();
        $('[data-screen="main"]').show();
    }, this);

    app.on("game:ready", function () {
        $('[data-screen="game"]').show();
        $('[data-screen="main"]').hide();
    }, this);

    // app.on("game:gameover", function () {
    //     $('[data-screen="game"]').hide();
    //     $('[data-screen="main"]').show();
    //     $('[data-main-screen="main"]').hide();
    //     $('[data-main-screen="endGame"]').show();
    //     $('[data-screen-id="score-levelup"]').hide();
    //     $('[data-screen-id="score-ghost"]').hide();
    //     $('[data-screen-id="score-mypage"]').hide();

    //     ajaxGetMypage(function (res = false) {
    //         if (res) {
    //             let levelUp = res.levelAfter - res.levelBefore;
    //             if (0 < levelUp) {
    //                 $('[data-levelup="before"]').html(res.levelBefore);
    //                 $('[data-levelup="after"]').html(res.levelAfter);
    //                 $('[data-screen-id="score-levelup"]').show();
    //             } else {
    //                 $('[data-screen-id="score-mypage"]').show();
    //             }
    //         } else {
    //             $('[data-screen-id="score-ghost"]').show();
    //         }
    //     }, function () {
    //         $('[data-screen-id="score-ghost"]').show();
    //     });
    // }, this);
}
