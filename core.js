const player = new Plyr('#player', {
  seekTime: 5,
  autoplay: true,
});

function changeTheme(obj) {
  var menu = document.getElementById("btn-container")
  var selected = obj.item(obj.selectedIndex)

  var background = '';

  switch (selected.textContent) {
    case "Dark theme": background = 'background: #5f5f5f'; break;
    case "Light theme": background = 'background: #f1f1f1'; break;
    case "Forest": background = 'background-image: url(assets/forest.jpg)'; break;
  }

  menu.setAttribute('style', background);
}

function loadVideo(obj) {
  var fReader = new FileReader();
  fReader.readAsDataURL(obj.files[0]);
  fReader.onloadend = function (event) {
    player.source = {
      type: 'video',
      title: 'Example title',
      sources: [
        {
          src: event.target.result,
          type: 'video/mp4',
        },
      ],
    };
  }
}