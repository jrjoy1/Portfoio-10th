document.addEventListener('DOMContentLoaded', function () {
    const downloadButtons = document.querySelectorAll('.button-primary');

    downloadButtons.forEach(button => {
        if (button.innerText.includes('Download CV')) {
            button.addEventListener('click', function () {
                const link = document.createElement('a');
                link.href = 'files/joy.pdf'; // your PDF file path
                link.download = 'JR_Joy_Resume.pdf';
                link.click();
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const hireBtn = document.getElementById('hireMeBtn');
    const aboutSection = document.getElementById('about');

    hireBtn.addEventListener('click', function () {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const hireBtn = document.getElementById('hireMeBtn');
    const aboutSection = document.getElementById('about');
    const contactBtn = document.getElementById('contactBtn');
    const footerSection = document.getElementById('footer');

    // Scroll to About section
    if (hireBtn && aboutSection) {
        hireBtn.addEventListener('click', function () {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Scroll to Footer section
    if (contactBtn && footerSection) {
        contactBtn.addEventListener('click', function () {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const hireBtn = document.getElementById('hireMeBtn');
    const aboutSection = document.getElementById('about');
    const contactBtn = document.getElementById('contactBtn');
    const footerSection = document.getElementById('footer');
    const aboutTitle = document.getElementById('aboutTitle');

    if (hireBtn && aboutSection && aboutTitle) {
        hireBtn.addEventListener('click', function () {
            aboutSection.scrollIntoView({ behavior: 'smooth' });

            // Delay adding highlight until scroll finishes
            setTimeout(() => {
                aboutTitle.classList.add('highlight-title');

                // Remove class after animation so it can be triggered again
                setTimeout(() => {
                    aboutTitle.classList.remove('highlight-title');
                }, 2000);
            }, 600); // adjust this delay as needed
        });
    }

    if (contactBtn && footerSection) {
        contactBtn.addEventListener('click', function () {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

