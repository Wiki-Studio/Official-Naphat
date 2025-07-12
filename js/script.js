// จัดการเมนูย่อย toggle
document.querySelectorAll('.menu.has-submenu').forEach(menuItem => {
    menuItem.addEventListener('click', function (e) {
        // ถ้าคลิกที่ <a> โดยตรง ให้ปล่อยให้ลิงก์ทำงานตามปกติ
        if (e.target.tagName.toLowerCase() === 'a') return;

        e.preventDefault();

        // ปิดเมนูอื่นที่เปิดอยู่
        document.querySelectorAll('.menu.has-submenu.open').forEach(openItem => {
            if (openItem !== this) {
                openItem.classList.remove('open');
            }
        });

        // toggle เมนูปัจจุบัน
        this.classList.toggle('open');
    });
});

// จัดการ class "active" สำหรับเมนูตามหน้าเพจปัจจุบัน
window.addEventListener("DOMContentLoaded", () => {
    const currentPage = location.pathname.split("/").pop(); // ดึงชื่อไฟล์หลังสุด เช่น index.html
    const links = document.querySelectorAll("header a");

    links.forEach(link => {
        const className = link.className.trim();

        // เงื่อนไขที่ 1: ถ้าชื่อ class ตรงกับชื่อไฟล์
        if (className === currentPage) {
            link.classList.add("active");
        }

        // เงื่อนไขที่ 2: ถ้าไม่มี class active และมี class อื่น
        if (!link.classList.contains("active") && className) {
            link.setAttribute("href", className);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menuToggle");
    const hdList = document.querySelector(".hd_list");

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");     // แปลง 3 ขีด ↔ กากบาท
        hdList.classList.toggle("toggle");     // แสดง/ซ่อนเมนู
    });
});
