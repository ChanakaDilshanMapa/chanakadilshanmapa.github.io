// Tabbed navigation logic
document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabSections = document.querySelectorAll('.tab-section');

    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active from all tabs
            tabLinks.forEach(l => l.classList.remove('active'));
            // Hide all sections
            tabSections.forEach(sec => sec.style.display = 'none');
            // Activate this tab
            this.classList.add('active');
            // Show the corresponding section
            const tab = this.getAttribute('data-tab');
            const section = document.getElementById(tab);
            if (section) section.style.display = 'block';
        });
    });

    // Show the first tab by default
    tabLinks[0].classList.add('active');
    tabSections.forEach((sec, i) => sec.style.display = i === 0 ? 'block' : 'none');
});
