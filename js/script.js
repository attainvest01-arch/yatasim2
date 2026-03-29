// script.js
document.addEventListener("DOMContentLoaded", () => {
    
    // 0. Smooth Scroll for Nav Links + Active State Update
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // 1. Sticky Header Transparent to Solid Effect
    const header = document.querySelector('.header-glass');
    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight * 0.1) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Hero Component Auto-Slider Vanilla Logic
    const slidesData = [
        {
            img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1600",
            headline: "Menenun Harapan, Mewujudkan Kemandirian.",
            subheadline: "Wadah pemberdayaan anak bangsa. Membangun ekosistem pendidikan partisipatif yang humanis, profesional, dan menginspirasi."
        },
        {
            img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1600",
            headline: "Pendidikan Islami yang Mengakar pada Adab.",
            subheadline: "Lebih dari sekadar memindahkan wawasan, kami menyalakan api keingintahuan dan memupuk karakter yang bertakwa."
        },
        {
            img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=1600",
            headline: "Kolaborasi Nyata, Masa Depan Cemerlang.",
            subheadline: "Setiap senyum yang tumbuh adalah hasil gotong royong para relawan, donatur, dan pendidik yang penuh dedikasi."
        }
    ];

    const sliderContainer = document.getElementById('hero-slider');
    
    if (sliderContainer) {
        slidesData.forEach((slide, idx) => {
            const slideHtml = `
            <div class="slide-item ${idx === 0 ? 'active' : ''}">
                <img src="${slide.img}" alt="Hero Image ${idx + 1}" />
                <div class="hero-slide-text">
                    <span class="text-label-md" style="color: var(--surface-container-lowest); letter-spacing: 0.2em; display:block; margin-bottom:1.5rem; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">Rumah Belajar Insan Mandiri</span>
                    <h1 class="text-gradient">${slide.headline}</h1>
                    <p style="text-shadow: 0 2px 4px rgba(0,0,0,0.8);">${slide.subheadline}</p>
                </div>
            </div>`;
            sliderContainer.insertAdjacentHTML('beforeend', slideHtml);
        });

        const slideElements = sliderContainer.querySelectorAll('.slide-item');
        let currentHeroIndex = 0;

        setInterval(() => {
            slideElements[currentHeroIndex].classList.remove('active');
            currentHeroIndex = (currentHeroIndex + 1) % slideElements.length;
            slideElements[currentHeroIndex].classList.add('active');
        }, 5000);
    }

    // 3. Intersection Observer for Scroll Reveals
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });
    
    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Count-up Animation for Impact Stats
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }
                };
                
                const index = counter.dataset.index || 0;
                setTimeout(updateCounter, index * 200);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach((counter, idx) => {
        counter.dataset.index = idx;
        counterObserver.observe(counter);
    });

    // 5. Interactive FAQ Accordion — uses 'is-open' to avoid conflict with reveal's 'active'
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isCurrentlyOpen = item.classList.contains('is-open');
            // Close all
            faqItems.forEach(otherItem => otherItem.classList.remove('is-open'));
            // Toggle current
            if (!isCurrentlyOpen) {
                item.classList.add('is-open');
            }
        });
    });

    // 6. Program Tabs Logic — Smooth Fade Transition
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = `tab-${btn.getAttribute('data-tab')}`;
            const targetContent = document.getElementById(targetId);
            if (!targetContent || targetContent.classList.contains('active')) return;

            // Fade out current active tab
            tabContents.forEach(tc => {
                if (tc.classList.contains('active')) {
                    tc.style.opacity = '0';
                    tc.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        tc.classList.remove('active');
                        tc.style.display = 'none';
                        tc.style.opacity = '';
                        tc.style.transform = '';
                    }, 350);
                }
            });

            // Update active tab button
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Fade in new tab
            setTimeout(() => {
                targetContent.style.display = 'block';
                targetContent.style.opacity = '0';
                targetContent.style.transform = 'translateY(10px)';
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        targetContent.classList.add('active');
                        targetContent.style.opacity = '1';
                        targetContent.style.transform = 'translateY(0)';
                        setTimeout(() => {
                            targetContent.style.opacity = '';
                            targetContent.style.transform = '';
                        }, 500);
                    });
                });
            }, 380);
        });
    });

    // 7. Donation CTA Switch — Smooth Animated Expand
    const btnMulaiDonasi = document.getElementById('btn-mulai-donasi');
    const donationOptions = document.getElementById('donation-options');
    if (btnMulaiDonasi && donationOptions) {
        btnMulaiDonasi.addEventListener('click', () => {
            // Fade out the main button
            btnMulaiDonasi.style.opacity = '0';
            btnMulaiDonasi.style.transform = 'translateY(-10px) scale(0.95)';
            btnMulaiDonasi.style.transition = 'all 0.35s cubic-bezier(0.16,1,0.3,1)';
            setTimeout(() => {
                btnMulaiDonasi.style.display = 'none';
                // Fade in option buttons
                donationOptions.style.display = 'flex';
                donationOptions.style.opacity = '0';
                donationOptions.style.transform = 'translateY(12px)';
                donationOptions.style.transition = 'all 0.45s cubic-bezier(0.16,1,0.3,1)';
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        donationOptions.style.opacity = '1';
                        donationOptions.style.transform = 'translateY(0)';
                    });
                });
            }, 370);
        });
    }

    // 8. Testimonial Auto-Rotating Slider
    (function initTestimonialSlider() {
        const slider = document.getElementById('testimonial-slider');
        const dotsContainer = document.getElementById('testimonial-dots');
        const prevBtn = document.getElementById('prev-testimonial');
        const nextBtn = document.getElementById('next-testimonial');

        if (!slider || !dotsContainer) return;

        const slides = slider.querySelectorAll('.testimonial-slide');
        if (slides.length === 0) return;

        let current = 0;
        let autoTimer = null;

        // Build dots dynamically
        slides.forEach((_, idx) => {
            const dot = document.createElement('button');
            dot.classList.add('tdot');
            dot.setAttribute('aria-label', `Testimonial ${idx + 1}`);
            if (idx === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                stopAuto();
                goTo(idx);
                startAuto();
            });
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.tdot');

        function goTo(index) {
            slides[current].classList.remove('active');
            dots[current].classList.remove('active');
            current = ((index % slides.length) + slides.length) % slides.length;
            slides[current].classList.add('active');
            dots[current].classList.add('active');
        }

        function startAuto() {
            autoTimer = setInterval(() => goTo(current + 1), 4000);
        }

        function stopAuto() {
            if (autoTimer) {
                clearInterval(autoTimer);
                autoTimer = null;
            }
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                stopAuto();
                goTo(current - 1);
                startAuto();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                stopAuto();
                goTo(current + 1);
                startAuto();
            });
        }

        // Pause on hover
        const wrapper = slider.closest('.testimonial-slider-wrapper');
        if (wrapper) {
            wrapper.addEventListener('mouseenter', stopAuto);
            wrapper.addEventListener('mouseleave', startAuto);
        }

        startAuto();
    })();

});
