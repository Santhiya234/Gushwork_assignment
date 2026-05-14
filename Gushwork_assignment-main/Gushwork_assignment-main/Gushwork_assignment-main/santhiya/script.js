document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================
       1. STICKY HEADER LOGIC
       ========================================================= */
    const stickyHeader = document.getElementById('stickyHeader');

    const scrollThreshold = 300;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            stickyHeader.classList.add('visible');
        } else {
            stickyHeader.classList.remove('visible');
        }
    });

    /* =========================================================
       1.5. MOBILE MENU LOGIC
       ========================================================= */
    const menuBtns = document.querySelectorAll('.mobile-menu-btn');
    menuBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const header = e.target.closest('.header');
            if (header) {
                const nav = header.querySelector('.main-nav');
                if (nav) {
                    nav.classList.toggle('active');
                }
            }
        });
    });

    /* =========================================================
       2. IMAGE CAROUSEL LOGIC
       ========================================================= */
    const mainImg = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function updateMainImage(index) {
        if (index < 0) {
            index = thumbnails.length - 1;
        } else if (index >= thumbnails.length) {
            index = 0;
        }

        currentIndex = index;

        thumbnails.forEach(thumb => thumb.classList.remove('active'));

        const currentThumb = thumbnails[currentIndex];
        currentThumb.classList.add('active');


        const thumbSrc = currentThumb.getAttribute('src');
        const highResSrc = thumbSrc.replace('w=200&h=200', 'w=800&h=800');

        mainImg.src = highResSrc;

        const result = document.getElementById('zoomResult');
        if (result.style.backgroundImage !== '') {
            result.style.backgroundImage = `url(${highResSrc})`;
        }
    }

    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            updateMainImage(index);
        });
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateMainImage(currentIndex - 1);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateMainImage(currentIndex + 1);
    });

    /* =========================================================
       3. IMAGE ZOOM LOGIC
       ========================================================= */
    const container = document.getElementById('mainImageContainer');
    const lens = document.getElementById('zoomLens');
    const result = document.getElementById('zoomResult');

    const zoomRatio = 2.5;

    container.addEventListener('mouseenter', () => {
        lens.style.visibility = 'visible';
        lens.style.opacity = '1';
        result.style.visibility = 'visible';
        result.style.opacity = '1';

        result.style.backgroundImage = `url(${mainImg.src})`;
    });

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();

        result.style.backgroundSize = `${rect.width * zoomRatio}px ${rect.height * zoomRatio}px`;

        const resultRect = result.getBoundingClientRect();
        const resWidth = resultRect.width || 450;
        const resHeight = resultRect.height || 450;

        const lensWidth = resWidth / zoomRatio;
        const lensHeight = resHeight / zoomRatio;

        lens.style.width = `${lensWidth}px`;
        lens.style.height = `${lensHeight}px`;

        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;


        let lensLeft = x - (lensWidth / 2);
        let lensTop = y - (lensHeight / 2);

        if (lensLeft < 0) lensLeft = 0;
        if (lensTop < 0) lensTop = 0;
        if (lensLeft > rect.width - lensWidth) lensLeft = rect.width - lensWidth;
        if (lensTop > rect.height - lensHeight) lensTop = rect.height - lensHeight;

        lens.style.left = `${lensLeft}px`;
        lens.style.top = `${lensTop}px`;

        const bgPosX = -(lensLeft * zoomRatio);
        const bgPosY = -(lensTop * zoomRatio);

        result.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
    });

    container.addEventListener('mouseleave', () => {
        lens.style.visibility = 'hidden';
        lens.style.opacity = '0';
        result.style.visibility = 'hidden';
        result.style.opacity = '0';
    });

    const arrows = document.querySelectorAll('.nav-arrow');
    arrows.forEach(arrow => {
        arrow.addEventListener('mouseenter', (e) => {

            lens.style.opacity = '0';
            result.style.opacity = '0';
        });
        arrow.addEventListener('mouseleave', (e) => {
            lens.style.opacity = '1';
            result.style.opacity = '1';
        });
    });

    /* =========================================================
       4. FAQ ACCORDION LOGIC
       ========================================================= */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(faq => {
                faq.classList.remove('active');
                faq.querySelector('.faq-answer').style.display = 'none';
                const icon = faq.querySelector('.faq-icon i');
                icon.className = 'fas fa-chevron-down';
            });

            if (!isActive) {
                item.classList.add('active');
                item.querySelector('.faq-answer').style.display = 'block';
                const icon = item.querySelector('.faq-icon i');
                icon.className = 'fas fa-chevron-up';
            }
        });
    });

});
