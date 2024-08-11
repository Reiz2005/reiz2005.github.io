function search() {
    const query = document.getElementById('searchInput').value;
    const searchEngine = document.getElementById('searchEngine').value;
    const url = `${searchEngine}${encodeURIComponent(query)}`;
    window.open(url, '_blank');
}

function getFavicon(url) {
    return `${new URL(url).origin}/favicon.ico`;
}

function setFavicons() {
    const linkItems = document.querySelectorAll('.link-item');

    linkItems.forEach(item => {
        const anchor = item.querySelector('a');
        const faviconUrl = getFavicon(anchor.href);
        const img = item.querySelector('.favicon');
        img.src = faviconUrl;

        // 如果图标加载失败，移除图标
        img.onerror = () => {
            img.src = "icons/404.png";
        };
    });
}

window.onload = setFavicons;
