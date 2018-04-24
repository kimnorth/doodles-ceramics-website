window.onload = function(){
    console.log("Loaded!")
    carouselLoader()
    
    var menu = document.getElementById('drop-down-menu');
    var menuButton = document.getElementById('hamburger-icon');
    
    var menuDown = false;
    
    menuButton.addEventListener('click', function(e){
        if(menuDown){
            menu.style.display = 'none';
            menuDown = false;
        }
        else if(!menuDown){
            menu.style.display = 'block';
            menuDown = true;
        }
        
    })
}

var imageArray = document.querySelectorAll('img.carousel-images');

const carouselLoader = function(e){
    console.log("Carousel loader working")
    // Make first element visible (maybe change this to CSS with first having ID)
    imageArray[0].style.display = 'block';
}

var indexPos = 0;

var animateCarousel = function(){
    console.log(indexPos)
    if(indexPos < imageArray.length-1){
        console.log(imageArray[indexPos]);
        imageArray[indexPos].style.display = 'none';
        imageArray[indexPos+1].style.display = 'block';
        indexPos++;
    }
    else if(indexPos == imageArray.length-1){
        console.log(imageArray[indexPos])
        imageArray[indexPos].style.display = 'none';
        indexPos = 0;
        imageArray[indexPos].style.display = 'block';
    }
}

setInterval(animateCarousel, 3000);