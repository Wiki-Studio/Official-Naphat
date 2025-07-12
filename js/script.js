// จัดการเมนูย่อย toggle
document.querySelectorAll('.menu.has-submenu').forEach(menuItem => {
    menuItem.addEventListener('click', function (e) {
        // ถ้าคลิกเกิดขึ้นใน a tag ภายในเมนูย่อยของ .has-submenu.open ให้ปล่อยผ่าน
        const isInsideSubmenuLink =
            this.classList.contains('open') &&
            e.target.closest('.menu.has-submenu ul') &&
            e.target.tagName.toLowerCase() === 'a';

        if (isInsideSubmenuLink) {
            // ปล่อยให้ลิงก์ทำงานตามปกติ (เช่น ไปหน้าอื่น)
            return;
        }

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

// จัดการ active class ให้กับลิงก์ที่ตรงกับชื่อไฟล์
window.addEventListener("DOMContentLoaded", () => {
    const currentPage = location.pathname.split("/").pop(); // ดึงชื่อไฟล์ เช่น index.html
    const links = document.querySelectorAll("header a");

    links.forEach(link => {
        const className = link.className.trim();

        // ถ้าชื่อ class ตรงกับชื่อไฟล์
        if (className === currentPage) {
            link.classList.add("active");
        }

        // ถ้ายังไม่มี active และ class มีอยู่
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
