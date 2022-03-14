// Navbar Toggling starts

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// Navbar Toggling end 

// scroll to top starts

var scrolltop = $('#scroll-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 80) {
        scrolltop.addClass('active');
    } else {
        scrolltop.removeClass('active');
    }
});
    
scrolltop.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '200');
});

// scroll to top ends


fetch('style_links.json')
    .then(response => response.json())
    .then(data => {
        let links = data;

        for (let i = 0; i < links.length; i++) {
            console.log(links.length);
            let StyleBoxDiv = document.createElement('div');
            StyleBoxDiv.innerHTML = 
            `<div class="stylebox">
                <div class="image">
                    <img src="https://raw.githubusercontent.com/arpit456jain/Amazing-Css-Effects/master/${links[i].name}/preview.png" alt="">
                </div>
                <div class="card-data">
                    <p class="card-heading">${links[i].name}</p>
                    <a href=${links[i].link}><button class="btnn">View</button></a>
                </div>
            
            </div>`;
            document.getElementById('styles').appendChild(StyleBoxDiv);
        };
});
    // <a target="_blank" href="https://github.com/arpit456jain/Amazing-Css-Effects/tree/master/${links[i].name}" class="code">Code</a>