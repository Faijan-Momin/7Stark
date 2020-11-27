window.onscroll = function() {stickeyHeader()};
        
        var header = document.getElementById("Header");
        var sticky = header.offsetTop;
        
        // Sticky Header
        function stickeyHeader() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky-header");
          } else {
            header.classList.remove("sticky-header");
          }
        }

        // Mobile Navigation Bar
        var Hamburger_icon= false;
        function openNav() {
          document.getElementById("headerNav").style.height = "100%";
        }
        
        function closeNav() {
          document.getElementById("headerNav").style.height = "0%";
        }
        
        function Hamburger(x) {
            x.classList.toggle("change");
            if(Hamburger_icon==false){
                openNav();
                Hamburger_icon = true;
            }
            else{
                closeNav();
                Hamburger_icon = false;
            }
        }

        let NumberCount = document.querySelectorAll('.NumberSelector');
        NumberCount.forEach((NumberSelector)=>{
          const UpdateCount = ()=>{
            let currentCount = parseInt(NumberSelector.innerHTML);
            let targetCount = NumberSelector.getAttribute('data-target');
            let increaseSpeed = 40;
            let increaseCount = parseInt(targetCount/increaseSpeed);
            if(currentCount<targetCount){
              NumberSelector.innerHTML = currentCount + increaseCount + '+ ';
            }
            setTimeout(UpdateCount,increaseSpeed);
          }
          UpdateCount();
        })


        // Quotes

        