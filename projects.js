// Get all popup elements
const popupContainer = document.getElementById('popupContainer');
const closePopup = document.getElementById('closePopup');
const popup = document.querySelector('.popup');

// Project specific data
const projectData = {
    project1: {
        title: "Personalized Portfolio Website",
        videoUrl: "./project-data/video1.mp4"  // Update with your video path
    },
    project2: {
        title: "X.com Clone",
        videoUrl: "./project-data/video2.mp4"  // Update with your video path
    },
    project3: {
        title: "Functional E-commerce website",
        videoUrl: "./project-data/video3.mp4"  // Update with your video path
    }
};

// Function to open popup with specific content
function openProjectPopup(projectId) {
    const project = projectData[projectId];
    popup.querySelector('h2').textContent = project.title;
    
    // Create or update video element
    let videoContainer = popup.querySelector('.video-container');
    if (!videoContainer) {
        videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        popup.appendChild(videoContainer);
    }
    
    videoContainer.innerHTML = `
        <video width="100%" controls>
            <source src="${project.videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    
    popupContainer.style.display = 'flex';
}

// Add click listeners to all project buttons
document.getElementById('openPopup1').addEventListener('click', () => openProjectPopup('project1'));
document.getElementById('openPopup2').addEventListener('click', () => openProjectPopup('project2'));
document.getElementById('openPopup3').addEventListener('click', () => openProjectPopup('project3'));

// Close popup handlers
closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
    // Clear video when closing
    popup.querySelector('.video-container').innerHTML = '';
});

popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer) {
        popupContainer.style.display = 'none';
        // Clear video when closing
        popup.querySelector('.video-container').innerHTML = '';
    }
});
