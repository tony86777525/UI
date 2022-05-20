
setTimeout(function () {
    setProgress(0.2);
    setTimeout(function () {
        setProgress(0.4);
        setTimeout(function () {
            setProgress(0.6);
            setTimeout(function () {
                setProgress(0.8);
                setTimeout(function () {
                    setProgress(1);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);

var setProgress = function setProgress (value) {
    var bar = document.querySelector('.progress-fill');
    if(bar) {
        value = Math.min(1, Math.max(0, value));
        bar.style.height = value * 100 + '%';
    }
};