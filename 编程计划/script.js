document.addEventListener('DOMContentLoaded', () => {
    // 初始化 AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // 处理欢迎页面的淡出效果
    window.addEventListener('scroll', () => {
        const welcomeSection = document.querySelector('.welcome-section');
        const scrollPosition = window.scrollY;
        const opacity = 1 - (scrollPosition / window.innerHeight);
        welcomeSection.style.opacity = Math.max(opacity, 0);
        
        if (scrollPosition > window.innerHeight) {
            welcomeSection.style.visibility = 'hidden';
        } else {
            welcomeSection.style.visibility = 'visible';
        }
    });
}); 