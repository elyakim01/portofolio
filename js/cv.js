(function () {
  'use strict';
  var D = document, W = window, C = W.CV;
  function $(id) { return D.getElementById(id); }
  function h(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function rx(t) { return new RegExp('(^|[^a-z0-9])' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '($|[^a-z0-9])'); }
  function has(text, term) { return rx(term).test(text); }

  var qs = new URLSearchParams(W.location.search);
  var printOnly = qs.get('print') === '1';
  var KEY = 'cv-builder-v1';

  /* ---------- state ---------- */
  var S = { p: 'umum', role: '', company: '', len: 'full', jd: '', links: true };
  try {
    var saved = JSON.parse(W.localStorage.getItem(KEY) || 'null');
    if (saved && !printOnly) for (var k in saved) if (k in S) S[k] = saved[k];
  } catch (e) {}
  if (qs.get('p') && C.profiles[qs.get('p')]) S.p = qs.get('p');
  if (qs.has('role')) S.role = qs.get('role');
  if (qs.has('company')) S.company = qs.get('company');
  if (qs.get('len') === 'short') S.len = 'short';
  if (printOnly) { S.jd = ''; S.links = qs.get('links') !== '0'; }

  /* ---------- analisis lowongan ---------- */
  function analyse(jd) {
    var t = String(jd || '').toLowerCase();
    var matched = [], warn = [];
    if (!t.trim()) return { matched: matched, warn: warn };
    C.skills.forEach(function (s) {
      if (s.syn.some(function (x) { return has(t, x); })) matched.push(s.n);
    });
    C.watch.forEach(function (w) {
      if (has(t, w)) {
        var covered = C.skills.some(function (s) { return s.syn.indexOf(w) > -1 && matched.indexOf(s.n) > -1; });
        if (!covered) warn.push(w);
      }
    });
    return { matched: matched, warn: warn };
  }

  /* ---------- susun keahlian ---------- */
  function pickSkills(prof, matched, short) {
    var order = matched.concat(prof.skills.filter(function (n) { return matched.indexOf(n) < 0; }));
    var cap = short ? 5 : 8, groups = [];
    C.skillGroups.forEach(function (gn, gi) {
      var names = order.filter(function (n) {
        for (var i = 0; i < C.skills.length; i++) if (C.skills[i].n === n) return C.skills[i].g === gi;
        return false;
      }).slice(0, cap);
      if (names.length) groups.push({ name: gn, items: names });
    });
    return groups;
  }

  /* ---------- render CV ---------- */
  function emph(t) {
    return h(t).replace(/(±?\d[\d.,]*\s?(?:pcs\/jam|data pemilih|data))/g, '<b>$1</b>');
  }
  function jobHtml(id, prof, short) {
    var e = C.exp[id], ids = (prof.bullets[id] || []);
    if (!ids.length) return '';
    var max = short ? (id === 'imk' ? 1 : 3) : (id === 'imk' ? 2 : 5);
    var lis = ids.slice(0, max).map(function (b) { return '<li>' + emph(e.b[b]) + '</li>'; }).join('');
    return '<div class="item"><div class="row"><b class="role">' + h(e.role) + '</b>' + (e.period ? '<span class="dt">' + h(e.period) + '</span>' : '') +
      '</div><div class="org">' + h(e.org) + '</div><ul>' + lis + '</ul></div>';
  }

  function render() {
    var prof = C.profiles[S.p], short = S.len === 'short', P = C.person;
    var an = analyse(S.jd);
    var title = S.role.trim() || prof.title;

    function nw(x, url) {
      var t = h(x);
      return '<span class="nw">' + (url ? '<a href="' + h(url) + '">' + t + '</a>' : t) + '</span>';
    }
    var l1 = [nw(P.phone), nw(P.email, 'mailto:' + P.email), nw(P.location)].join('<i>|</i>');
    var l2 = [P.linkedin ? nw(P.linkedin, P.linkedinUrl) : '', P.site ? nw(P.site, P.siteUrl) : ''].filter(Boolean).join('<i>|</i>');
    var out = '<header><h1>' + h(P.name) + '</h1><div class="hl">' + h(title) + '</div><div class="ct">' + l1 + '</div>' + (l2 ? '<div class="ct">' + l2 + '</div>' : '') + '</header>';

    out += '<section class="sum"><h2>Ringkasan Profil</h2><p>' + h(prof.summary) + '</p></section>';

    var secs = {
      exp: function () {
        var j = jobHtml('lazada', prof, short) + jobHtml('kpu', prof, short);
        return j ? '<section><h2>Pengalaman Kerja</h2>' + j + '</section>' : '';
      },
      org: function () {
        var j = jobHtml('imk', prof, short);
        return j ? '<section><h2>Pengalaman Organisasi</h2>' + j + '</section>' : '';
      },
      edu: function () {
        var e = C.edu;
        return '<section><h2>Pendidikan</h2><div class="item"><div class="row"><b>' + h(e.degree) + ', ' + h(e.school) + '</b><span>' + h(e.period) + '</span></div><div class="org">' + h(e.note) + '</div></div></section>';
      },
      proj: function () {
        if (!prof.projects.length) return '';
        var list = prof.projects.slice(0, short ? 2 : 9).map(function (id) {
          var p = C.projects[id];
          var link = (S.links && p.url) ? ' <span class="u"><a href="' + h(p.url) + '">' + h(p.url.replace(/^https?:\/\//, '')) + '</a></span>' : '';
          return '<div class="item"><div class="row"><b>' + h(p.name) + '</b></div><div class="org">' + h(p.stack) + link + '</div>' +
            '<ul><li>' + h(short ? p.short : p.line) + '</li></ul></div>';
        }).join('');
        return '<section><h2>Proyek</h2>' + list + '</section>';
      },
      skill: function () {
        var g = pickSkills(prof, an.matched, short);
        return '<section><h2>Keterampilan</h2>' + g.map(function (x) {
          return '<p class="sk"><b>' + h(x.name) + ':</b> ' + x.items.map(h).join(', ') + '</p>';
        }).join('') + '</section>';
      },
      cert: function () {
        var ids = prof.certs.slice(0, short ? 4 : 9);
        return '<section><h2>Sertifikasi</h2><ul>' + ids.map(function (c) { return '<li>' + h(C.certs[c]) + '</li>'; }).join('') + '</ul></section>';
      },
      award: function () {
        return '<section><h2>Penghargaan</h2><ul>' + prof.awards.map(function (a) { return '<li>' + h(C.awards[a]) + '</li>'; }).join('') + '</ul></section>';
      }
    };
    /* Mode Ringkas: kalau lebih dari 1 halaman, buang bagian paling tidak penting satu per satu */
    var USABLE = (297 - 28) / 25.4 * 96, PAD = 2 * 14 / 25.4 * 96;
    var droppable = prof.sections.filter(function (s) { return ['org', 'proj', 'award'].indexOf(s) > -1; }).reverse();
    var drop = 0, dropped = [];
    $('cv').className = short ? 'short' : '';
    for (;;) {
      var body = '';
      prof.sections.forEach(function (s) { if (dropped.indexOf(s) < 0) body += secs[s](); });
      $('cv').innerHTML = out + body;
      var pg = Math.max(1, Math.ceil(($('cv').scrollHeight - PAD - 4) / USABLE));
      if (!short || pg <= 1 || drop >= droppable.length) break;
      dropped.push(droppable[drop++]);
    }

    /* judul dokumen = nama file PDF */
    var slug = function (s) { return s.replace(/[^A-Za-z0-9]+/g, '_').replace(/^_|_$/g, ''); };
    D.title = ['CV', 'Elyakim_Nahampun', slug(S.role.trim() || prof.file), slug(S.company)].filter(Boolean).join('_');

    if (!printOnly) {
      var sheet = $('cv');
      var pages = pg;
      var note = '<b>Perkiraan: ' + pages + ' halaman.</b>';
      if (pages > 2) note += ' Terlalu panjang. Pilih "Ringkas".';
      if (dropped.length) note += '<br><small>Agar muat 1 halaman, bagian ini tidak ditampilkan: ' + dropped.map(function (s) { return { org: 'Organisasi', proj: 'Proyek', award: 'Penghargaan' }[s]; }).join(', ') + '.</small>';
      $('pg').innerHTML = note;
      var r = '';
      if (S.jd.trim()) {
        r += an.matched.length ? '<p><b>Kata kunci cocok (sudah naik ke urutan depan):</b><br>' + an.matched.map(h).join(', ') + '</p>'
                               : '<p>Belum ada kata kunci lowongan yang cocok dengan datamu.</p>';
        if (an.warn.length) r += '<p class="w"><b>Diminta lowongan tapi tidak ada di datamu:</b><br>' + an.warn.map(h).join(', ') +
          '<br><small>Tidak dicantumkan. Tambahkan hanya jika memang kamu kuasai.</small></p>';
      }
      $('kw').innerHTML = r;
    }
  }

  /* ---------- UI builder ---------- */
  function save() { try { W.localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function sync() {
    $('p').value = S.p; $('role').value = S.role; $('company').value = S.company;
    $('len').value = S.len; $('jd').value = S.jd; $('links').checked = S.links;
  }
  function bind() {
    $('p').innerHTML = Object.keys(C.profiles).map(function (k) { return '<option value="' + k + '">' + h(C.profiles[k].label) + '</option>'; }).join('');
    sync();
    ['p', 'role', 'company', 'len', 'jd', 'links'].forEach(function (id) {
      var el = $(id);
      el.addEventListener(el.type === 'checkbox' ? 'change' : 'input', function () {
        S[id] = el.type === 'checkbox' ? el.checked : el.value;
        save(); render();
      });
    });
    $('dl').addEventListener('click', function () { W.print(); });
  }

  if (printOnly) {
    D.body.classList.add('print-only');
    render();
    $('dl2').addEventListener('click', function () { W.print(); });
    var go = function () { setTimeout(function () { try { W.print(); } catch (e) {} }, 350); };
    if (D.fonts && D.fonts.ready) D.fonts.ready.then(go); else go();
  } else {
    bind(); render();
  }
})();
