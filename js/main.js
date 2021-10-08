
    document.addEventListener("DOMContentLoaded", function(event) {
      function countdown(minutes) {
        var seconds = 60;
        var mins = minutes;

        function tick() {
          var counter = document.getElementById("counter");
          var current_minutes = mins - 1;
          seconds--;
          counter.innerHTML =
            //"Offer expires in " +
            " in " +
            current_minutes.toString() +
            " : " +
            (seconds < 10 ? "0" : "") +
            String(seconds);
          if (seconds > 0) {
            setTimeout(tick, 1000);
          } else {
            if (mins > 1) {
              countdown(mins - 1);
            }
          }
        }
        tick();
      }

      countdown(15);
    });

    function hideFooter() {
      $(".wisepops-root").hide();
    }

    $(document).ready(function () {
        
        var AdcomboAdvertTop=$(".ac_advertisement");AdcomboAdvertTop.css({position:"fixed",top:0,right:0,width:"100%","text-align":"right","z-index":99999});var AdvertHeight=AdcomboAdvertTop.height();$(window).scroll(function(){$(window).scrollTop()>AdvertHeight?AdcomboAdvertTop.hide():AdcomboAdvertTop.show()});
        try {
            moment.locale("");
            $('.day-before').text(moment().subtract(1, 'day').format('D.MM.YYYY'));
            $('.day-after').text(moment().add(1, 'day').format('D.MM.YYYY'));
        } catch (e) { console.log('moment problems!'); }
    });
