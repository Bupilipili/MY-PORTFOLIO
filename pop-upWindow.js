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
  </ul>
 <p class="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

  <p class="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>
<div class="button-spacing">
<a href="#" class="item8"><p>See live</p><img src="./features/icons/see live icon.svg"></a>
<a href="#" class="item8"><p>See source</p><img src="./features/icons/github-white.svg"></a>
</div>
</div>
</div>
`;
main.appendChild(pop);
body.appendChild(main)
});







