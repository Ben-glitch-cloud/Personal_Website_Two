
// Alert  

    window.addEventListener('load', function() {
        if (window.screen.width < 450) 
        {
            alert(" This webiste is not adapted to small diveses yet :{ ")
        }
    })

// nav bar posions  

document.getElementById('pro').addEventListener('click', function(){
   window.scroll({ top: 450, left: 0, behavior: 'smooth'})
}) 

document.getElementById('pro_2').addEventListener('click', function(){
    window.scroll({ top: 450, left: 0, behavior: 'smooth'})
 }) 

document.getElementById('work').addEventListener('click', function(){
    window.scroll({ top: 1100, left: 0, behavior: 'smooth'})
 }) 

 document.getElementById('work_2').addEventListener('click', function(){
    window.scroll({ top: 1100, left: 0, behavior: 'smooth'})
 }) 

 document.getElementById('education').addEventListener('click', function(){
    window.scroll({ top: 3119, left: 0, behavior: 'smooth'})
 }) 

 document.getElementById('education_2').addEventListener('click', function(){
    window.scroll({ top: 3119, left: 0, behavior: 'smooth'})
 }) 

 document.getElementById('projects').addEventListener('click', function(){
    window.scroll({ top: 3929, left: 0, behavior: 'smooth'})
 }) 

 document.getElementById('projects_2').addEventListener('click', function(){
    window.scroll({ top: 3974, left: 0, behavior: 'smooth'})
 })

 document.getElementById('hoppies').addEventListener('click', function(){
     window.scroll({ top: 4600, left: 0, behavior: 'smooth'})
 }) 

 document.getElementById('hoppies_2').addEventListener('click', function(){
     window.scroll({top: 4600, left: 0, behavior: 'smooth'})
 })


// 443


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
        ops += 0.10; 
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

let opsEd = 0;  
let opsEd2 = 0; 

let opsP = 0;  
let opsP2 = 0;  
let opsP3 = 0; 

document.addEventListener('scroll', function() { 
    second_move() 
 })

function second_move()
{
    if (scrollY > 940 && move < 40)
    {
        document.getElementById('Work_item').style.left = move + '%';  
        document.getElementById('Work_item').style.opacity = ops_1; 
        ops_1 += 0.75; 
        move += 2.5; 
    } 
    if (scrollY > 1200 && move_two < 40)
    {
        document.getElementById('Work_item_two').style.right = move_two + '%'; 
        document.getElementById('Work_item_two').style.opacity = ops_2; 
        ops_2 += 0.75; 
        move_two += 2.5; 
        
    } 
    if (scrollY > 1800 && move_thrid < 40)
    {
        document.getElementById('Work_item_third').style.left = move_thrid + '%'; 
        document.getElementById('Work_item_third').style.opacity = ops_3; 
        ops_3 += 0.75; 
        move_thrid += 2.5; 
    }
    if (scrollY > 2200 && move_four < 40)
    {
        document.getElementById('Work_item_four').style.right = move_four + '%';  
        document.getElementById('Work_item_four').style.opacity = ops_4; 
        ops_4 += 0.75; 
        move_four += 2.5;  

    }   
    if (scrollY > 3000)
    {
        document.getElementById('Education_one').style.opacity = opsEd;  
        opsEd += 0.10; 
    }  
    if (scrollY > 3100)
    {
        document.getElementById('Education_two').style.opacity = opsEd2; 
        opsEd2 += 0.10; 
    } 
    if (scrollY > 3850)
    {
        document.getElementById('ProjectWorked_item_1').style.opacity = opsP;   
        opsP += 0.15    
        setTimeout(function(){ 
        document.getElementById('ProjectWorked_item_2').style.opacity = opsP2;  
        opsP2 += 0.15  
        }, 1000)
        //document.getElementById('ProjectWorked_item_2').style.opacity = opsP2;   
        setTimeout(function(){
        document.getElementById('ProjectWorked_item_3').style.opacity = opsP3;   
        opsP3 += 0.20   
        }, 2000)
         
    }
}

