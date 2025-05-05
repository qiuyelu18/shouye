// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取教程卡片元素
    const tutorialCard = document.getElementById('tutorial-card');
    
    // 点击教程卡片以外的区域关闭下拉菜单
    document.addEventListener('click', function(event) {
        if (!tutorialCard.contains(event.target)) {
            const dropdownContent = tutorialCard.querySelector('.dropdown-content');
            dropdownContent.style.display = 'none';
        }
    });
    
    // 点击教程卡片时切换下拉菜单的显示
    tutorialCard.addEventListener('click', function(event) {
        const dropdownContent = this.querySelector('.dropdown-content');
        // 阻止事件冒泡
        event.stopPropagation();
        
        // 切换下拉菜单的显示状态
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});