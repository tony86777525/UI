screenButton();

$('[data-ajax-button="true"]').on('click', function () {

    var successFunc = function (data) {
        if (data) {
            var innerHtml = '';
            var targetSingle = $('.leaderBoard__bottom');

            if (data.currentData != null) {
                var currentData = data.currentData;
                innerHtml += '<div class="scoreItem scoreItem--self">'
                + '<span class="scoreItem__rank">' + currentData.rank + '位</span>'
                + '<span class="scoreItem__name"><span>' + currentData.name + '</span></span>'
                + '<span class="scoreItem__score">' + currentData.score + '円</span>'
                + '</div>';

                targetSingle.html(innerHtml);

                // _this._onShowMyRanking(currentData.rank, currentData.name, currentData.score);
            }

            if (data.data != null) {
                var totalData = data.data;
                var target = $('[data-exscrollbar="content"]');
                target.html('');

                for (var i in totalData) {
                    innerHtml = '';
                    innerHtml += '<div class="scoreItem scoreItem--all">'
                        + '<span class="scoreItem__rank">' + totalData[i].rank + '位</span>'
                        + '<span class="scoreItem__name"><span>' + totalData[i].name + '</span></span>'
                        + '<span class="scoreItem__score">' + totalData[i].score + '円</span>'
                        + '</div>';
                    target.appendChild(innerHtml);
                    // _this._onAddRandomEntry(totalData[i].rank, totalData[i].name, totalData[i].score);
                }
            }
        }
        // setScrollHeight();

        // setTimeout(function () {
        //     _this.panelScreenTarget.enabled = false;
        // }, 1000);
    };

    var completeFunc = function () {
        // setTimeout(function () {
        //     _this.panelScreenTarget.enabled = false;
        // }, 1000);
    };
    ajaxGetScore(0, 1, successFunc, completeFunc);
});
// soundButton();

// $('[data-js-item="pageBtn"]').on('click',function(){
//     var _targetWrap=$(this).data('btn-id');
//     $(this).closest('[data-obj-id="board_wrap"]').removeClass('active').hide();
//     if (_targetWrap === 'index') {
//         $('[data-obj-id="board_mascot"]').fadeIn(200);
//         $('[data-obj-id="board_content"]').removeClass('other').addClass('idx');
        
//     } else {
//         $('[data-obj-id="board_mascot"]').hide();
//         $('[data-obj-id="board_content"]').removeClass('idx').addClass('other');
//     }
//     $('[data-wrap-id="'+_targetWrap+'"]').fadeIn(600).css({
//         'display' : 'table-cell'
//     });
//     setScrollHeight();
// });
// function soundButton() {
//     var button = document.querySelector('[data-game-button="sound"]');
//     button.addEventListener('click', function () {
//         buttons = document.querySelectorAll('[data-sound]');
//         [].forEach.call(buttons, function (button) {
//             button.classList.toggle('active');
//         });
//     });
// }

