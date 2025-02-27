document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.social-media a');
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#FF69B4';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '#f08080';
        });
    });

    const photos = document.querySelectorAll('.photo-gallery img');
    photos.forEach(photo => {
        photo.addEventListener('mouseover', function() {
            this.style.border = '2px solid #FF69B4';
        });
        photo.addEventListener('mouseout', function() {
            this.style.border = '2px solid #f08080';
        });
    });
});
