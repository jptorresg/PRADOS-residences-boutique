const residenceTabs = document.querySelectorAll('.residence-tab');
const levelTabsContainers = document.querySelectorAll('.level-tabs');
const levelTabs = document.querySelectorAll('.level-tab');
const amenitiesContent = document.querySelectorAll('[data-level-content]');
const levelImage = document.getElementById('level-image-display');

let currentResidence = 'r1';

residenceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        residenceTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        currentResidence = tab.dataset.residence;

        levelTabsContainers.forEach(container => {
        if (container.dataset.residence === currentResidence) {
            container.classList.remove('hidden');
        } else {
            container.classList.add('hidden');
        }
        });

        const newActiveTabs = document.querySelectorAll(`.level-tabs[data-residence="${currentResidence}"] .level-tab`);
        if (newActiveTabs.length > 0) {
            newActiveTabs[0].click();
        }
    });
});

document.addEventListener('click', e => {
    if (e.target.classList.contains('level-tab')) {
        const levelId = e.target.dataset.level;

        const siblings = e.target.parentElement.querySelectorAll('.level-tab');
        siblings.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');

        amenitiesContent.forEach(content => {
            content.classList.add('hidden');
        });
        document.getElementById(levelId)?.classList.remove('hidden');

        levelImage.src = `/PRADOS/public/images/${levelId}.jpg`;
    }
});