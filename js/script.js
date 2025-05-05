document.addEventListener('DOMContentLoaded', () => {
    // 获取DOM元素
    const tutorialBtn = document.querySelector('.tutorial-btn');
    const subOptions = document.querySelector('.sub-options');
    
    // 添加教程按钮点击事件
    tutorialBtn.addEventListener('click', () => {
        // 切换子选项的显示状态
        subOptions.classList.toggle('hidden');
        
        // 如果子选项正在显示，更改按钮文本
        if (!subOptions.classList.contains('hidden')) {
            tutorialBtn.textContent = '收起选项';
            subOptions.classList.add('active');
            
            // 添加点击动画效果
            subOptions.querySelectorAll('.sub-btn').forEach((btn, index) => {
                btn.style.animation = `popIn 0.3s ${index * 0.1}s forwards`;
            });
        } else {
            tutorialBtn.textContent = '查看教程';
            subOptions.classList.remove('active');
        }
    });
    
    // 添加卡片悬停特效
    const cards = document.querySelectorAll('.option-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.option-icon');
            icon.style.transform = 'scale(1.2) rotate(5deg)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.option-icon');
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });
    
    // 添加页面加载动画
    document.body.classList.add('loaded');
    
    // 创建背景动态效果
    createParticles();
});

// 创建背景粒子效果
function createParticles() {
    const container = document.querySelector('.container');
    const particlesCount = 20;
    
    for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // 随机设置粒子的大小、位置和动画延迟
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        container.appendChild(particle);
    }
}

// 添加页面切换特效
const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        // 阻止默认行为
        e.preventDefault();
        
        // 获取目标页面URL
        const targetUrl = this.getAttribute('href');
        
        // 添加页面淡出效果
        document.body.classList.add('page-transition');
        
        // 在动画完成后跳转到目标页面
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 500);
    });
}); 