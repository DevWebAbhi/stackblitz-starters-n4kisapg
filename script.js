document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    console.log(cookieArray)
    return cookie ? parseInt(cookie.split('=')[1]) : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    console.log(date.toUTCString())
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Get the value of the 'count' cookie
  let count = getCookie('count');

  // If the cookie exists, increment the value, otherwise initialize it
  if (count !== null) {
    count++; // Increment count
  } else {
    count = 1; // Initialize count
  }

  // Update the cookie with the new count value
  setCookie('count', count, 7); // Cookie expires in 7 days

  // Display the count on the webpage
  let countDisplay = document.getElementById('countDisplay');
  countDisplay.textContent = `Page loaded count: ${count}`;
 
});
