// Hämta bakgrundselementet
const image = document.querySelector('.background');
const logo = document.querySelector('.company-name')

// Funktion för att byta mask
function changeMask(maskClass) {
    console.log('Ändrar klass till:', maskClass);
    image.className = `background ${maskClass}`;
}

const menuLinks = {
    'contact-link': 'contact-card',
    'location-link': 'location-card',
    'payment-link': 'payment-card'
};

Object.values(menuLinks).forEach(id => {
    document.getElementById(id).style.display = 'none';
});

Object.keys(menuLinks).forEach(linkId => {
    const link = document.getElementById(linkId);
    const cardId = menuLinks[linkId];
    const card = document.getElementById(cardId);

    
    link.addEventListener('click', () => {
        logo.classList.add('small');
        // Hide all cards
        Object.values(menuLinks).forEach(id => {
            document.getElementById(id).style.display = 'none';
        });

        // Show the selected card
        card.style.display = 'block';
        image.classList.add('mask2');
    });
});

logo.addEventListener('click', () => {
    image.classList.remove('mask2');
    logo.classList.remove('small');

    // Hide all cards
    Object.values(menuLinks).forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
});