function screenButton() {
    var screenDisplayBlockClassName = 'active';
    var screens = document.querySelectorAll('[data-wrap-id]');
    var screenButtons = document.querySelectorAll('[data-btn-id]');
    var ajaxButtons =  document.querySelectorAll('[data-btn-id]');

    [].forEach.call(screenButtons, function (button) {
        button.addEventListener('click', function () {
            [].forEach.call(screens, function (screen) {
                screen
                    .classList
                    .remove(screenDisplayBlockClassName);
            });

            var targetScreen = this.getAttribute('data-btn-id');

            document
                .querySelector('[data-wrap-id=' + targetScreen + ']')
                .classList.add(screenDisplayBlockClassName);

            // if ('tool' !== targetScreen) {
            //     document.querySelector('[data-wrap-id="tool"] [data-btn-id]').setAttribute('data-btn-id', targetScreen);
            // }

            // scrollbar();
        });
    });

    // [].forEach.call(ajaxButtons, function (button) {
    //     button.addEventListener('click', function () {
    //         if ('ajaxGetScore' === this.getAttribute('data-btn-id')) {
    //             var dataType = this.getAttribute('data-ajax-type');
    //             var stage = this.getAttribute('data-ajax-stage');

    //             var target = document.querySelector('.show[data-screen] [data-scrollbar-target="total"]');
    //             target.innerHTML = '';
    //             var targetSingle = document.querySelector('.show[data-screen] [data-scrollbar-target="single"]');
    //             targetSingle.innerHTML = '';
    //             var successFunc = function (data) {
    //                 if (data) {
    //                     var innerHtml = '';

    //                     if (data.currentData != null) {
    //                         var currentData = data.currentData;
    //                         innerHtml = document.createElement('tr');
    //                         innerHtml.innerHTML = '<td>' + currentData.rank + '位</td><td>' + currentData.name + '</td><td>' + currentData.score + '円</td>';
    //                         targetSingle.appendChild(innerHtml);

    //                         // _this._onShowMyRanking(currentData.rank, currentData.name, currentData.score);
    //                     }

    //                     if (data.data != null) {
    //                         var totalData = data.data;

    //                         for (var i in totalData) {
    //                             innerHtml = document.createElement('tr');
    //                             innerHtml.innerHTML = '<td>' + totalData[i].rank + '位</td><td>' + totalData[i].name + '</td><td>' + totalData[i].score + '円</td>';
    //                             target.appendChild(innerHtml);
    //                             // _this._onAddRandomEntry(totalData[i].rank, totalData[i].name, totalData[i].score);
    //                         }
    //                     }
    //                 }
    //                 setScrollHeight();

    //                 // setTimeout(function () {
    //                 //     _this.panelScreenTarget.enabled = false;
    //                 // }, 1000);
    //             };

    //             var completeFunc = function () {
    //                 // setTimeout(function () {
    //                 //     _this.panelScreenTarget.enabled = false;
    //                 // }, 1000);
    //             };
    //             ajaxGetScore(dataType, stage, successFunc, completeFunc);
    //         }
    //     });
    // });
}

function scrollbar() {

    var scrollbarTarget = document.querySelector(".show[data-screen] .scrollbarContent");
    var scrollbarMain = document.querySelector(".show[data-screen] .scrollbarMain");
    var scrollbarInner = document.querySelector(".show[data-screen] .scrollbarInner");
    var startY = 0;

    if (null === scrollbarTarget) return false;

    setScrollHeight();

    scrollbarTarget.addEventListener("scroll", function (e) {
        // scrollbarMain.style.top = this.scrollTop + 'px';

        var $scrollTop = scrollbarTarget.scrollTop;
        var $scrollHeight = scrollbarTarget.scrollHeight;
        var $heightPer = 100 * $scrollTop / $scrollHeight;

        scrollbarInner.style.top =  $heightPer + '%';
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
        });
    }

    function stop() {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', stop);
    }
}

function setScrollHeight() {
    var scrollbarTarget = document.querySelector(".show[data-screen] .scrollbarContent");
    var scrollbarInner = document.querySelector(".show[data-screen] .scrollbarInner");

    if (null === scrollbarTarget) return false;

    var $innerHeight = scrollbarTarget.offsetHeight;
    var $mainHeight = scrollbarTarget.scrollHeight;
    var $heightPer = 100 * $innerHeight / $mainHeight;

    scrollbarInner.style.height = $heightPer + '%';
}

function ajaxGetScore(
    dateType = '0',
    stage = '1',
    successFunc = function () {},
    completeFunc = function () {}
    ) {
    // 資料內容
    var data = {
        'stage': stage,
        'dateType': dateType
    };
    let string = JSON.stringify(data);
    var hash = btoa(string);
    // Post Url
    var url = '/chocoball/api/getScore';

    $.ajax({
        type : 'POST',
        url : url,
        dataType : 'json',
        data : {'hash':hash },
        success : function(res) {
            if (res.status) {
                successFunc(res.data);
            }
        },
        error : function () {
            var test = defaultScoreData();
            completeFunc();
            successFunc(test.data);
        },
    });

    function defaultScoreData() {
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