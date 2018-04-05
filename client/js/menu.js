window.onload = function(){
    console.log("Loaded!")
    
    var menu = document.getElementById('drop-down-menu');
    var menuButton = document.getElementById('hamburger-icon');
    
    var menuDown = false;
    
    menuButton.addEventListener('click', function(e){
        console.log('Click!')
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