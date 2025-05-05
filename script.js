document.addEventListener('DOMContentLoaded', () => {
    // 为卡片添加点击效果
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // 添加年份自动更新
    const yearElement = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = yearElement.textContent.replace('2023', currentYear);
}); 