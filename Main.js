
// Alert  

    window.addEventListener('load', function() {
        if (window.screen.width < 450) 
        {
            alert(" This webiste is not adapted to small diveses yet :{ ")
        }
    })

// Side bar at the top

let i = 0

function slideBar()
{   
    if( i === 0)
    {
        document.getElementById('text').textContent = 'Hello there:)'; 
        i++; 
    } 
    else if (i === 1)
    {
        document.getElementById('text').textContent = 'Wecome to my Website'; 
        i++; 
    } 
    else if (i === 2) 
    {
        document.getElementById('text').textContent = 'Have a look around';  
        i = 0; 
    }
    
    setTimeout(slideBar, 5000);
} 

slideBar(); 

// Nav bar  

document.addEventListener('scroll', function(){ 
    if( scrollY > 327 )
    {
        document.getElementById('nav_two').style.display = 'flex'; 
    } 
    else 
    {
        document.getElementById('nav_two').style.display = 'none'; 
    }
}) 

// profile view 

let ops = 0; 
let opsE = 0;

document.addEventListener('scroll', function() { 

    if( scrollY > 200)
    {
        document.getElementById('profile').style.opacity = ops;   
        document.getElementById('profile_header').style.opacity = ops;
        ops += 0.05; 
    }  
}) 

let move = 0;   
let ops_1 = 0;  

let move_two = 0;  
let ops_2 = 0; 

let move_thrid = 0;  
let ops_3 = 0; 

let move_four = 0; 
let ops_4 = 0; 

document.addEventListener('scroll', function() {
    if (scrollY > 740 && move < 40)
    {
        document.getElementById('Work_item').style.left = move + '%';  
        document.getElementById('Work_item').style.opacity = ops_1; 
        ops_1 += 0.05; 
        move += 2.5; 


    } 
    if (scrollY > 1090 && move_two < 40)
    {
        document.getElementById('Work_item_two').style.right = move_two + '%'; 
        document.getElementById('Work_item_two').style.opacity = ops_2; 
        ops_2 += 0.05; 
        move_two += 2.5; 
        
    } 
    if (scrollY > 1550 && move_thrid < 40)
    {
        document.getElementById('Work_item_third').style.left = move_thrid + '%'; 
        document.getElementById('Work_item_third').style.opacity = ops_3; 
        ops_3 += 0.05; 
        move_thrid += 2.5; 
    }
    if (scrollY > 1900 && move_four < 40)
    {
        document.getElementById('Work_item_four').style.right = move_four + '%';  
        document.getElementById('Work_item_four').style.opacity = ops_4; 
        ops_4 += 0.05; 
        move_four += 2.5;  

    }
})