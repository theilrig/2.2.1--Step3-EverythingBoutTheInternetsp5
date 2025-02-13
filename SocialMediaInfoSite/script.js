
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const currentPosition = sidebar.style.left;

    if (currentPosition === '0px') {
        sidebar.style.left = '-100%'; 
    } else {
        sidebar.style.left = '0px';
    }
}
