
document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && event.target === this) {
        event.preventDefault(); // 防止默认行为
        search(); // 执行搜索
    }
});
