<div class="ui" data-screen="main">
    <div class="ui__main" data-main-screen="main">
        <div class="ui__main__panel"></div>
        <div class="ui__main__content">
            <div class="board board--main" data-obj-id="board">
                <div class="board__mascot" data-obj-id="board_mascot">
                    <img class="ui-img" src="/assets/img/chocoball/deco/img-chocochan.png">
                </div>
                <div class="board__content idx" data-obj-id="board_content">
                    <!-- index start -->
                    <div class="wrap active" data-obj-id="board_wrap" data-screen-id="index">
                        <div class="logo">
                            <img class="ui-img" src="/assets/img/chocoball/Texts/logo-chocoball.png" alt="CHOCOLAT BALL">
                        </div>
                        <ul class="btnList btnList--idx">
                            <li>
                                <button class="ui-btn" data-btn-screen="true" data-target-main-screen="main" data-target-screen="stage"><img class="ui-img" src="/assets/img/chocoball/buttons/btnStageMenu.png" alt="コースを選択する"></button>
                            </li>
                            <li>
                                <button class="ui-btn" data-btn-screen="true" data-target-main-screen="main" data-target-screen="select-rank"><img  class="ui-img" src="/assets/img/chocoball/buttons/btnRankMenu.png" alt="ランキング"></button>
                            </li>
                        </ul>
                    </div>
                    <!-- index end -->
                    <!-- コースを選択する start -->
                    <div class="wrap" data-obj-id="board_wrap" data-screen-id="stage">
                        <div class="title">
                            <div class="title__item">
                                <img class="ui-img" src="/assets/img/chocoball/Texts/title-stage-all.png" alt="コース一覽">
                            </div>
                        </div>
                        <div class="mascot mascot--stage">
                            <div class="mascot__item">
                                <img class="ui-img" src="/assets/img/chocoball/deco/deco-stage_mascot.png">
                            </div>
                        </div>
                        <ul class="btnList btnList--select">
                            <li>
                                <button
                                    class="ui-btn"
                                    data-btn-screen="true"
                                    data-target-main-screen="main"
                                    data-target-screen="stage-normal"
                                    data-get-ranking-data-button="true"
                                    data-get-ranking-data-type="0"
                                    data-get-ranking-data-stage="1"
                                ><img class="ui-img" src="/assets/img/chocoball/buttons/btnStage1.png" alt="通常コース"></button>
                            </li>
                            <!--<li>-->
                            <!--<button class="ui-btn ui-btn&#45;&#45;new" data-btn-screen="true" data-target-main-screen="main" data-target-screen="stage-shibuya" data-ajax-button="true"><img  class="ui-img" src="/assets/img/chocoball/buttons/btnStage2.png" alt="渋谷コース"></button>-->
                            <!--</li>-->
                        </ul>
                        <div class="back">
                            <button class="ui-btn ui-btn--back" data-btn-screen="true" data-target-main-screen="main" data-target-screen="index"><img class="ui-img" src="/assets/img/chocoball/buttons/btnBack.png" alt="もどる"></button>
                        </div>
                    </div>
                    <!-- コースを選択する end -->
                    <!-- 通常コース start -->
                    <div class="wrap" data-obj-id="board_wrap" data-screen-id="stage-normal">
                        <div class="title">
                            <div class="title__item">
                                <img class="ui-img" src="/assets/img/chocoball/Texts/title-stage-normal.png" alt="通常コース">
                            </div>
                        </div>
                        <ul class="btnList btnList--start">
                            <li>
                                <button class="ui-btn" data-butotn="startGame"><img class="ui-img" src="/assets/img/chocoball/buttons/btnStartGame.png" alt="ゲームスタート"></button>
                            </li>
                        </ul>
                        <div class="leaderBoard leaderBoard--part">
                            <div class="leaderBoard__top">
                                <img class="ui-img" src="/assets/img/chocoball/deco/deco-leaderboard-title.png" alt="コースランキング">
                            </div>
                            <?php require "common/leaderBoardBody.php"; ?>
                        </div>
                        <div class="back">
                            <button class="ui-btn ui-btn--back" data-btn-screen="true" data-target-main-screen="main" data-target-screen="stage"><img class="ui-img" src="/assets/img/chocoball/buttons/btnBack.png" alt="もどる"></button>
                        </div>
                    </div>
                    <!-- 通常コース end -->
                    <!-- 渋谷コース start -->
                    <!--<div class="wrap" data-obj-id="board_wrap" data-screen-id="stage-shibuya">-->
                    <!--<div class="title">-->
                    <!--<div class="title__item">-->
                    <!--<img class="ui-img" src="/assets/img/chocoball/Texts/title-stage-shibuya.png" alt="渋谷コース">-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--<ul class="btnList btnList&#45;&#45;start">-->
                    <!--<li>-->
                    <!--<button class="ui-btn"><img class="ui-img" src="/assets/img/chocoball/buttons/btnStartGame.png" alt="ゲームスタート"></button>-->
                    <!--</li>-->
                    <!--</ul>-->
                    <!--<div class="leaderBoard leaderBoard&#45;&#45;part">-->
                    <!--<div class="leaderBoard__top">-->
                    <!--<img class="ui-img" src="/assets/img/chocoball/deco/deco-leaderboard-title.png" alt="コースランキング">-->
                    <!--</div>-->
                    <!--<div class="leaderBoard__body">-->
                    <!--<div class="exScrollBar exScrollBar&#45;&#45;part" data-exscrollbar="container">-->
                    <!--<div class="exScrollBar__bar" data-exscrollbar="bar">-->
                    <!--<div class="scrollbarBox">-->
                    <!--<div class="scrollbarBox__inner" data-exscrollbar="inner"></div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--<div class="exScrollBar__content" data-exscrollbar="content">-->
                    <!--<div class="scoreItem scoreItem&#45;&#45;all">-->
                    <!--<span class="scoreItem__rank">1位</span>-->
                    <!--<span class="scoreItem__name"><span>一二三四五六七八九十</span></span>-->
                    <!--<span class="scoreItem__score">999,999円</span>-->
                    <!--</div>-->
                    <!--<div class="scoreItem scoreItem&#45;&#45;all">-->
                    <!--<span class="scoreItem__rank">2位</span>-->
                    <!--<span class="scoreItem__name"><span>ショコラちゃん</span></span>-->
                    <!--<span class="scoreItem__score">999,991円</span>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--<div class="leaderBoard__bottom">-->
                    <!--<div class="scoreItem scoreItem&#45;&#45;self">-->
                    <!--<span class="scoreItem__rank">105位</span>-->
                    <!--<span class="scoreItem__name"><span>使用者</span></span>-->
                    <!--<span class="scoreItem__score">100円</span>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--<div class="back">-->
                    <!--<button class="ui-btn ui-btn&#45;&#45;back" data-btn-screen="true" data-target-main-screen="main" data-target-screen="stage"><img class="ui-img" src="/assets/img/chocoball/buttons/btnBack.png" alt="もどる"></button>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!-- 渋谷コース end -->
                    <!-- ランキング start -->
                    <div class="wrap" data-obj-id="board_wrap" data-screen-id="select-rank">
                        <div class="title">
                            <div class="title__item">
                                <img class="ui-img" src="/assets/img/chocoball/Texts/title-ranking.png" alt="ランキング">
                            </div>
                        </div>
                        <ul class="btnList btnList--idx">
                            <li>
                                <button
                                    class="ui-btn"
                                    data-btn-screen="true"
                                    data-target-main-screen="main"
                                    data-target-screen="ranking-all"
                                    data-get-ranking-data-button="true"
                                    data-get-ranking-data-type="0"
                                    data-get-ranking-data-stage="1"
                                ><img class="ui-img" src="/assets/img/chocoball/buttons/btnRankAll.png" alt="総合ランキング"></button>
                            </li>
                            <li>
                                <button
                                    class="ui-btn"
                                    data-btn-screen="true"
                                    data-target-main-screen="main"
                                    data-target-screen="ranking-monthly"
                                    data-get-ranking-data-button="true"
                                    data-get-ranking-data-type="1"
                                    data-get-ranking-data-stage="1"><img class="ui-img" src="/assets/img/chocoball/buttons/btnRankMonth.png" alt="月間ランキング"></button>
                            </li>
                            <!--<li>-->
                            <!--<button class="ui-btn" data-btn-screen="true" data-target-main-screen="main" data-target-screen="ranking-stage"><img  class="ui-img" src="/assets/img/chocoball/buttons/btnRankStage.png" alt="コース別ランキング"></button>-->
                            <!--</li>-->
                        </ul>
                        <div class="back">
                            <button class="ui-btn ui-btn--back" data-btn-screen="true" data-target-main-screen="main" data-target-screen="index"><img class="ui-img" src="/assets/img/chocoball/buttons/btnBack.png" alt="もどる"></button>
                        </div>
                    </div>
                    <!-- ランキング end -->
                    <!-- 総合ランキング start -->
                    <div class="wrap" data-obj-id="board_wrap" data-screen-id="ranking-all">
                        <div class="title">
                            <div class="title__item">
                                <img class="ui-img" src="/assets/img/chocoball/Texts/title-ranking-all.png" alt="総合ランキング">
                            </div>
                        </div>
                        <div class="leaderBoard leaderBoard--all">
                            <div class="leaderBoard__top"></div>
                            <?php require "common/leaderBoardBody.php"; ?>
                        </div>
                        <div class="back">
                            <button class="ui-btn ui-btn--back" data-btn-screen="true" data-target-main-screen="main" data-target-screen="select-rank"><img class="ui-img" src="/assets/img/chocoball/buttons/btnBack.png" alt="もどる"></button>
                        </div>
                    </div>
                    <!-- 総合ランキング end -->
                    <!-- 月間ランキング start -->
                    <div class="wrap" data-obj-id="board_wrap" data-screen-id="ranking-monthly">
                        <div class="title">
                            <div class="title__item">
                                <img class="ui-img" src="/assets/img/chocoball/Texts/title-ranking-monthly.png" alt="月間ランキング">
                            </div>
                        </div>
                        <div class="leaderBoard leaderBoard--all">
                            <div class="leaderBoard__top"></div>
                            <?php require "common/leaderBoardBody.php"; ?>
                        </div>
                        <div class="back">
                            <button class="ui-btn ui-btn--back" data-btn-screen="true" data-target-main-screen="main" data-target-screen="select-rank"><img class="ui-img" src="/assets/img/chocoball/buttons/btnBack.png" alt="もどる"></button>
                        </div>
                    </div>
                    <!-- 月間ランキング end -->
                    <!-- コース別ランキング start -->
                    <div class="wrap" data-obj-id="board_wrap" data-screen-id="ranking-stage">
                        <div class="title">
                            <div class="title__item">
                                <img class="ui-img" src="/assets/img/chocoball/Texts/title-stage-ranking.png" alt="コース別ランキング">
                            </div>
                        </div>
                        <ul class="btnList btnList--select">
                            <li>
                                <button
                                    class="ui-btn"
                                    data-btn-screen="true"
                                    data-target-main-screen="main"
                                    data-target-screen="ranking-stage-normal"
                                    data-ajax-button="true"
                                    data-get-ranking-data-button="true"
                                    data-get-ranking-data-type="0"
                                    data-get-ranking-data-stage="1"><img class="ui-img" src="/assets/img/chocoball/buttons/btnStage1.png" alt="通常コース"></button>
                            </li>
                            <!--<li>-->
                            <!--<button class="ui-btn ui-btn&#45;&#45;new" data-btn-screen="true" data-target-main-screen="main" data-target-screen="ranking-stage-shibuya" data-ajax-button="true"><img  class="ui-img" src="/assets/img/chocoball/buttons/btnStage2.png" alt="渋谷コース"></button>-->
                            <!--</li>-->
                        </ul>
                        <div class="back">
                            <button class="ui-btn ui-btn--back" data-btn-screen="true" data-target-main-screen="main" data-target-screen="select-rank"><img class="ui-img" src="/assets/img/chocoball/buttons/btnBack.png" alt="もどる"></button>
                        </div>
                    </div>
                    <!-- コース別ランキング end -->
                    <!-- 通常コース ランキング start -->
                    <div class="wrap" data-obj-id="board_wrap" data-screen-id="ranking-stage-normal">
                        <div class="title">
                            <div class="title__item">
                                <img class="ui-img" src="/assets/img/chocoball/Texts/title-stage-normal.png" alt="通常コース">
                            </div>
                        </div>
                        <div class="leaderBoard leaderBoard--all">
                            <div class="leaderBoard__top"></div>
                            <?php require "common/leaderBoardBody.php"; ?>
                        </div>
                        <div class="back">
                            <button class="ui-btn ui-btn--back" data-btn-screen="true" data-target-main-screen="main" data-target-screen="ranking-stage"><img class="ui-img" src="/assets/img/chocoball/buttons/btnBack.png" alt="もどる"></button>
                            <button class="ui-btn ui-btn--goStage" data-btn-screen="true" data-target-main-screen="main" data-target-screen="stage-normal"><img class="ui-img" src="/assets/img/chocoball/buttons/btnGoStage.png" alt="コースに移動する"></button>
                        </div>
                    </div>
                    <!-- 通常コース ランキング end -->
                    <!-- 渋谷コース ランキング start -->
                    <!--<div class="wrap" data-obj-id="board_wrap" data-screen-id="ranking-stage-shibuya">-->
                    <!--<div class="title">-->
                    <!--<div class="title__item">-->
                    <!--<img class="ui-img" src="/assets/img/chocoball/Texts/title-stage-shibuya.png" alt="渋谷コース">-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--<div class="leaderBoard leaderBoard&#45;&#45;all">-->
                    <!--<div class="leaderBoard__top"></div>-->
                    <!--<div class="leaderBoard__body">-->
                    <!--<div class="exScrollBar exScrollBar&#45;&#45;all" data-exscrollbar="container">-->
                    <!--<div class="exScrollBar__bar" data-exscrollbar="bar">-->
                    <!--<div class="scrollbarBox">-->
                    <!--<div class="scrollbarBox__inner" data-exscrollbar="inner"></div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--<div class="exScrollBar__content" data-exscrollbar="content">-->
                    <!--<div class="scoreItem scoreItem&#45;&#45;all">-->
                    <!--<span class="scoreItem__rank">1位</span>-->
                    <!--<span class="scoreItem__name"><span>一二三四五六七八九十</span></span>-->
                    <!--<span class="scoreItem__score">999,999円</span>-->
                    <!--</div>-->
                    <!--<div class="scoreItem scoreItem&#45;&#45;all">-->
                    <!--<span class="scoreItem__rank">2位</span>-->
                    <!--<span class="scoreItem__name"><span>ショコラちゃん</span></span>-->
                    <!--<span class="scoreItem__score">999,991円</span>-->
                    <!--</div>-->
                    <!--<div class="scoreItem scoreItem&#45;&#45;all">-->
                    <!--<span class="scoreItem__rank">3位</span>-->
                    <!--<span class="scoreItem__name"><span>ショちゃん</span></span>-->
                    <!--<span class="scoreItem__score">888,888円</span>-->
                    <!--</div>-->
                    <!--<div class="scoreItem scoreItem&#45;&#45;all">-->
                    <!--<span class="scoreItem__rank">4位</span>-->
                    <!--<span class="scoreItem__name"><span>白白</span></span>-->
                    <!--<span class="scoreItem__score">777,777円</span>-->
                    <!--</div>-->
                    <!--<div class="scoreItem scoreItem&#45;&#45;all">-->
                    <!--<span class="scoreItem__rank">5位</span>-->
                    <!--<span class="scoreItem__name"><span>迪西</span></span>-->
                    <!--<span class="scoreItem__score">333,111円</span>-->
                    <!--</div>-->
                    <!--<div class="scoreItem scoreItem&#45;&#45;all">-->
                    <!--<span class="scoreItem__rank">6位</span>-->
                    <!--<span class="scoreItem__name"><span>NiuNiu</span></span>-->
                    <!--<span class="scoreItem__score">111,999円</span>-->
                    <!--</div>-->
                    <!--<div class="scoreItem scoreItem&#45;&#45;all">-->
                    <!--<span class="scoreItem__rank">7位</span>-->
                    <!--<span class="scoreItem__name"><span>馬麻</span></span>-->
                    <!--<span class="scoreItem__score">99,991円</span>-->
                    <!--</div>-->
                    <!--<div class="scoreItem scoreItem&#45;&#45;all">-->
                    <!--<span class="scoreItem__rank">8位</span>-->
                    <!--<span class="scoreItem__name"><span>把拔</span></span>-->
                    <!--<span class="scoreItem__score">10,000円</span>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--<div class="leaderBoard__bottom">-->
                    <!--<div class="scoreItem scoreItem&#45;&#45;self">-->
                    <!--<span class="scoreItem__rank">105位</span>-->
                    <!--<span class="scoreItem__name"><span>使用者</span></span>-->
                    <!--<span class="scoreItem__score">100円</span>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--<div class="back">-->
                    <!--<button class="ui-btn ui-btn&#45;&#45;back" data-btn-screen="true" data-target-main-screen="main" data-target-screen="ranking-stage"><img class="ui-img" src="/assets/img/chocoball/buttons/btnBack.png" alt="もどる"></button>-->
                    <!--<button class="ui-btn ui-btn&#45;&#45;goStage" data-btn-screen="true" data-target-main-screen="main" data-target-screen="stage-shibuya"><img class="ui-img" src="/assets/img/chocoball/buttons/btnGoStage.png" alt="コースに移動する"></button>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!-- 渋谷コース ランキング end -->
                </div>
            </div>
            <!-- 設定 start -->
            <div class="board board--setting" data-obj-id="setting">
                <div class="board__content other" data-obj-id="setting_content">
                    <div class="wrap">
                        <div class="title">
                            <div class="title__item">
                                <img class="ui-img" src="/assets/img/chocoball/Texts/title-setting.png" alt="設定">
                            </div>
                        </div>
                        <div class="settings">
                            <div class="settings__top"></div>
                            <div class="settings__body">
                                <div class="settingItem settingItem--sound">
                                    <div class="settingItem__label"><img class="ui-img" src="/assets/img/chocoball/Texts/label-sound.png" alt="サウンド"></div>
                                    <div class="settingItem__content">
                                        <button type="button" class="soundBtn off" data-game-button="sound"></button>
                                    </div>
                                </div>
                                <div class="settingItem settingItem--share">
                                    <div class="settingItem__label"><img class="ui-img" src="/assets/img/chocoball/Texts/label-share.png" alt="友達にシェアする"></div>
                                    <div class="settingItem__content">
                                        <ul class="socialList">
                                            <li><a href="https://twitter.com/intent/tweet?text=体入ショコラさんで紹介されました♪%0a%0ahttps://chocolat.work/promotion%0a%0a良かったらイイネしてね♡%0a%0a%23ショコティッシュ%0a%23ショコティッシュ選手権" target="_blank"><img class="ui-img" src="/assets/img/chocoball/icons/iconTWITTER.png" alt="ツイッター"></a></li>
                                            <li><a href="https://www.facebook.com/sharer.php?u=https://chocolat.work/promotion&quote=体入ショコラさんで紹介されました♪%0a%0ahttps://chocolat.work/promotion%0a%0a良かったらイイネしてね♡%0a%0a%23ショコティッシュ%0a%23ショコティッシュ選手権" target="_blank"><img class="ui-img" src="/assets/img/chocoball/icons/iconFB.png" alt="フェイスブック"></a></li>
                                            <li><a href="http://line.naver.jp/R/msg/text/?体入ショコラさんで紹介されました♪%0a%0ahttps://chocolat.work/promotion%0a%0a良かったらイイネしてね♡%0a%0a%23ショコティッシュ%0a%23ショコティッシュ選手権" target="_blank"><img class="ui-img" src="/assets/img/chocoball/icons/iconLINE.png" alt="ライン"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="settings__bottom"></div>
                        </div>
                        <div class="back">
                            <button class="ui-btn ui-btn--back" data-btn-setting="false"><img class="ui-img" src="/assets/img/chocoball/buttons/btnBack.png" alt="もどる"></button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 設定 end -->
            <div class="tools">
                <div class="tools__setting">
                    <button class="ui-btn" data-btn-setting="true" data-target-main-screen="main" data-target-screen="setting">
                        <img class="ui-img" src="/assets/img/chocoball/buttons/btnTool.png">
                    </button>
                </div>
                <div class="tools__account">
                    <a class="ui-btn" href="/mypage/login/" target="_blank">
                        <span class="ui-login"><span class="ui-login-text" data-game="level">ログイン</span></span>
                        <!--<img class="ui-img" src="/assets/img/chocoball/buttons/btnLogin.png">-->
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="ui__endGame" data-main-screen="endGame">
        <div class="ui__endGame__panel"></div>
        <div class="ui__endGame__content">
            <!-- game over start -->
            <div class="scoreLevelup" data-screen-id="score-levelup">
                <div class="scoreLevelup__body">
                    <img class="ui-img" src="/assets/img/chocoball/backgrounds/bg-levelup.png" alt="コースを選択する">
                </div>
                <div class="scoreLevelup__level scoreLevelup__level--left">LV<span data-levelup="before"></span></div>
                <div class="scoreLevelup__level scoreLevelup__level--right">LV<span data-levelup="after"></span></div>
                <div class="scoreLevelup__close">
                    <button class="ui-btn" data-btn-screen="true" data-target-main-screen="endGame" data-target-screen="score-mypage">
                        <img class="ui-img" src="/assets/img/chocoball/buttons/btnLevelUp.svg" alt="閉じる">
                    </button>
                </div>
            </div>
            <div class="scoreBoard scoreBoard--ghost" data-screen-id="score-ghost">
                <div class="scoreBoard__body">
                    <div class="title"><img class="ui-img" src="/assets/img/chocoball/Texts/title-score.png"></div>
                    <div class="scoreShow">
                        <div class="scoreShow__num"><span data-endgame="score">0</span></div>
                    </div>
                    <div class="news">
                        <div class="news__dialog news__dialog--top">
                            <img class="ui-img" src="/assets/img/chocoball/Texts/dialog-1.png">
                        </div>
                        <div class="news__dialog news__dialog--btn">
                            <img class="ui-img" src="/assets/img/chocoball/Texts/dialog-2.png">
                            <a class="ui-btn" href="/mypage/login/" target="_blank"><img class="ui-img" src="/assets/img/chocoball/buttons/btnAccount.png"></a>
                        </div>
                        <div class="news__mascot"><img class="ui-img" src="/assets/img/chocoball/deco/img-mascot.png"></div>
                    </div>

                    <div class="back back--all">
                        <button class="ui-btn ui-btn--retry" data-butotn="startGame"><img class="ui-img" src="/assets/img/chocoball/buttons/btnGameRetry.png" alt="リトライ"></button>
                        <button class="ui-btn ui-btn--back" data-btn-screen="true" data-target-main-screen="main" data-target-screen="reset"><img class="ui-img" src="/assets/img/chocoball/buttons/btnBack-home.png" alt="もどる"></button>
                    </div>
                </div>
            </div>
            <div class="scoreBoard scoreBoard--mypage" data-screen-id="score-mypage">
                <div class="scoreBoard__body">
                    <div class="title"><img class="ui-img" src="/assets/img/chocoball/Texts/title-score.png"></div>
                    <div class="scoreShow">
                        <div class="scoreShow__num"><span data-endgame="score">0</span></div>
                    </div>

                    <div class="back back--all">
                        <button class="ui-btn ui-btn--retry" data-butotn="startGame"><img class="ui-img" src="/assets/img/chocoball/buttons/btnGameRetry.png" alt="リトライ"></button>
                        <button class="ui-btn ui-btn--back" data-btn-screen="true" data-target-main-screen="main" data-target-screen="reset"><img class="ui-img" src="/assets/img/chocoball/buttons/btnBack-home.png" alt="もどる"></button>
                    </div>
                </div>
            </div>
            <!-- game over end -->
        </div>
    </div>
    <div class="ui__mask" data-loading="main">
        <div class="loading">LOADING</div>
    </div>
</div>

<!-- game start -->
<div class="ui game" data-screen="game">
    <div class="ui__game">
        <div class="ui__game__content">
            <div class="score">
                <div class="score__body">
                    <div class="scoreShow">
                        <div class="scoreShow__num"><span class="scoreShow__num--num" data-game="score">0</span></div>
                    </div>
                </div>
            </div>
            <?php require "common/buffs.php" ?>
        </div>
    </div>
</div>
<!-- game end -->