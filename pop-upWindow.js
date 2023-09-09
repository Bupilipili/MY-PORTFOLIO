const projectsarray = [
  {
    Name: ['Space Travelers Hub Application'],
    backgroundImages: ['./features/images/space.jpg'],
    backgroundColor: ['#14143A'],
    description: ["Space Travelers' Hub is a web application designed to assist users in managing their rocket and mission reservations for space travel. The application aims to provide a platform where users can easily book and keep track of their reserved rockets and missions.", "Space Travelers' Hub is a web application designed to assist users in managing their rocket and mission reservations for space travel. The application aims to provide a platform where users can easily book and keep track of their reserved rockets and missions."],
    featuredimages: ['./features/images/spacehub.png', './features/images/spacehub.png', './features/icons/see live icon.svg', './features/icons/github-white.svg', './features/icons/X-button.svg'],
    technologies: ['React', 'Redux', 'Jest', 'CSS'],
    Keycomponents: ['CSS', 'React', 'Redux', 'Jest', 'Pair-programming'],
    popButton: 'See Project',
    liveVersion: 'https://spacetravelershub0x.netlify.app/',
    sourceLink: 'https://github.com/Bupilipili/Space-Travelers-Hub',
  },
  {
    Name: ['City Weather Mobile Application'],
    backgroundImages: ['./features/images/weather.jpg'],
    backgroundColor: ['#001020'],
    description: ["This app provides users with real-time weather information for cities worldwide. It offers a user-friendly interface, live updates, and detailed weather data, making it a handy tool for quickly checking weather conditions and making informed decisions.", "This app provides users with real-time weather information for cities worldwide. It offers a user-friendly interface, live updates, and detailed weather data, making it a handy tool for quickly checking weather conditions and making informed decisions."],
    featuredimages: ['./features/images/cityweather.png', './features/images/cityweather.png', './features/icons/see live icon.svg', './features/icons/github-white.svg', './features/icons/X-button.svg'],
    technologies: ['React', 'Redux', 'CSS', 'Jest'],
    Keycomponents: ['CSS', 'GitHub', 'React', 'Redux', 'Jest', 'Terminal'],
    popButton: 'See Project',
    liveVersion: 'https://city-weather-4e.netlify.app/',
    sourceLink: 'https://github.com/Bupilipili/City-Weather',
  },
  {
    Name: ['Bookstore Web Application'],
    backgroundImages: ['./features/images/books.jpg'],
    backgroundColor: ['#0E7F87'],
    description: ["Bookstore is a user-friendly web application that utilizes an external API to enable easy addition and removal of books. This dynamic platform streamlines book management and offers a hassle-free way to maintain a personalized reading collection.", "Bookstore is a dynamic web application designed to simplify book management for users. It leverages an external API to seamlessly handle the process of adding and removing books. With an intuitive interface, users can effortlessly view their collection, add new books by inputting titles and authors, and remove books as desired. By utilizing the API, Bookstore optimizes data management, ensuring a smooth and organized experience for book enthusiasts."],
    featuredimages: ['./features/images/booksdesk.png', './features/images/booksdesk.png', './features/icons/see live icon.svg', './features/icons/github-white.svg', './features/icons/X-button.svg'],
    technologies: ['React', 'CSS', 'Redux'],
    Keycomponents: ['React', 'CSS','GitHub', 'Redux'],
    popButton: 'See Project',
    liveVersion: 'https://bookstore-001.netlify.app/',
    sourceLink: 'https://github.com/Bupilipili/bookstore',
  },
  {
    Name: ['Focus Gender Equality Fellowship 2023'],
    backgroundImages: ['./features/images/FGE.png'],
    backgroundColor: ['#e23531'],
    description: ["The FGE Fellowship 2023 is an hypothetical event which show cases the use of different Web technologies such as HTML5, CSS3 and Javascript with also displaying the website which is responsive to all screen sizes.", "The FGE Fellowship 2023 is an hypothetical event which show cases the use of different Web technologies such as HTML5, CSS3 and Javascript with also displaying the website which is responsive to all screen sizes."],
    featuredimages: ['./features/images/Desk-FGE.png', './features/images/Mobi-FGE.jpeg', './features/icons/see live icon.svg', './features/icons/github-white.svg', './features/icons/X-button.svg'],
    technologies: ['CSS', 'Javascript', 'HTML'],
    Keycomponents: ['CSS', 'JavaScript', 'HTML', 'GitHub'],
    popButton: 'See Project',
    liveVersion: 'https://bupilipili.github.io/First-Capstone-Project/',
    sourceLink: 'https://github.com/Bupilipili/First-Capstone-Project',
  },
  {
    Name: ['To-Do List Web Application'],
    backgroundImages: ['./features/images/tolist.png'],
    backgroundColor: ['black'],
    description: ["To-do-list is web-application which allows users to write the tasks they are to do and also to clear all the completed tasks, by writing the task and pressing 'enter' the task is added to the list and also all changes are saved on the local storage", "To-do-list is web-application which allows users to write the tasks they are to do and also to clear all the completed tasks, by writing the task and pressing 'enter' the task is added to the list and also all changes are saved on the local storage."],
    featuredimages: ['./features/images/Todo.png', './features/images/Todo.png', './features/icons/see live icon.svg', './features/icons/github-white.svg', './features/icons/X-button.svg'],
    technologies: ['CSS', 'Javascript', 'HTML' ,'Webpack'],
    Keycomponents: ['HTML', 'GitHub', 'JavaScript', 'CSS', 'Terminal', 'Webpack'],
    popButton: 'See Project',
    liveVersion: 'https://bupilipili.github.io/To-do-list/dist/',
    sourceLink: 'https://github.com/Bupilipili/To-do-list',
  },
  {
    Name: ['Flavour Hub Web Application'],
    backgroundImages: ['./features/images/food.png'],
    backgroundColor: ['#FF5656'],
    description: ["Flavour Hub is a single-page website that allows users to give likes and comments on their favorite meals which are fetched from MealsDB API, While the likes and comments are made possible with an Involvement API.", "A single-page website that allows users to give likes and comments on their favorite meals which are fetched from MealsDB API, While the likes and comments are made possible with an Involvement API."],
    featuredimages: ['./features/images/flavour.png', './features/images/flavour.png', './features/icons/see live icon.svg', './features/icons/github-white.svg', './features/icons/X-button.svg'],
    technologies: ['CSS', 'Javascript', 'HTML', 'Webpack'],
    Keycomponents: ['CSS', 'Javascript', 'HTML', 'Webpack', 'Jest', 'Pair-programming'],
    popButton: 'See Project',
    liveVersion: 'https://anshuman7negi.github.io/Kanban_board/dist/',
    sourceLink: 'https://github.com/anshuman7negi/Kanban_board',
  },
];
function createProjectList() {
  const projects = document.querySelector('.main-container');
  for (let i = 0; i < projectsarray.length; i += 1) {
    const card = document.createElement('div');
    card.classList.add('grid-container');
    card.style.backgroundImage = `url('${projectsarray[i].backgroundImages[0]}')`;
    card.style.backgroundColor = projectsarray[i].backgroundColor;

    const technologiesList = projectsarray[i].technologies
      .map(tech => `<li class="item3">${tech}</li>`)
      .join('');

    card.innerHTML = `
      <div class="item1"></div>
      <div class="flex">
        <h2 class="item2">${projectsarray[i].Name[0]}</h2>
        <ul class="flexbox">${technologiesList}</ul>
        <button class="item7">${projectsarray[i].popButton}</button>
      </div>
    `;
    projects.appendChild(card);
  }
}

