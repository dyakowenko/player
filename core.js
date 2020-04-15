const player = new Plyr('#player', {
    seekTime: 5,
    autoplay: true,
  });

  function LoadFile(){
    var inp = document.getElementById("fileInput")
    inp.click()
  }

  function LoadVideo(obj){
    var fReader = new FileReader();
    fReader.readAsDataURL(obj.files[0])
    fReader.onloadend = function(event){
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

  function choseTheme(obj){
    var menu = document.getElementById("buttons")
    var selected = obj.item(obj.selectedIndex)
    var result = selected.textContent == "Bright theme" ? menu.setAttribute("style","background-image: url(resources/background.jpg)") : menu.setAttribute("style","background: rgba(36, 36, 36, 0.9)")
  }