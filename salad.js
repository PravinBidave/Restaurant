const addToCartButtons =document.querySelectorAll('.images a');
const cartIcon = document.querySelector('.top-navber .icons a i');
const buttons = document.querySelectorAll('.button');
const button = document.querySelector('body');
buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id ==='red'){
            body.style.backgroundColor =e.target.id;
        }
        if(e.target.id ==='blue'){
            body.style.backgroundColor =e.target.id;
        }
        if(e.target.id ==='yellow'){
            body.style.backgroundColor =e.target.id;
        }
        if(e.target.id ==='grey'){
            body.style.backgroundColor =e.target.id;
        }
    });
});
let cartCount =0;
addToCartButtons.forEach(button=>{
    button.addEventListener('click', () =>{

    
     cartCount++;
      cartIcon.textContent = cartCount;
    });
});


// -----------change-item------------------------------------------------------------
// select all the images in the footer----------
const footerImages = document.querySelectorAll('.footer .images img');

const foodbarImage = document.querySelector('.foodbar img');
footerImages.forEach( image => {
    image.addEventListener('click', ()=> {
        foodbarImage.src =image.src;
    });
});

// ---------------------------------remove-animation-icon------------------

const itemImages =document.querySelectorAll('.item-img');
itemImages.forEach(img =>{
    img.addEventListener('click', ()=>{
        itemImages.forEach(img => img.classList.remove('animated'));
        img.classList.add('animated');
    });
});



// ---------theme-back -ground-------------------------

const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

themeSwitch.addElementListener('change' , function(){
    body.classList.toggle('dark-mode');
});
