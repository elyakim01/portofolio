(function () {
  'use strict';
  var D = document, W = window, L = W.LET, P = L.person;
  function $(id) { return D.getElementById(id); }
  function h(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  var KEY = 'surat-builder-v1';
  var MON = { id: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
              en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] };
  function today(lang) { var d = new Date(); return lang === 'en' ? MON.en[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear() : d.getDate() + ' ' + MON.id[d.getMonth()] + ' ' + d.getFullYear(); }

  var S = { p: 'umum', role: '', company: '', to: '', place: '', src: '', city: '', date: '', lang: 'id', attx: '', atts: { cv: true, ijazah: true, transkrip: false, ktp: false, kk: false, skck: false, sehat: false, sertifikat: true }, note: '', data: true, will: false, honest: false, sig: true };
  try { var sv = JSON.parse(W.localStorage.getItem(KEY) || 'null'); if (sv) for (var k in sv) if (k in S) S[k] = sv[k]; } catch (e) {}
  var AT = [['cv', 'CV', 'my CV'], ['ijazah', 'ijazah S1', 'bachelor\'s diploma'], ['transkrip', 'transkrip nilai', 'academic transcript'], ['ktp', 'KTP', 'ID card (KTP)'],
    ['kk', 'Kartu Keluarga (KK)', 'family card (KK)'], ['skck', 'SKCK', 'police clearance certificate (SKCK)'], ['sehat', 'surat keterangan sehat', 'health certificate'], ['sertifikat', 'sertifikat pendukung', 'supporting certificates']];
  function joinList(a, en) { if (a.length < 2) return a.join(''); return a.slice(0, -1).join(', ') + (en ? ', and ' : ', dan ') + a[a.length - 1]; }
  S.to = ''; S.date = today(S.lang);

  var T = {
    id: { to: 'HRD / Tim Rekrutmen', city: 'Deli Serdang' },
    en: { to: 'HR / Recruitment Team', city: 'Deli Serdang' }
  };

  function render() {
    var en = S.lang === 'en', t = T[S.lang], pr = S.p;
    var role = S.role.trim() || (en ? L.roleEn[pr] : L.role[pr]);
    var co = S.company.trim(), place = S.place.trim(), to = S.to.trim() || t.to, city = S.city.trim() || t.city;
    var chosen = AT.filter(function (x) { return S.atts[x[0]]; }).map(function (x) { return en ? x[2] : x[1]; });
    S.attx.split(',').forEach(function (x) { x = x.trim(); if (x) chosen.push(h(x)); });
    var att = chosen.length ? joinList(chosen, en) : (en ? 'my application documents' : 'berkas lamaran saya'), src = S.src.trim();
    var o = '';
    o += '<p class="r">' + h(city) + ', ' + h(S.date) + '</p>';
    o += '<table class="meta"><tr><td>' + (en ? 'Subject' : 'Hal') + '</td><td>:</td><td><b>' + (en ? 'Job Application, ' : 'Lamaran Pekerjaan, ') + h(role) +
      (place ? (en ? ' (' + h(place) + ' placement)' : ' (Penempatan ' + h(place) + ')') : '') + '</b></td></tr>' +
      '<tr><td>' + (en ? 'Attachment' : 'Lampiran') + '</td><td>:</td><td>' + (en ? '1 (one) PDF file' : '1 (satu) berkas PDF') + '</td></tr></table>';
    o += '<p class="t0">' + (en ? 'To:' : 'Kepada Yth.') + '</p><p class="t0"><b>' + h(to) + '</b></p>' + (co ? '<p class="t0"><b>' + h(co) + '</b></p>' : '') + '<p>' + (en ? '' : 'di Tempat') + '</p>';
    o += '<p>' + (en ? 'Dear Sir/Madam,' : 'Dengan hormat,') + '</p>';

    var first;
    if (en) {
      first = (co ? 'Based on the vacancy information published' + (src ? ' via ' + h(src) : '') + ', ' + h(co) + ' is hiring for the position of ' + h(role) + (place ? ' based in ' + h(place) : '') + '. I am writing to apply for this position.'
                  : 'I am writing to apply for the position of ' + h(role) + (place ? ' based in ' + h(place) : '') + '.');
      if (S.data) first += ' My details are as follows:';
    } else {
      first = (co ? 'Berdasarkan informasi lowongan yang dipublikasikan' + (src ? ' melalui ' + h(src) : '') + ', ' + h(co) + ' membuka kesempatan untuk posisi ' + h(role) + (place ? ' dengan penempatan di ' + h(place) : '') + '. Melalui surat ini, saya mengajukan diri untuk posisi tersebut.'
                  : 'Melalui surat ini, saya mengajukan lamaran untuk posisi ' + h(role) + (place ? ' dengan penempatan di ' + h(place) : '') + '.');
      if (S.data) first += ' Adapun data diri saya adalah sebagai berikut:';
    }
    o += '<p>' + first + '</p>';

    if (S.data) {
      var rows = en
        ? [['Name', P.name], ['Place/Date of Birth', P.ttl.replace('Agustus', 'August').replace('Patumbak, 24 August 2004', 'Patumbak, August 24, 2004')], ['Education', P.edu.en], ['Address', P.address.en], ['Phone/WhatsApp', P.phone], ['Email', P.email]]
        : [['Nama', P.name], ['Tempat/Tanggal Lahir', P.ttl], ['Pendidikan Terakhir', P.edu.id], ['Alamat', P.address.id], ['Telepon/WhatsApp', P.phone], ['Email', P.email]];
      rows.push(['LinkedIn', '<a href="' + h(P.linkedinUrl) + '">' + h(P.linkedin) + '</a>'], [en ? 'Portfolio' : 'Portofolio', '<a href="' + h(P.siteUrl) + '">' + h(P.site) + '</a>']);
      o += '<table>' + rows.map(function (r) {
        return '<tr><td>' + r[0] + '</td><td>:</td><td>' + (/^<a /.test(r[1]) || r[0] === 'Name' || r[0] === 'Nama' ? r[1] : h(r[1])) + '</td></tr>';
      }).join('') + '</table>';
    }

    var fit = L.fit[pr][S.lang].slice();
    if (S.honest) {
      fit[fit.length - 1] += en ? ' I do not yet have direct experience as ' + h(role) + ', but I am ready to learn quickly and carefully.'
                                : ' Saya memang belum memiliki pengalaman langsung sebagai ' + h(role) + ', namun saya siap belajar dengan sungguh-sungguh.';
    }
    fit.forEach(function (x) { o += '<p>' + x.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</p>'; });
    if (S.note.trim()) o += '<p>' + h(S.note.trim()) + '</p>';
    if (S.will && place) o += '<p>' + (en ? 'I am willing to be placed in ' + h(place) + '.' : 'Saya bersedia ditempatkan di ' + h(place) + '.') + '</p>';
    o += '<p>' + (en ? 'For your consideration, I have attached ' + h(att) + '. I would welcome the opportunity to take part in the next stage of the selection process. Thank you for your time and consideration.'
                     : 'Sebagai bahan pertimbangan, saya lampirkan ' + h(att) + '. Besar harapan saya untuk dapat mengikuti proses seleksi selanjutnya. Atas perhatian Bapak/Ibu, saya ucapkan terima kasih.') + '</p>';
    o += '<p class="t0">' + (en ? 'Sincerely,' : 'Hormat saya,') + '</p>';
    o += S.sig ? '<img class="sg" id="sgimg" src="img/tanda-tangan.png" alt="" onerror="this.className=\'sg sgb\';this.removeAttribute(\'src\');this.style.visibility=\'hidden\'">' : '<div style="height:50pt"></div>';
    o += '<p><b>' + h(P.name) + '</b></p>';

    var sr = $('sr'); sr.innerHTML = o; sr.style.fontSize = '';
    /* muat 1 halaman: kecilkan huruf bertahap */
    var USABLE = (297 - 30) / 25.4 * 96, PAD = (18 + 14) / 25.4 * 96, fs = 11;
    while (fs > 9.5 && sr.scrollHeight - PAD > USABLE) { fs -= 0.5; sr.style.fontSize = fs + 'pt'; }
    var over = sr.scrollHeight - PAD > USABLE;
    D.title = ['Surat_Lamaran', 'Elyakim_Nahampun', role, co, en ? 'EN' : ''].map(function (s) { return String(s).trim().replace(/[^A-Za-z0-9]+/g, '_').replace(/^_|_$/g, ''); }).filter(Boolean).join('_');
    D.documentElement.lang = S.lang;
    $('pg').innerHTML = over ? '<p class="w">Surat lebih dari 1 halaman. Matikan "Sertakan data diri" atau perpendek kalimat tambahan.</p>' : '<b>Muat 1 halaman.</b>' + (fs < 11 ? ' <small>Huruf dikecilkan ke ' + fs + 'pt.</small>' : '');
  }

  function save() { try { W.localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  var ids = ['role', 'company', 'place', 'src', 'city', 'lang', 'attx', 'note', 'data', 'will', 'honest', 'sig'];
  S.p = 'umum';
  ids.forEach(function (id) {
    var el = $(id);
    if (el.type === 'checkbox') el.checked = S[id]; else el.value = S[id];
    el.addEventListener(el.type === 'checkbox' || el.tagName === 'SELECT' ? 'change' : 'input', function () {
      S[id] = el.type === 'checkbox' ? el.checked : el.value;
      if (id === 'lang') S.date = today(S.lang);
      save(); render();
    });
  });
  $('atts').innerHTML = AT.map(function (x) { return '<label class="chk"><input type="checkbox" data-att="' + x[0] + '"' + (S.atts[x[0]] ? ' checked' : '') + '> ' + x[1].charAt(0).toUpperCase() + x[1].slice(1) + '</label>'; }).join('');
  [].slice.call(D.querySelectorAll('[data-att]')).forEach(function (el) {
    el.addEventListener('change', function () { S.atts[el.dataset.att] = el.checked; save(); render(); });
  });
  $('dl').addEventListener('click', function () { W.print(); });
  render();
})();
