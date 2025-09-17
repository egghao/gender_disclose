// 頁面加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 倒數計時器功能
    function setupCountdown() {
        // 設定活動日期時間 (2024年9月28日下午2點)
        const eventDate = new Date('2024-09-28T14:00:00').getTime();
        
        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = eventDate - now;
            
            if (timeLeft > 0) {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
                
                // 創建倒數計時器顯示
                if (!document.getElementById('countdown')) {
                    const countdownElement = document.createElement('div');
                    countdownElement.id = 'countdown';
                    countdownElement.innerHTML = `
                        <div class="countdown-container">
                            <h4>距離活動開始還有</h4>
                            <div class="countdown-display">
                                <div class="time-unit">
                                    <span class="time-number">${days}</span>
                                    <span class="time-label">天</span>
                                </div>
                                <div class="time-unit">
                                    <span class="time-number">${hours}</span>
                                    <span class="time-label">時</span>
                                </div>
                                <div class="time-unit">
                                    <span class="time-number">${minutes}</span>
                                    <span class="time-label">分</span>
                                </div>
                                <div class="time-unit">
                                    <span class="time-number">${seconds}</span>
                                    <span class="time-label">秒</span>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    // 插入到主標題後面
                    const heroSection = document.querySelector('.hero-section');
                    heroSection.appendChild(countdownElement);
                    
                    // 添加倒數計時器的響應式CSS樣式
                    const style = document.createElement('style');
                    style.textContent = `
                        #countdown {
                            background: rgba(255, 255, 255, 0.9);
                            padding: 20px;
                            border-radius: 15px;
                            margin-top: 30px;
                            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                            backdrop-filter: blur(10px);
                        }
                        
                        .countdown-container h4 {
                            color: #333;
                            margin-bottom: 15px;
                            font-size: 1.2rem;
                        }
                        
                        .countdown-display {
                            display: flex;
                            justify-content: center;
                            gap: 20px;
                            flex-wrap: wrap;
                        }
                        
                        .time-unit {
                            text-align: center;
                            background: linear-gradient(45deg, #2196f3, #e91e63);
                            color: white;
                            padding: 15px;
                            border-radius: 10px;
                            min-width: 60px;
                            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
                            transition: transform 0.3s ease;
                        }
                        
                        .time-unit:hover {
                            transform: scale(1.1);
                        }
                        
                        .time-number {
                            display: block;
                            font-size: 1.5rem;
                            font-weight: 700;
                        }
                        
                        .time-label {
                            font-size: 0.9rem;
                        }
                        
                        /* 平板響應式設計 */
                        @media (max-width: 768px) {
                            #countdown {
                                padding: 15px;
                                margin: 20px 10px;
                            }
                            
                            .countdown-container h4 {
                                font-size: 1.1rem;
                            }
                            
                            .countdown-display {
                                gap: 15px;
                            }
                            
                            .time-unit {
                                padding: 12px;
                                min-width: 55px;
                            }
                            
                            .time-number {
                                font-size: 1.3rem;
                            }
                        }
                        
                        /* 手機響應式設計 */
                        @media (max-width: 480px) {
                            #countdown {
                                padding: 12px;
                                margin: 15px 5px;
                            }
                            
                            .countdown-container h4 {
                                font-size: 1rem;
                                margin-bottom: 10px;
                            }
                            
                            .countdown-display {
                                gap: 10px;
                            }
                            
                            .time-unit {
                                padding: 10px 8px;
                                min-width: 50px;
                            }
                            
                            .time-number {
                                font-size: 1.2rem;
                            }
                            
                            .time-label {
                                font-size: 0.8rem;
                            }
                        }
                        
                        /* 超小螢幕優化 */
                        @media (max-width: 320px) {
                            .countdown-display {
                                gap: 8px;
                            }
                            
                            .time-unit {
                                padding: 8px 6px;
                                min-width: 45px;
                            }
                            
                            .time-number {
                                font-size: 1.1rem;
                            }
                        }
                    `;
                    document.head.appendChild(style);
                } else {
                    // 更新現有的倒數計時器
                    document.querySelector('#countdown .countdown-display').innerHTML = `
                        <div class="time-unit">
                            <span class="time-number">${days}</span>
                            <span class="time-label">天</span>
                        </div>
                        <div class="time-unit">
                            <span class="time-number">${hours}</span>
                            <span class="time-label">時</span>
                        </div>
                        <div class="time-unit">
                            <span class="time-number">${minutes}</span>
                            <span class="time-label">分</span>
                        </div>
                        <div class="time-unit">
                            <span class="time-number">${seconds}</span>
                            <span class="time-label">秒</span>
                        </div>
                    `;
                }
            } else {
                // 活動已開始
                if (document.getElementById('countdown')) {
                    document.getElementById('countdown').innerHTML = `
                        <div class="countdown-container">
                            <h4 style="color: #e91e63; font-size: 1.5rem;">🎉 活動進行中！🎉</h4>
                        </div>
                    `;
                }
            }
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    
    // 2. 響應式導航和滾動效果
    function setupResponsiveNavigation() {
        // 檢測螢幕大小並調整佈局
        function handleResize() {
            const screenWidth = window.innerWidth;
            const timelineItems = document.querySelectorAll('.timeline-item');
            const timeline = document.querySelector('.timeline');
            
            if (screenWidth <= 768) {
                // 移動設備時間軸調整
                timelineItems.forEach(item => {
                    item.style.justifyContent = 'flex-start';
                    const content = item.querySelector('.timeline-content');
                    if (content) {
                        content.style.width = 'calc(100% - 80px)';
                        content.style.marginLeft = '60px';
                        content.style.marginRight = '0';
                    }
                });
                
                if (timeline) {
                    const timelineLine = timeline.querySelector('::before') || timeline;
                    timeline.style.setProperty('--timeline-left', '30px');
                }
            } else {
                // 桌面版時間軸恢復
                timelineItems.forEach((item, index) => {
                    if (index % 2 === 0) {
                        item.style.justifyContent = 'flex-end';
                    } else {
                        item.style.justifyContent = 'flex-start';
                    }
                    const content = item.querySelector('.timeline-content');
                    if (content) {
                        content.style.width = '45%';
                        if (index % 2 === 0) {
                            content.style.marginRight = '55%';
                            content.style.marginLeft = '0';
                        } else {
                            content.style.marginLeft = '55%';
                            content.style.marginRight = '0';
                        }
                    }
                });
            }
        }
        
        // 初始化和監聽視窗大小變化
        handleResize();
        window.addEventListener('resize', handleResize);
        
        // 平滑滾動
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // 3. 觸控設備優化
    function setupTouchOptimizations() {
        // 檢測觸控設備
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        if (isTouchDevice) {
            // 為觸控設備添加特殊樣式
            const touchStyle = document.createElement('style');
            touchStyle.textContent = `
                .detail-card, .transport-item, .parking-item, .timeline-content {
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                
                .detail-card:active, .transport-item:active, .parking-item:active {
                    transform: scale(0.98);
                }
                
                .balloon {
                    cursor: pointer;
                    -webkit-tap-highlight-color: transparent;
                }
                
                /* 增大觸控目標 */
                .time-unit {
                    min-height: 44px;
                    min-width: 60px;
                }
                
                @media (max-width: 480px) {
                    .time-unit {
                        min-height: 40px;
                        min-width: 50px;
                    }
                }
            `;
            document.head.appendChild(touchStyle);
            
            // 觸控反饋
            document.querySelectorAll('.detail-card, .transport-item, .parking-item').forEach(element => {
                element.addEventListener('touchstart', function() {
                    this.style.transform = 'scale(0.98)';
                });
                
                element.addEventListener('touchend', function() {
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 150);
                });
            });
        }
    }
    
    // 4. 滾動動畫（改良響應式版本）
    function setupScrollAnimations() {
        const observerOptions = {
            threshold: window.innerWidth <= 768 ? 0.05 : 0.1,
            rootMargin: window.innerWidth <= 768 ? '0px 0px -20px 0px' : '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        const animatedElements = document.querySelectorAll('.detail-card, .transport-section, .parking-section, .schedule-section, .cta-section');
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = window.innerWidth <= 768 ? 'translateY(20px)' : 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
    
    // 5. 氣球互動效果（響應式版本）
    function setupInteractiveBalloons() {
        const balloons = document.querySelectorAll('.balloon');
        
        balloons.forEach((balloon, index) => {
            balloon.addEventListener('click', function() {
                createHeartEffect(this);
                
                this.style.animation = 'none';
                setTimeout(() => {
                    this.style.animation = `float 3s ease-in-out infinite ${index}s`;
                }, 10);
            });
            
            // 只在非觸控設備上添加懸停效果
            if (!('ontouchstart' in window)) {
                balloon.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.2) translateY(-10px)';
                    this.style.transition = 'transform 0.3s ease';
                });
                
                balloon.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1) translateY(0)';
                });
            }
        });
    }
    
    // 6. 愛心效果（適配不同螢幕大小）
    function createHeartEffect(element) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'absolute';
        heart.style.fontSize = window.innerWidth <= 480 ? '16px' : '20px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        
        const rect = element.getBoundingClientRect();
        heart.style.left = (rect.left + rect.width / 2) + 'px';
        heart.style.top = (rect.top + rect.height / 2) + 'px';
        
        document.body.appendChild(heart);
        
        let opacity = 1;
        let y = 0;
        
        const animateHeart = () => {
            y -= window.innerWidth <= 480 ? 1.5 : 2;
            opacity -= 0.02;
            
            heart.style.transform = `translateY(${y}px)`;
            heart.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animateHeart);
            } else {
                if (heart.parentNode) {
                    document.body.removeChild(heart);
                }
            }
        };
        
        requestAnimationFrame(animateHeart);
    }
    
    // 7. 時間軸互動（響應式版本）
    function setupTimelineInteractions() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach(item => {
            const content = item.querySelector('.timeline-content');
            
            if (!('ontouchstart' in window)) {
                item.addEventListener('mouseenter', function() {
                    content.style.transform = window.innerWidth <= 768 ? 'scale(1.02)' : 'scale(1.05)';
                    content.style.transition = 'transform 0.3s ease';
                    content.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
                });
                
                item.addEventListener('mouseleave', function() {
                    content.style.transform = 'scale(1)';
                    content.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                });
            }
        });
    }
    
    // 8. 響應式彩帶效果
    function createResponsiveConfetti() {
        const confettiContainer = document.querySelector('.confetti');
        if (!confettiContainer) return;
        
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#fd79a8'];
        const isMobile = window.innerWidth <= 768;
        
        const interval = isMobile ? 5000 : 3000; // 移動設備減少頻率
        const maxConfetti = isMobile ? 3 : 5; // 移動設備減少數量
        
        setInterval(() => {
            for (let i = 0; i < maxConfetti; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti-piece';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                confetti.style.animationDelay = Math.random() * 2 + 's';
                confetti.style.width = confetti.style.height = isMobile ? '6px' : '10px';
                
                confettiContainer.appendChild(confetti);
                
                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }, 5000);
            }
        }, interval);
    }
    
    // 9. 響應式提示和幫助
    function setupResponsiveHelpers() {
        const screenWidth = window.innerWidth;
        
        if (screenWidth <= 768) {
            // 移動設備滾動提示
            const scrollHint = document.createElement('div');
            scrollHint.innerHTML = screenWidth <= 480 ? '👆 向上滑動' : '👆 向上滑動查看更多資訊';
            scrollHint.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(33, 150, 243, 0.9);
                color: white;
                padding: ${screenWidth <= 480 ? '8px 16px' : '10px 20px'};
                border-radius: 20px;
                font-size: ${screenWidth <= 480 ? '12px' : '14px'};
                z-index: 1000;
                animation: fadeInOut 3s ease-in-out;
                backdrop-filter: blur(5px);
            `;
            
            document.body.appendChild(scrollHint);
            
            setTimeout(() => {
                if (scrollHint.parentNode) {
                    scrollHint.parentNode.removeChild(scrollHint);
                }
            }, 3000);
            
            // 添加動畫樣式
            if (!document.getElementById('fadeInOutStyle')) {
                const style = document.createElement('style');
                style.id = 'fadeInOutStyle';
                style.textContent = `
                    @keyframes fadeInOut {
                        0%, 100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
                        20%, 80% { opacity: 1; transform: translateX(-50%) translateY(0); }
                    }
                `;
                document.head.appendChild(style);
            }
        }
        
        // 橫向滾動保護
        document.body.style.overflowX = 'hidden';
    }
    
    // 10. 視窗大小變化監聽
    function setupResizeHandlers() {
        let resizeTimer;
        
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                // 重新初始化響應式功能
                setupResponsiveNavigation();
                setupScrollAnimations();
                
                // 清理並重新創建彩帶效果
                const existingConfetti = document.querySelectorAll('.confetti-piece');
                existingConfetti.forEach(piece => {
                    if (piece.parentNode) piece.parentNode.removeChild(piece);
                });
                
                console.log('響應式佈局已更新');
            }, 250);
        });
    }
    
    // 初始化所有功能
    setupCountdown();
    setupResponsiveNavigation();
    setupTouchOptimizations();
    setupScrollAnimations();
    setupInteractiveBalloons();
    setupTimelineInteractions();
    createResponsiveConfetti();
    setupResponsiveHelpers();
    setupResizeHandlers();
    
    // 頁面加載完成效果
    setTimeout(() => {
        const mainTitle = document.querySelector('.main-title');
        if (mainTitle) {
            mainTitle.style.animation = 'none';
            setTimeout(() => {
                mainTitle.style.animation = 'bounce 1s ease-in-out';
            }, 10);
        }
        
        console.log('🎉 響應式小籠包性別揭曉派對網站已載入完成！');
    }, 1000);
}); 