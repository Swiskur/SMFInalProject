var integritybutton = document.getElementById('integrity');
var legalbutton = document.getElementById('legal');
var posbutton = document.getElementById('pos');
var nbutton = document.getElementById('n');
var psychbutton = document.getElementById('psych');
var youthbutton = document.getElementById('youth');
var integrityinfo = document.getElementById('integrityin');
var legalinfo = document.getElementById('legalin');
var posinfo = document.getElementById('posin');
var ninfo = document.getElementById('nin');
var psychinfo = document.getElementById('psychin');
var youthinfo = document.getElementById('youthin');

integritybutton.addEventListener('click', function() {
  integrityinfo.style.display = 'block';
  legalinfo.style.display = 'none';
  posinfo.style.display = 'none';
  ninfo.style.display = 'none';
  psychinfo.style.display = 'none';
  youthinfo.style.display = 'none';
});

legalbutton.addEventListener('click', function() {
    integrityinfo.style.display = 'none';
    legalinfo.style.display = 'block';
    posinfo.style.display = 'none';
    ninfo.style.display = 'none';
    psychinfo.style.display = 'none';
    youthinfo.style.display = 'none';
});

posbutton.addEventListener('click', function() {
    integrityinfo.style.display = 'none';
    legalinfo.style.display = 'none';
    posinfo.style.display = 'block';
    ninfo.style.display = 'none';
    psychinfo.style.display = 'none';
    youthinfo.style.display = 'none';
});
nbutton.addEventListener('click', function() {
    integrityinfo.style.display = 'none';
    legalinfo.style.display = 'none';
    posinfo.style.display = 'none';
    ninfo.style.display = 'block';
    psychinfo.style.display = 'none';
    youthinfo.style.display = 'none';
});
psychbutton.addEventListener('click', function() {
    integrityinfo.style.display = 'none';
    legalinfo.style.display = 'none';
    posinfo.style.display = 'none';
    ninfo.style.display = 'none';
    psychinfo.style.display = 'block';
    youthinfo.style.display = 'none';
});

youthbutton.addEventListener('click', function() {
    integrityinfo.style.display = 'none';
    legalinfo.style.display = 'none';
    posinfo.style.display = 'none';
    ninfo.style.display = 'none';
    psychinfo.style.display = 'none';
    youthinfo.style.display = 'block';
});
