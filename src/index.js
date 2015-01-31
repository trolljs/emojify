var emojis = require('./corpus.json'),
    nodes = document.getElementsByTagName('*'),
    i = nodes.length;

function getRandomEmoji() {
    return emojis[ Math.floor(Math.random() * emojis.length) ];
}

while ( i-- ) {
  if ( (Math.floor(Math.random() * 10) + 1) === 1 ) {
    var img = document.createElement('img');
    img.src = 'https://raw.githubusercontent.com/arvida/emoji-cheat-sheet.com/d1a6de715e4017f90a5f4201a5eb25cf056d0a1f/public/graphics/emojis/' + getRandomEmoji() + '.png';
    img.height = '20';
    img.width = '20';
    img.className = 'emojify';
    nodes[i].parentNode.insertBefore( img, nodes[i].nextSibling );
  }
}