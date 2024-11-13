// JavaScript to handle side navigation toggle
const menuIcon = document.getElementById('menuicon');
const sideNav = document.getElementById('sidenav');
const closeNav = document.getElementById('closenav');

// Open side navigation when menu icon is clicked
menuIcon.addEventListener('click', () => {
    sideNav.style.right = '0'; // Show the side nav by setting right to 0
});

// Close side navigation when close button is clicked
closeNav.addEventListener('click', () => {
    sideNav.style.right = '-50%'; // Hide the side nav by sliding it out
});
