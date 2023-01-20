import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);



function onPlay(e) {
    localStorage.setItem('videoplayer-current-time', e.seconds); 
}

player.on('timeupdate', throttle(onPlay, 1000));
console.log(localStorage)

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