createProjectList();
const projectPopup = document.querySelector('.Main-pop');
const popButton = document.querySelectorAll('.item7');
popButton.forEach((button, buttonIndex) => {
  button.addEventListener('click', () => {
    const cardIndex = buttonIndex;
    projectPopup.innerHTML = `
          <div class="pop">
          <img class="pop-icon1" src="${projectsarray[cardIndex].featuredimages[4]}">
          <img class="image-pop" src="${projectsarray[cardIndex].featuredimages[1]}">
          <div>
          <p class="pop-word">${projectsarray[cardIndex].Name[0]}</p>
          <ul class="pop-flexbox">
          <li class="item3">${projectsarray[cardIndex].technologies[0]}</li>
          <li class="item3">${projectsarray[cardIndex].technologies[1]}</li>
          <li class="item3">${projectsarray[cardIndex].technologies[2]}</li>
          </ul>
          </div>
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
          <p class="pop-word2">${projectsarray[cardIndex].Name[0]}</p>
          <ul class="pop-flexbox2">
          ${projectsarray[cardIndex].Keycomponents.map(component => `<li class="item3x">${component}</li>`).join('')}
          </ul>
          </div>
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
    const close = document.querySelector('.pop-icon1');
    close.addEventListener('click', () => {
      projectPopup.style.visibility = 'hidden';
      document.querySelector('body').style.overflow = 'scroll';
    });
    const closex = document.querySelector('.pop-icon');
    closex.addEventListener('click', () => {
      projectPopup.style.visibility = 'hidden';
      document.querySelector('body').style.overflow = 'auto';
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    });
  });
});







/*
{
  Name: ['Focus Gender Equality Fellowship 2023'],
  backgroundImages: ['./features/images/FGE.png'],
  backgroundColor: ['#e23531'],
  description: ["The FGE Fellowship 2023 is an hypothetical event which show cases the use of different Web technologies such as HTML5, CSS3 and Javascript with also displaying the website which is responsive to all screen sizes.", "The FGE Fellowship 2023 is an hypothetical event which show cases the use of different Web technologies such as HTML5, CSS3 and Javascript with also displaying the website which is responsive to all screen sizes."],
  featuredimages: ['./features/images/Desk-FGE.png', './features/images/Mobi-FGE.jpeg', './features/icons/see live icon.svg', './features/icons/github-white.svg', './features/icons/X-button.svg'],
  technologies: ['CSS', 'Javascript', 'HTML'],
  Keycomponents: ['CSS', 'JavaScript', 'HTML', 'GitHub'],
  popButton: 'See Project',
  liveVersion: 'https://bupilipili.github.io/First-Capstone-Project/',
  sourceLink: 'https://github.com/Bupilipili/First-Capstone-Project.git',
}
*/

/*{
    Name: ['LeaderBoard Web Application'],
    backgroundImages: ['./features/images/Leaderboard.jpg'],
    backgroundColor: ['#27546B'],
    description: ["Leaderboard is a web application that uses API to display scores put by the users. So the user puts the name and score as input the submits it, this takes the data to the API and when the user presses 'Refresh' button the data is fetched from API and then displayed on the leaderboard.", "Leaderboard is a web application that uses API to display scores put by the users. So the user puts the name and score as input the submits it, this takes the data to the API and when the user presses 'Refresh' button the data is fetched from API and then displayed on the leaderboard."],
    featuredimages: ['./features/images/LEAD.png', './features/images/LEAD.png', './features/icons/see live icon.svg', './features/icons/github-white.svg', './features/icons/X-button.svg'],
    technologies: ['CSS', 'Javascript', 'HTML'],
    Keycomponents: ['HTML', 'GitHub', 'JavaScript', 'Terminal'],
    popButton: 'See Project',
    liveVersion: 'https://bupilipili.github.io/Leaderboard/dist/',
    sourceLink: 'https://github.com/Bupilipili/Leaderboard',
  }

  {
    Name: ['Math Magicians Calculator'],
    backgroundImages: ['./features/images/calculator.jpg'],
    backgroundColor: ['#BA9C82'],
    description: ["math-magicians-calculator is a web application which has a calculator together with quotes displayed by fetching data from an API.", "math-magicians-calculator is a web application which has a calculator together with quotes displayed by fetching data from an API."],
    featuredimages: ['./features/images/calcupic.png', './features/images/calcupic.png', './features/icons/see live icon.svg', './features/icons/github-white.svg', './features/icons/X-button.svg'],
    technologies: ['React', 'CSS', 'Jest'],
    Keycomponents: ['CSS', 'GitHub', 'React', 'Jest', 'Terminal'],
    popButton: 'See Project',
    liveVersion: 'https://math-magicians-0d5d3a.netlify.app/',
    sourceLink: 'https://github.com/Bupilipili/math-magicians-calculator',
  }
  */