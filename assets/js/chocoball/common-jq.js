screenButton();
settingButton();
getRankingAllDataButton();
getGameLevel();

function getRankingAllDataButton() {
    $('[data-get-ranking-data-button="true"]').on('click', function () {
        var target = $('[data-screen-id="' + $(this).data('target-screen') + '"]');
        var targetSingle = target.find('[data-ranking-data="single"]');
        var targetAll = target.find('[data-ranking-data="all"]');
        var dataType = $(this).data('get-ranking-data-type');
        var stage = $(this).data('get-ranking-data-stage');

        var beforeSendFunc = function () {
            targetSingle.find('.scoreItem__rank').html('-');
            targetSingle.find('.scoreItem__name').html('');
            targetSingle.find('.scoreItem__score').html('');
            targetAll.html('');
        };

        var successFunc = function (data) {
            if (data) {
                  $('[data-game="level"]').html('ログイン');
                if (data.currentData != null) {
                    var currentData = data.currentData;
                    targetSingle.find('.scoreItem__rank').html(currentData.rank + '位');
                    targetSingle.find('.scoreItem__name').html(currentData.name + '');
                    targetSingle.find('.scoreItem__score').html(currentData.score + '円');
                    $('[data-game="level"]').html(currentData.level);
                }

                if (data.data != null) {
                    var totalData = data.data;
                    targetAll.html('');

                    innerHtml = '';

                    for (var i in totalData) {
                        innerHtml += '<div class="scoreItem scoreItem--all">'
                            + '<span class="scoreItem__rank">' + totalData[i].rank + '位</span>'
                            + '<span class="scoreItem__name"><span>' + totalData[i].name + '</span></span>'
                            + '<span class="scoreItem__score">' + totalData[i].score + '円</span>'
                            + '</div>';
                    }

                    targetAll.html(innerHtml);
                }
            }
            setScrollHeight();

            // setTimeout(function () {
            //     _this.panelScreenTarget.enabled = false;
            // }, 1000);
        };

        ajaxGetRankingScore(dataType, stage, beforeSendFunc, successFunc);
    });
}

function screenButton() {
    var screens = $('[data-obj-id="board_wrap"]'),
        screenButtons = $('[data-btn-screen="true"]'),
        getRankingDataButtons = $('[data-get-ranking-data-button="true"]');

    screenButtons.on('click',function(){
        // main screen
        var mainScreen = $(this).data('target-main-screen');
        var mainScreenTarget = $('[data-main-screen="' + mainScreen + '"]');
        if (mainScreenTarget.length > 0) mainScreenTarget.show();

        var screen = $(this).data('target-screen');
        if ('main' === mainScreen) {
            // screen
            $(this).closest('[data-obj-id="board_wrap"]').removeClass('active').hide();
            if (screen === 'reset') {
                resetMainScreen();
                resetEndGameScreen();
            } else if (screen === 'index') {
                $('[data-obj-id="board_mascot"]').fadeIn(200);
                $('[data-obj-id="board_content"]').removeClass('other').addClass('idx');
            } else {
                $('[data-obj-id="board_mascot"]').hide();
                $('[data-obj-id="board_content"]').removeClass('idx').addClass('other');
            }
            $('[data-screen-id="'+ screen +'"]').fadeIn(600).css({
                'display' : 'table-cell'
            }).addClass('active');
        } else if ('game' === mainScreen) {
            if (screen === 'reset') {
                resetMainScreen();
            }
        } else if ('endGame' === mainScreen) {
            $(this).closest('[data-screen-id]').hide();
            $('[data-screen-id="'+ screen +'"]').show();
        }
    });

    getRankingDataButtons.on('click',function(){
        setScrollHeight();
        scrollbar();
    });

    let ButtonStartGame = $('[data-butotn="startGame"]'),
        ButtonReplayGame = $('[data-butotn="replayGame"]'),
        mainScreen = $('[data-main-screen="main"]'),
        gameScreen = $('[data-main-screen="game"]'),
        endGameScreen = $('[data-main-screen="endGame"]');

    ButtonStartGame.on("click",function() {
        mainScreen.hide();
        gameScreen.show();
        endGameScreen.hide();
    });

    ButtonReplayGame.on("click", function() {
        mainScreen.hide();
        gameScreen.show();
        endGameScreen.hide();
    });
}

function resetMainScreen() {
    $('[data-obj-id="board_wrap"]').removeClass('active').hide();
    $('[data-obj-id="board_mascot"]').show();
    $('[data-obj-id="board_content"]').removeClass('other').addClass('idx');
    $('[data-screen-id="index"]').fadeIn(600).css({
        'display' : 'table-cell'
    }).addClass('active');
}

function resetEndGameScreen() {
    $('[data-screen-id="score-mypage"], [data-screen-id="score-ghost"], [data-screen-id="score-levelup"]')
       .removeClass('active').hide();
}

function resetGameScreen() {
    $('[data-obj-id="board_wrap"]').removeClass('active').hide();
}

function settingButton() {
    var openSettingBtn = $('[data-btn-setting="true"]'),
        closeSettingBtn = $('[data-btn-setting="false"]');

    openSettingBtn.on('click',function(){
        $('[data-obj-id="board"]').fadeOut();
        $('[data-obj-id="setting"]').fadeIn();
    });

    closeSettingBtn.on('click',function(){
        $('[data-obj-id="board"]').fadeIn();
        $('[data-obj-id="setting"]').fadeOut();
    });
}

