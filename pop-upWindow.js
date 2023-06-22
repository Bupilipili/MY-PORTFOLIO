const cards = document.querySelector('div');
const section = document.createElement('div');
cards.appendChild(section);
section.className = 'main-container';
section.innerHTML = `
    <div class="grid-container">
    <div class="item1"></div>
     <div class="flex">
      <h2 class="item2">Multi-Post Stories Gain+Glory</h2>
        <ul class="flexbox">
          <li class="item3">Ruby on Rails</li>
          <li class="item3">CSS</li>
          <li class="item3">JavaScript</li>
          <li class="item3">HTML</li>
        </ul>
        <div class="item7">See project</div>
      </div>
    </div>
    <div class="grid-container">
      <div class="item1"></div>
       <div class="flex">
        <h2 class="item2">Multi-Post Stories Gain+Glory</h2>
        <ul class="flexbox">
         <li class="item3">Ruby on Rails</li>
         <li class="item3">CSS</li>
         <li class="item3">JavaScript</li>
         <li class="item3">HTML</li>
       </ul>
       <div class="item7">See project</div>
       </div>
     </div>
     <div class="grid-container">
       <div class="item1"></div>
        <div class="flex">
         <h2 class="item2">Multi-Post Stories Gain+Glory</h2>
         <ul class="flexbox">
           <li class="item3">Ruby on Rails</li>
           <li class="item3">CSS</li>
           <li class="item3">JavaScript</li>
           <li class="item3">HTML</li>
         </ul>
         <div class="item7">See project</div>
       </div>
     </div>
     <div class="grid-container">
       <div class="item1"></div>
        <div class="flex">
         <h2 class="item2">Multi-Post Stories Gain+Glory</h2>
         <ul class="flexbox">
           <li class="item3">Ruby on Rails</li>
           <li class="item3">CSS</li>
           <li class="item3">JavaScript</li>
           <li class="item3">HTML</li>
         </ul>
         <div class="item7">See project</div>
       </div>
     </div>
     <div class="grid-container">
       <div class="item1"></div>
        <div class="flex">
         <h2 class="item2">Multi-Post Stories Gain+Glory</h2>
         <ul class="flexbox">
           <li class="item3">Ruby on Rails</li>
           <li class="item3">CSS</li>
           <li class="item3">JavaScript</li>
           <li class="item3">HTML</li>
         </ul>
         <div class="item7">See project</div>
       </div>
     </div>
     <div class="grid-container">
       <div class="item1"></div>
        <div class="flex">
         <h2 class="item2">Multi-Post Stories Gain+Glory</h2>
         <ul class="flexbox">
           <li class="item3">Ruby on Rails</li>
           <li class="item3">CSS</li>
           <li class="item3">JavaScript</li>
           <li class="item3">HTML</li>
         </ul>
        <div class="item7">See project</div>
       </div>
     </div>
`;


const open = document.querySelector('.item7');
const body = document.querySelector('body');
open.addEventListener('click', ()=> {
//for the pop-up container
const main = document.createElement('div');
main.className = 'Main-pop';
//for the content of the pop-up container
const pop = document.createElement('div');
pop.className = 'pop';
pop.innerHTML = `<div class="Main-pop">
<div class="pop">
<img class="image-pop" src="./features/images/Snapshoot Portfolio.svg">
<p class="pop-word">Keeping track of hundreds of
  components</p>
  <ul class="pop-flexbox">
    <li class="item3">Ruby on Rails</li>
    <li class="item3">CSS</li>
    <li class="item3">JavaScript</li>
>>>>>>> parent of 3c61cf0 (Add function to the pop-upWindow.js)
  </ul>
 <p class="lorem">${projectsarray[cardIndex].description[0]}</p>
  <p class="lorem">${projectsarray[cardIndex].description[0]}</p>
<div class="button-spacing">
<a href="${projectsarray[cardIndex].liveVersion}" class="item8"><p>See live</p><img src="${projectsarray[cardIndex].featuredimages[2]}"></a>
<a href="${projectsarray[cardIndex].sourceLink}" class="item8"><p>See source</p><img src="${projectsarray[cardIndex].featuredimages[3]}"></a>
</div>
</div>
<div class="pop2">
<img class="pop-icon" src="${projectsarray[cardIndex].featuredimages[4]}">
<img class="image-pop2" src="${projectsarray[cardIndex].featuredimages[0]}">
<div class="top-note">
<div>
<p class="pop-word2">${projectsarray[cardIndex].Name[1]}</p>
<ul class="pop-flexbox2">
<li class="item3x">${projectsarray[cardIndex].Keycomponents[0]}</li>
<li class="item3x">${projectsarray[cardIndex].Keycomponents[1]}</li>
<li class="item3x">${projectsarray[cardIndex].Keycomponents[2]}</li>
<li class="item3x">${projectsarray[cardIndex].Keycomponents[3]}</li>
<li class="item3x">${projectsarray[cardIndex].Keycomponents[4]}</li>
<li class="item3x">${projectsarray[cardIndex].Keycomponents[5]}</li>
</ul>
</div>
<<<<<<< HEAD
<div class="button-spacingx">
<a href="${projectsarray[cardIndex].liveVersion}" class="item8x"><p>See live</p><img src="${projectsarray[cardIndex].featuredimages[2]}"></a>
<a href="${projectsarray[cardIndex].sourceLink}" class="item8x"><p>See source</p><img src="${projectsarray[cardIndex].featuredimages[3]}"></a>
</div>
</div>
<p class="lorem2">${projectsarray[cardIndex].description[1]}</p>
</div>

    `;
    document.querySelector('body').style.overflow = 'hidden';
    projectPopup.style.visibility = 'visible';
    const close = document.querySelector('.image-pop');
    close.addEventListener('click', () => {
      projectPopup.style.visibility = 'hidden';
      document.querySelector('body').style.overflow = 'scroll';
    });
    const closex = document.querySelector('.pop-icon');
    closex.addEventListener('click', () => {
      projectPopup.style.visibility = 'hidden';
      document.querySelector('body').style.overflow = 'scroll';
    });
  });








