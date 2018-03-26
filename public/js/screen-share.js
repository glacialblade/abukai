var screen = new Screen('abukai'); // argument is optional

// on getting local or remote streams
screen.onaddstream = function(e) {
    $('#video').append(e.video);
    $('#video').find('video').css({ width: '100%' })
};

// check pre-shared screens
// it is useful to auto-view
// or search pre-shared screens
screen.check();

// Choose Screen to share.
document.getElementById('share-screen').onclick = function() {
    screen.share();
};

var loaded = false;
screen.onscreen = function(_screen) {
    // Auto Load
    if(!loaded) {
        $('#share-screen').hide();
        var _screen = {
            userid: _screen.userid,
            roomid: _screen.roomid
        };
        screen.view(_screen);
        loaded = true;
    }
};