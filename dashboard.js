// class to handle bubbles that display dining location information. 
//Note: no fields are needed before the constructor!
class Bubble {
    constructor(name, open_hour, close_hour) {
      this.name = name;
      this.open_hour = open_hour;
      this.close_hour = close_hour;
    }
  }
  
  // function to return the CURRENT time in a HH:MM format
  function getCurrentTime() {
    let currentTime = new Date();
    return currentTime.getHours()+":"+currentTime.getMinutes();
  }
  
  // function to display a background image of Stevens campus
  function show_image(src, width, height, alt) {
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
  
    // append image element to body of document
    document.body.appendChild(img);
  }

function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Log out function
function logout() {
  // Clear user session data
  localStorage.removeItem('userSession'); // Replace with your session key if necessary
  // Redirect to login page
  window.location.href = 'index.html';
}


// Optional: Close the menu if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.hamburger') && !event.target.matches('.dropdown-menu *')) {
        const menu = document.getElementById('dropdownMenu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        }
    }
}
