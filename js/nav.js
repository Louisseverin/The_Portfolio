hamburger = document.querySelector(".dropbtn");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav_link");
  navBar.classList.toggle("active1");
};

document.addEventListener("DOMContentLoaded", function () {
  const aboutDiv = document.getElementById("about_me");
  const skillsDiv = document.getElementById("my_skills");
  const clientsDiv = document.getElementById("my_clients");
  const mainContent = document.getElementById("main-content");

  function removeActiveClass() {
    const navItems = document.querySelectorAll(".about_me_nav_link");
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
  }

  mainContent.innerHTML = `<div class="about_me_image">
      <img src="icons/man-with-computer-and-headset-svgrepo-com.png" />
    </div>
    <div class="about_me_txt">
      <p class="abt_head">ABOUT ME</p>
      <p class="abt_p1">Why hire me for your next Project?</p>
      <p class="abt_p">
        Hiring me as a software engineer means bringing on board a seasoned professional with a robust technical background and a keen eye for innovation. 
        With extensive experience in software development and a deep understanding of various programming languages and technologies, 
        I am well-equipped to tackle complex challenges and deliver high-quality solutions. 
      </p>
      <p class="abt_p">
        My proactive approach to learning ensures that I stay ahead of industry trends, 
        while my collaborative mindset and strong communication skills enable effective teamwork and project alignment.
      </p>
    </div>`;

  aboutDiv.addEventListener("click", function () {
    removeActiveClass();
    aboutDiv.classList.add("active");
    mainContent.innerHTML = `<div class="about_me_image">
    <img src="icons/man-with-computer-and-headset-svgrepo-com.png" />
    </div>
    <div class="about_me_txt">
      <p class="abt_head">ABOUT ME</p>
      <p class="abt_p1">Why hire me for your next Project?</p>
      <p class="abt_p">
        Hiring me as a software engineer means bringing on board a seasoned professional with a robust technical background and a keen eye for innovation. 
        With extensive experience in software development and a deep understanding of various programming languages and technologies, 
        I am well-equipped to tackle complex challenges and deliver high-quality solutions. 
      </p>
      <p class="abt_p">
        My proactive approach to learning ensures that I stay ahead of industry trends, 
        while my collaborative mindset and strong communication skills enable effective teamwork and project alignment.
      </p>
    </div>`;
  });

  skillsDiv.addEventListener("click", function () {
    removeActiveClass();
    skillsDiv.classList.add("active");
    mainContent.innerHTML = `<div class="about_me_image">
    <img src="icons/skills.png" />
    </div>
    <div class="about_me_skills">
      <div class="communication">
        <div class="skill">
          <div class="skill_name">Communication</div>
          <div class="skill_percentage">80%</div>
        </div>
        <div class="skill_bar">
          <div class="bar1"></div>
          <div class="bar2"></div>
        </div>
      </div>
      <div class="communication">
        <div class="skill">
          <div class="skill_name">Teamwork</div>
          <div class="skill_percentage">80%</div>
        </div>
        <div class="skill_bar">
          <div class="bar1"></div>
          <div class="bar2"></div>
        </div>
      </div>
      <div class="communication">
        <div class="skill">
          <div class="skill_name">Leadership</div>
          <div class="skill_percentage">80%</div>
        </div>
        <div class="skill_bar">
          <div class="bar1"></div>
          <div class="bar2"></div>
        </div>
      </div>
      <div class="communication">
        <div class="skill">
          <div class="skill_name">Flexbility</div>
          <div class="skill_percentage">80%</div>
        </div>
        <div class="skill_bar">
          <div class="bar1"></div>
          <div class="bar2"></div>
        </div>
      </div>
      <div class="communication">
        <div class="skill">
          <div class="skill_name">Html/CSS</div>
          <div class="skill_percentage">80%</div>
        </div>
        <div class="skill_bar">
          <div class="bar1"></div>
          <div class="bar2"></div>
        </div>
      </div>
      <div class="communication">
        <div class="skill">
          <div class="skill_name">javascript</div>
          <div class="skill_percentage">80%</div>
        </div>
        <div class="skill_bar">
          <div class="bar1"></div>
          <div class="bar2"></div>
        </div>
      </div>
      <div class="communication">
        <div class="skill">
          <div class="skill_name">Nodejs</div>
          <div class="skill_percentage">80%</div>
        </div>
        <div class="skill_bar">
          <div class="bar1"></div>
          <div class="bar2"></div>
        </div>
      </div>
      <div class="communication">
        <div class="skill">
          <div class="skill_name">mongodb</div>
          <div class="skill_percentage">80%</div>
        </div>
        <div class="skill_bar">
          <div class="bar1"></div>
          <div class="bar2"></div>
        </div>
      </div>
      <div class="communication">
        <div class="skill">
          <div class="skill_name">C#</div>
          <div class="skill_percentage">80%</div>
        </div>
        <div class="skill_bar">
          <div class="bar1"></div>
          <div class="bar2"></div>
        </div>
      </div>
      <div class="communication">
        <div class="skill">
          <div class="skill_name">C++</div>
          <div class="skill_percentage">80%</div>
        </div>
        <div class="skill_bar">
          <div class="bar1"></div>
          <div class="bar2"></div>
        </div>
      </div>
    </div>`;
  });

  clientsDiv.addEventListener("click", function () {
    removeActiveClass();
    clientsDiv.classList.add("active");
    mainContent.innerHTML = `
      <div class="about_me_image">
        <img src="icons/users-svgrepo-com.png" />
        <p style="font-family: 'robot', sans-serif; font-size: 30px; color: var(--p-yellow);">CLIENTS</p>
      </div>
      <div class="clients_img">
        <div class="clients_pic"><img src="icons/logo/walmart-logo-svgrepo-com.png" /></div>
        <div class="clients_pic"><img src="icons/logo/bmw-logo-svgrepo-com.png" /></div>
        <div class="clients_pic"><img src="icons/logo/mcdonald-s-15-logo-svgrepo-com.svg" /></div>
        <div class="clients_pic"><img src="icons/logo/akamai-svgrepo-com.png" /></div>
        <div class="clients_pic"><img src="icons/logo/volkswagen-10-logo-svgrepo-com.png" /></div>
        <div class="clients_pic"><img src="icons/logo/windows-windows-svgrepo-com.png" /></div>
      </div>`;
  });
});