function scrollbar() {
    var scrollbarTarget = document.querySelector('.active[data-obj-id="board_wrap"] [data-exscrollbar="content"]'),
        scrollbarMain = document.querySelector('.active[data-obj-id="board_wrap"] [data-exscrollbar="bar"]'),
        scrollbarInner = document.querySelector('.active[data-obj-id="board_wrap"] [data-exscrollbar="inner"]');
    var startY = 0;
    if (null === scrollbarTarget) return false;

    scrollbarTarget.addEventListener("scroll", function (e) {

        var $scrollTop = scrollbarTarget.scrollTop;
        var $scrollHeight = scrollbarTarget.scrollHeight;
        var $heightPer = 100 * $scrollTop / $scrollHeight;

        scrollbarInner.style.top = $heightPer + '%';
    });

    scrollbarInner.addEventListener('mousedown', function (e) {
        e.preventDefault();
        startY = e.clientY - scrollbarInner.offsetTop;
        document.addEventListener('mouseup', stop);
        document.addEventListener('mousemove', move);
    });

    function move(e) {
        document.addEventListener('mouseleave', stop);

        var $scrollTop = e.clientY - startY;
        var $scrollHeight = scrollbarMain.offsetHeight;

        $scrollTop = Math.max(Math.min($scrollTop, $scrollHeight), 0);

        var $heightPer = ($scrollTop) / $scrollHeight;

        scrollbarTarget.scrollTo({
            top: $heightPer * scrollbarTarget.scrollHeight,
        })
    }

    function stop() {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', stop)
    }
}

function setScrollHeight() {
    var scrollbarTarget = document.querySelector('.active[data-obj-id="board_wrap"] [data-exscrollbar="content"]'),
        scrollbarInner = document.querySelector('.active[data-obj-id="board_wrap"] [data-exscrollbar="inner"]');

    if (null === scrollbarTarget) return false;

    var $innerHeight = scrollbarTarget.offsetHeight;
    var $mainHeight = scrollbarTarget.scrollHeight;
    var $heightPer = 100 * $innerHeight / $mainHeight;


    scrollbarInner.style.height = $heightPer + '%';
}

function ajaxGetRankingScore(
    dateType = '0',
    stage = '1',
    beforeSendFunc = function () {},
    successFunc = function () {}
    ) {
    // 資料內容
    var data = {
        'stage': stage,
        'dateType': dateType
    };
    let string = JSON.stringify(data);
    var hash = btoa(string);

    var test = defaultRankingScoreData();
    successFunc(test.data);

    function defaultRankingScoreData() {
        return {
            "status":true,
            "data":{
                "data":[
                    {"mypage_id":"7","name":"\u4e09\u6728","nickname":"chocoMypageDC","score":"57200","stage":"1","created_at":"2021-12-05 17:22:10","rank":1},
                    {"mypage_id":"12","name":"\u7389\u91ce\u674f\u4f73","nickname":"\u6d77","score":"8200","stage":"1","created_at":"2021-12-05 18:04:33","rank":2},
                    {"mypage_id":"9","name":"\u6749\u5c71\u3048\u308a\u3053","nickname":"\u3048\u308a","score":"900","stage":"1","created_at":"2021-12-05 17:22:23","rank":3},
                    {"mypage_id":"11","name":"\u4f0a\u85e4\u5343\u7d18","nickname":"\u3061\u30fc\u3061\u3083\u3093","score":"300","stage":"1","created_at":"2022-01-11 15:35:34","rank":4},
                    {"mypage_id":"20043","name":"tony","nickname":"tttt","score":"300","stage":"1","created_at":"2022-01-18 13:28:43","rank":5},
                    {"mypage_id":"20043","name":"tony","nickname":"tttt","score":"300","stage":"1","created_at":"2022-01-18 13:28:43","rank":6},
                    {"mypage_id":"20043","name":"tony","nickname":"tttt","score":"300","stage":"1","created_at":"2022-01-18 13:28:43","rank":7},
                    {"mypage_id":"20043","name":"tony","nickname":"tttt","score":"300","stage":"1","created_at":"2022-01-18 13:28:43","rank":8},
                    {"mypage_id":"20043","name":"tony","nickname":"tttt","score":"300","stage":"1","created_at":"2022-01-18 13:28:43","rank":9},
                    {"mypage_id":"20043","name":"tony","nickname":"tttt","score":"300","stage":"1","created_at":"2022-01-18 13:28:43","rank":10}
                ],
                "currentData":
                    {"mypage_id":"7","name":"\u4e09\u6728","nickname":"chocoMypageDC","score":"57200","stage":"1","created_at":"2021-12-05 17:22:10","rank":1}
            }
        };
    }
}

function getGameLevel() {
   // Post Url
   // var url = '/chocoball/api/getLevel';
   //
   // $.ajax({
   //    type: 'POST',
   //    url: url,
   //    dataType: 'json',
   //    beforeSend: function () {},
   //    success: function (res) {
   //       $('[data-game="level"]').html(res.data.level);
   //    },
   //    complete: function () {},
   //    error: function () {},
   // });
}

// function ajaxSendScore(score, stage = '1') {
//     // 資料內容
//     var array = {'score' : score, 'stage' : stage};
//     let string = JSON.stringify(array);
//     var hash = btoa(string);
//     // Post Url
//     var url = '/chocoball/api/score';
//
//     $.ajax({
//         type : 'POST',
//         url : url,
//         dataType : 'json',
//         data : {'hash':hash },
//         success : function(res) {
//             if (res.status) {}
//         }
//     });
// }
//
//
// function ajaxGetMypage(successFunc = function () {}, completeFunc = function () {}) {
//     // Post Url
//     var url = '/chocoball/api/checkMypage';
//
//     $.ajax({
//         type : 'POST',
//         url : url,
//         dataType : 'json',
//         success : function(res) {
//             successFunc(res);
//         },
//         error : function () {
//             completeFunc();
//         },
//     });
// }