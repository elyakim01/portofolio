(function () {
  'use strict';
  var D = document, W = window;
  var P = W.PORTFOLIO;
  var IMG_DIR = 'img/';
  var EXTS = ['jpg', 'jpeg', 'png'];           // cadangan jika .webp tidak ada

  function $(id) { return D.getElementById(id); }
  function esc(s) { return String(s).replace(/"/g, '&quot;'); }

  /* ===== gambar otomatis: coba .webp, lalu .jpg/.jpeg/.png, lalu hapus ===== */
  function img(base, alt) {
    return '<img src="' + base + '.webp" data-b="' + base + '" data-q="' + EXTS.join(',') +
           '" alt="' + esc(alt || '') + '" loading="lazy" decoding="async">';
  }
  D.addEventListener('error', function (e) {
    var t = e.target;
    if (!t || t.tagName !== 'IMG' || !t.dataset.b) return;
    var q = t.dataset.q ? t.dataset.q.split(',') : [];
    var next = q.shift();
    if (next) { t.dataset.q = q.join(','); t.src = t.dataset.b + '.' + next; }
    else { t.remove(); }
  }, true);
  D.addEventListener('load', function (e) {
    var t = e.target;
    if (t && t.tagName === 'IMG' && t.parentNode && t.parentNode.id === 'pho') t.parentNode.classList.add('has');
  }, true);

  function slot(base, alt, label) {
    return '<div class="slot"><div><span>🖼️</span>' + (label || 'Foto akan ditambahkan') + '</div>' +
           (base ? img(base, alt) : '') + '</div>';
  }
  function base(it) { return IMG_DIR + it.id; }

  /* kotak logo kecil; kalau file logo tidak ada, tampil inisial perusahaan */
  function logoBox(it, cls) {
    var nm = it.s || it.iss || it.t;
    var ini = String(nm).replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase();
    var b = it.logo ? IMG_DIR + it.logo : (it.k === 'Sertifikasi' ? '' : base(it));
    return '<div class="clogo' + (cls ? ' ' + cls : '') + '"><span>' + ini + '</span>' + (b ? img(b, nm + ' logo') : '') + '</div>';
  }

  /* ===== foto profil kartu ID ===== */
  $('pho').insertAdjacentHTML('beforeend', img(IMG_DIR + 'profil', 'Foto Elyakim Nahampun'));

  /* ===== render ===== */
  var ALL = { exp: P.exp, proj: P.proj, ach: P.ach, cert: P.cert };
  var tint = ['#f1f8f4', '#fff4ec', '#f4f6fb'];

  $('stack').innerHTML = P.exp.map(function (e, i) {
    return '<article class="lay rv" style="--i:' + i + ';--bgc:' + tint[i % 3] + '"><div>' +
      '<span class="ln">0' + (i + 1) + '</span><h3>' + e.t + '</h3>' +
      '<div class="co">' + e.s + ' · ' + e.d + '</div><p>' + e.short + '</p>' +
      '<div class="chs">' + e.chips.map(function (c) { return '<span>' + c + '</span>'; }).join('') + '</div>' +
      '<button class="more" data-k="exp" data-i="' + i + '">Lihat detail →</button></div>' +
      logoBox(e) + '</article>';
  }).join('');

  $('pg').innerHTML = P.proj.map(function (p, i) {
    return '<button class="pc rv" data-k="proj" data-i="' + i + '">' + slot(base(p), p.t, 'Gambar proyek akan ditambahkan') +
      '<div class="in"><small>' + p.k + '</small><h3>' + p.t + '</h3><p>' + p.short + '</p>' +
      '<span class="more">Lihat detail →</span></div></button>';
  }).join('');

  $('al').innerHTML = P.ach.map(function (a, i) {
    return '<button class="ar rv" data-k="ach" data-i="' + i + '"><b>0' + (i + 1) + '</b><h3>' + a.t +
      '</h3><span>' + a.d + '</span><u>Detail →</u></button>';
  }).join('');

  $('cg').innerHTML = P.cert.map(function (c, i) {
    var sub = [c.iss, c.d].filter(Boolean).join(' · ');
    return '<button class="cc rv" data-k="cert" data-i="' + i + '">' + slot(base(c), c.t, 'Gambar sertifikat') +
      '<div class="cr">' + logoBox(c, 'xs') + '<div><h3>' + c.t + '</h3>' + (sub ? '<small>' + sub + '</small>' : '') + '</div></div></button>';
  }).join('');

  /* ===== tab keahlian ===== */
  var tn = Object.keys(P.skills);
  function safe(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function tiles(idx) {
    $('tiles').innerHTML = P.skills[tn[idx]].map(function (s, i) {
      return '<div class="tile" style="animation-delay:' + (i * 60) + 'ms"><i>' + s[0] + '</i>' + s[1] + '</div>';
    }).join('');
    [].forEach.call($('tabs').children, function (b) { b.classList.toggle('on', +b.dataset.i === idx); });
  }
  $('tabs').innerHTML = tn.map(function (n, i) { return '<button class="tab" data-i="' + i + '">' + safe(n) + '</button>'; }).join('');
  $('tabs').addEventListener('click', function (e) { var b = e.target.closest('.tab'); if (b) tiles(+b.dataset.i); });
  tiles(0);

  /* ===== modal detail ===== */
  var mo = $('mo'), lastFocus = null;
  function openM(it, k) {
    var labelMap = { exp: 'Foto perusahaan akan ditambahkan', cert: 'Gambar sertifikat' };
    var label = labelMap[k] || 'Gambar akan ditambahkan';
    var h = '';
    if (k !== 'exp') {
      h = '<div class="mg' + (it.doc ? ' two' : '') + (k === 'cert' ? ' cert' : '') + '"><div>' + slot(base(it), it.t, label) + '</div>' +
        (it.doc ? '<div>' + slot(base(it) + '-doc', it.t + ' – ' + (it.cap2 || 'Dokumentasi'), 'Dokumentasi akan ditambahkan') +
          '<div class="cap">' + (it.cap2 || 'Dokumentasi') + '</div></div>' : '') + '</div>';
    }

    if (k === 'exp') {
      /* pengalaman: logo kecil, nama organisasi, posisi, lalu periode */
      h += '<div class="mb">' + logoBox(it, 'sm') + '<h3>' + (it.org || it.s) + '</h3>' +
           '<div class="ms">' + (it.role || it.t) + '</div>' +
           (it.pill ? '<span class="pill">' + it.pill + '</span>' : '');
    } else {
      h += '<div class="mb">' + (k === 'cert' ? logoBox(it, 'sm') : '') + '<div class="mk">' + it.k + '</div><h3>' + it.t + '</h3>';
      var meta = [it.s, it.d].filter(Boolean).join(' · ');
      if (meta) h += '<div class="ms">' + meta + '</div>';
    }
    if (it.desc) h += '<p>' + it.desc + '</p>';
    if (it.pts && it.pts.length) h += '<ul>' + it.pts.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>';
    if (it.tags && it.tags.length) h += '<div class="tg">' + it.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div>';
    if (it.iss) h += '<div class="is"><small>Diterbitkan oleh</small><b>' + it.iss + '</b>' + (it.issd ? '<p>' + it.issd + '</p>' : '') + '</div>';

    if (k === 'cert') {
      var acts = '';
      if (it.url) acts += '<a class="btn s" href="' + it.url + '" target="_blank" rel="noopener">Lihat sertifikat ↗</a>';
      if (it.verify) acts += '<a class="btn p" href="' + it.verify + '" target="_blank" rel="noopener">Verifikasi sertifikat ↗</a>';
      if (it.web) acts += '<a class="btn s" href="' + it.web + '" target="_blank" rel="noopener">Situs penerbit ↗</a>';
      if (acts) h += '<div class="acts">' + acts + '</div>';
    } else if (it.url) {
      h += '<a class="btn p" href="' + it.url + '" target="_blank" rel="noopener">' + (it.btn || 'Buka website') + ' ↗</a>';
    }

    $('mc').innerHTML = h + '</div>';
    lastFocus = D.activeElement;
    mo.classList.add('on'); mo.setAttribute('aria-hidden', 'false');
    D.body.style.overflow = 'hidden';
    $('mc').parentNode.scrollTop = 0;
    $('mx').focus();
  }
  function closeM() {
    mo.classList.remove('on'); mo.setAttribute('aria-hidden', 'true');
    D.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  D.addEventListener('click', function (e) {
    var b = e.target.closest('[data-k]');
    if (b) openM(ALL[b.dataset.k][+b.dataset.i], b.dataset.k);
  });
  $('mx').onclick = closeM;
  mo.addEventListener('click', function (e) { if (e.target === mo) closeM(); });
  W.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeM(); });

  /* ===== kartu bergantung (fisika bandul) ===== */
  var sw = $('swing'), idc = $('idc'), an = $('anchor');
  var th = .55, om = 0, drag = false, tgt = 0, last = performance.now();
  var reduce = W.matchMedia('(prefers-reduced-motion:reduce)').matches;

  function pos(e) {
    var r = an.getBoundingClientRect(), ax = r.left + r.width / 2, ay = r.top + r.height / 2;
    var dx = e.clientX - ax, dy = Math.max(e.clientY - ay, 40);
    return -Math.atan2(dx, dy);
  }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  sw.addEventListener('pointerdown', function (e) {
    drag = true; tgt = clamp(pos(e), -1.1, 1.1);
    try { sw.setPointerCapture(e.pointerId); } catch (x) {}
  });
  sw.addEventListener('pointermove', function (e) {
    if (drag) tgt = clamp(pos(e), -1.1, 1.1);
    else if (e.pointerType === 'mouse') om = clamp(om - e.movementX * .012, -3, 3);
  });
  function up() { drag = false; }
  sw.addEventListener('pointerup', up);
  sw.addEventListener('pointercancel', up);

  (function loop(t) {
    var dt = Math.min((t - last) / 1000, .033); last = t;
    if (drag) {
      var p = th; th += (tgt - th) * .3;
      om = clamp((th - p) / Math.max(dt, .001), -8, 8);
    } else {
      om += (-13 * Math.sin(th) - .9 * om) * dt;
      th += om * dt;
    }
    sw.style.transform = 'rotate(' + th + 'rad)';
    idc.style.transform = 'rotate(' + (om * .07) + 'rad)';
    W.requestAnimationFrame(loop);
  })(last);
  if (reduce) { th = 0; om = 0; }

  /* ===== progres scroll, reveal, nav aktif ===== */
  var pr = $('prog');
  W.addEventListener('scroll', function () {
    var h = D.documentElement;
    pr.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
  }, { passive: true });

  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .1 });
  D.querySelectorAll('.rv').forEach(function (x) { io.observe(x); });

  var links = [].slice.call(D.querySelectorAll('#nav > a:not(.cv)'));
  var sp = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) links.forEach(function (a) {
        a.classList.toggle('on', D.querySelector(a.getAttribute('href')) === e.target);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(function (a) { var s = D.querySelector(a.getAttribute('href')); if (s) sp.observe(s); });

  /* ===== menu Generate CV (header + footer) ===== */
  var CVM = [['admin', 'Administrasi &amp; Data', 'Pengelolaan data, dokumen, Excel'],
             ['logistik', 'Warehouse &amp; Logistik', 'Inbound, inventory, outbound'],
             ['frontliner', 'Bank', 'Teller, CS'],
             ['it', 'IT &amp; Web Developer', 'PHP, MySQL, sistem informasi'],
             ['umum', 'Umum', 'Semua bidang']];
  var GDS = [].slice.call(D.querySelectorAll('[data-gd]'));
  function closeG() { GDS.forEach(function (x) { x.classList.remove('open'); x.querySelector('.gb').setAttribute('aria-expanded', 'false'); }); }
  GDS.forEach(function (g) {
    g.classList.add('gd');
    if (g.dataset.dir === 'up') g.classList.add('ab');
    g.innerHTML = '<button type="button" class="gb" aria-haspopup="true" aria-expanded="false">Generate <span class="gx-a" aria-hidden="true">▾</span></button>' +
      '<div class="gmn" role="menu"><div class="gh">Generate CV (pilih bidang)</div>' + CVM.map(function (m) {
        return '<a role="menuitem" href="cv.html?p=' + m[0] + '&amp;print=1" target="_blank" rel="noopener">' + m[1] + '<small>' + m[2] + '</small></a>';
      }).join('') + '<a role="menuitem" href="cv.html" target="_blank" rel="noopener">Pengaturan CV lanjutan…</a><hr><div class="gh">Surat lamaran</div>' +
      '<a role="menuitem" href="surat.html" target="_blank" rel="noopener">Generate surat lamaran<small>Isi posisi &amp; perusahaan, unduh PDF</small></a></div>';
    g.querySelector('.gb').addEventListener('click', function (e) {
      e.stopPropagation();
      var on = !g.classList.contains('open');
      closeG();
      if (on) { g.classList.add('open'); this.setAttribute('aria-expanded', 'true'); }
    });
  });
  D.addEventListener('click', closeG);
  W.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeG(); });
})();