// let currentIndex = 0;
// const blogs = document.querySelectorAll('.bcontent');

// function showBlogs(startIndex) {
//   for (let i = 0; i < blogs.length; i++) {
//     if (i >= startIndex && i < startIndex + 3) {
//       blogs[i].style.display = 'block';
//     } else {
//       blogs[i].style.display = 'none';
//     }
//   }
// }

// function nextBlog() {
//   if (currentIndex + 3 < blogs.length) {
//     currentIndex += 3;
//     showBlogs(currentIndex);
//   }
// }

// function prevBlog() {
//   if (currentIndex - 3 >= 0) {
//     currentIndex -= 3;
//     showBlogs(currentIndex);
//   }
// }

// showBlogs(currentIndex);

let currentIndex = 0;
let numBlogsToShow = getNumBlogsToShow();
const blogs = document.querySelectorAll('.bcontent');

function showBlogs(startIndex) {
  for (let i = 0; i < blogs.length; i++) {
    if (i >= startIndex && i < startIndex + numBlogsToShow) {
      blogs[i].style.display = 'block';
    } else {
      blogs[i].style.display = 'none';
    }
  }
}

function nextBlog() {
  if (currentIndex + numBlogsToShow < blogs.length) {
    currentIndex += numBlogsToShow;
    showBlogs(currentIndex);
  }
}

function prevBlog() {
  if (currentIndex - numBlogsToShow >= 0) {
    currentIndex -= numBlogsToShow;
    showBlogs(currentIndex);
  }
}

function getNumBlogsToShow() {
  return window.innerWidth < 1000 ? 1 : 3;
}

window.addEventListener('resize', function() {
  const newNumBlogsToShow = getNumBlogsToShow();
  if (newNumBlogsToShow !== numBlogsToShow) {
    numBlogsToShow = newNumBlogsToShow;
    showBlogs(currentIndex);
  }
});

showBlogs(currentIndex);


function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
      alert("Please enter your name");
      return false;
  }

  if (email === "") {
      alert("Please enter your email");
      return false;
  } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return false;
  }

  if (message === "") {
      alert("Please enter your message");
      return false;
  }

  // If all validations pass, the form will be submitted
  return true;
}

function scrollToDiv(id) {
  var element = document.getElementById(id);
  var offset = element.offsetTop - 50; // Adjust offset as needed

  window.scrollTo({
      top: offset,
      behavior: 'smooth'
  });

  event.preventDefault();
}