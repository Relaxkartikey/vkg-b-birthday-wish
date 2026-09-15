(function () {
  if (window.lucide) lucide.createIcons();

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(function (el) { io.observe(el); });

  // Section nav active state (dot-nav + dock stay in sync)
  var dots = document.querySelectorAll('.dot-nav .dot');
  var dockItems = document.querySelectorAll('.dock-item');
  var sections = Array.prototype.map.call(dots, function (d) {
    return document.querySelector(d.getAttribute('data-target'));
  });
  var navIo = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var idx = sections.indexOf(entry.target);
        dots.forEach(function (d) { d.classList.remove('active'); });
        dockItems.forEach(function (d) { d.classList.remove('active'); });
        if (dots[idx]) dots[idx].classList.add('active');
        if (dockItems[idx]) dockItems[idx].classList.add('active');
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(function (s) { if (s) navIo.observe(s); });

  // Parallax on hero image
  var heroBg = document.querySelector('.hero-bg');
  window.addEventListener('scroll', function () {
    if (!heroBg) return;
    var y = window.scrollY;
    if (y < window.innerHeight) {
      heroBg.style.transform = 'scale(1.05) translateY(' + (y * 0.25) + 'px)';
    }
  }, { passive: true });

  // Confetti
  var canvas = document.getElementById('confetti-canvas');
  var ctx = canvas.getContext('2d');
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  var colors = ['#e50914', '#f0c48a', '#d98a3d', '#f5f0e8'];
  var particles = [];

  function burst(x, y) {
    for (var i = 0; i < 90; i++) {
      var angle = Math.random() * Math.PI * 2;
      var speed = 3 + Math.random() * 7;
      particles.push({
        x: x, y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: 4 + Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        rot: Math.random() * Math.PI,
        vrot: (Math.random() - 0.5) * 0.3
      });
    }
    if (!raf) loop();
  }

  var raf = null;
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function (p) {
      p.vy += 0.12;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vrot;
      p.life -= 0.012;
      ctx.save();
      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });
    particles = particles.filter(function (p) { return p.life > 0 && p.y < canvas.height + 40; });
    if (particles.length > 0) {
      raf = requestAnimationFrame(loop);
    } else {
      raf = null;
    }
  }

  function triggerFromButton(btn) {
    var rect = btn.getBoundingClientRect();
    burst(rect.left + rect.width / 2, rect.top + rect.height / 2);
  }

  // Curtain chapter transitions
  var curtain = document.getElementById('curtain');
  var curtainLabel = curtain ? curtain.querySelector('.curtain-label') : null;
  var transitioning = false;

  function goToChapter(target, chapter, btn) {
    if (transitioning) return;
    var dest = document.querySelector(target);
    if (!dest) return;
    transitioning = true;
    if (btn) triggerFromButton(btn);
    if (curtainLabel) curtainLabel.textContent = chapter || '';
    curtain.classList.add('covering');
    setTimeout(function () {
      dest.scrollIntoView({ behavior: 'auto' });
      setTimeout(function () {
        curtain.classList.remove('covering');
        transitioning = false;
      }, 650);
    }, 600);
  }

  var nextCtas = document.querySelectorAll('.next-cta');
  nextCtas.forEach(function (btn) {
    btn.addEventListener('click', function () {
      goToChapter(btn.getAttribute('data-target'), btn.getAttribute('data-chapter'), btn);
    });
  });

  var chapterNavEls = document.querySelectorAll('.chapter-nav');
  chapterNavEls.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      goToChapter(el.getAttribute('data-target'), el.getAttribute('data-chapter'));
    });
  });

  var celebrateBtn = document.getElementById('celebrateBtn');
  if (celebrateBtn) celebrateBtn.addEventListener('click', function () {
    triggerFromButton(celebrateBtn);
    burst(canvas.width * 0.25, canvas.height * 0.3);
    burst(canvas.width * 0.75, canvas.height * 0.3);
  });

  var listBtn = document.getElementById('listBtn');
  if (listBtn) listBtn.addEventListener('click', function () {
    listBtn.querySelector('i').setAttribute('data-lucide', 'check');
    if (window.lucide) lucide.createIcons();
  });

  var infoBtn = document.getElementById('infoBtn');
  if (infoBtn) infoBtn.addEventListener('click', function () {
    document.getElementById('poem').scrollIntoView({ behavior: 'smooth' });
  });

  // Background music
  var bgm = document.getElementById('bgm');
  var musicButtons = document.querySelectorAll('.music-toggle');
  var playing = false;

  function setMusicIcon(name) {
    musicButtons.forEach(function (btn) {
      var icon = btn.querySelector('i');
      if (icon) icon.setAttribute('data-lucide', name);
      btn.classList.toggle('playing', playing);
    });
    if (window.lucide) lucide.createIcons();
  }

  function toggleMusic() {
    if (!bgm) return;
    if (playing) {
      bgm.pause();
      playing = false;
      setMusicIcon('music');
      return;
    }
    var playPromise = bgm.play();
    if (playPromise && playPromise.catch) {
      playPromise.then(function () {
        playing = true;
        setMusicIcon('pause');
      }).catch(function () {
        playing = false;
        setMusicIcon('music-2');
      });
    } else {
      playing = true;
      setMusicIcon('pause');
    }
  }

  musicButtons.forEach(function (btn) {
    btn.addEventListener('click', toggleMusic);
  });

  if (bgm) {
    bgm.addEventListener('error', function () {
      musicButtons.forEach(function (btn) {
        btn.setAttribute('disabled', 'true');
        btn.title = 'Music unavailable';
      });
    });
  }
})();
