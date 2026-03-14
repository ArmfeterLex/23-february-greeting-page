var isHeaderWhite = false;
var originalBgColor = '#8b9a6e';
var photoImages = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
var slideInterval;
var currentPreviewIndex = 0;

function init() {
    var da = new Date();
    var month = new Array("января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря");
    var d = da.getDate() + " " + month[da.getMonth()] + " " + da.getFullYear();
    document.getElementById("currentDate").innerHTML = "Сегодня: " + d;
}

function toggleHeaderColor() {
    var el = document.getElementById('headerTitle');
    isHeaderWhite = !isHeaderWhite;
    
    if(isHeaderWhite) {
        el.style.color = 'white';
        el.style.textShadow = '0 0 8px rgba(0,0,0,0.8)';
        document.body.style.backgroundColor = '#2d5a27';
    } else {
        el.style.color = '#b8860b';
        el.style.textShadow = '2px 2px 4px rgba(0,0,0,0.2)';
        document.body.style.backgroundColor = originalBgColor;
    }
}

function m_overHull() {
    var hull = document.getElementById('tankHull');
    hull.style.backgroundColor = '#5e3a1c';
}

function m_outHull() {
    var hull = document.getElementById('tankHull');
    hull.style.backgroundColor = '#2d5a27';
}

function changeTankColor() {
    var turret = document.getElementById('turretPart');
    var colors = ['#b8860b', '#8b4513', '#cd853f', '#6b8e23', '#556b2f', '#9c7c38'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    turret.style.backgroundColor = randomColor;
}

function validateForm(event) {
    event.preventDefault();
    
    var name = document.getElementById('userName').value.trim();
    
    if(name == "") {
        alert("Введите имя!");
        document.getElementById('userName').focus();
        return false;
    }
    
    var select = document.getElementById('troopsSelect');
    var troopsText = select.options[select.selectedIndex].text;
    
    showGreeting(name, troopsText);
    return false;
}

function showGreeting(name, troops) {
    var resultCard = document.getElementById('resultCard');
    var greetingText = document.getElementById('greetingText');
    var troopsGreeting = document.getElementById('troopsGreeting');
    
    var troopsLower = troops.toLowerCase();
    var troopsAddress = "";
    
    if(troopsLower == "танкист") troopsAddress = "Товарищ танкист";
    else if(troopsLower == "летчик") troopsAddress = "Товарищ летчик";
    else if(troopsLower == "моряк") troopsAddress = "Товарищ моряк";
    else if(troopsLower == "десантник") troopsAddress = "гвардии товарищ";
    else if(troopsLower == "пехотинец") troopsAddress = "Товарищ пехотинец";
    else if(troopsLower == "пограничник") troopsAddress = "Товарищ пограничник";
    else if(troopsLower == "ракетчик") troopsAddress = "Товарищ ракетчик";
    else troopsAddress = "Товарищ";
    
    greetingText.innerHTML = troopsAddress + " " + name + "!";
    troopsGreeting.innerHTML = troops;
    
    resultCard.classList.remove('hidden');
    
    document.body.style.backgroundColor = '#a0b28a';
    
    var header = document.getElementById('headerTitle');
    if(header.style.color == 'white') {
        header.style.color = '#b8860b';
        isHeaderWhite = false;
    }
    
    setTimeout(function() {
        document.body.style.backgroundColor = originalBgColor;
    }, 3000);
    
    document.getElementById('userName').value = '';
}

function closeGreeting() {
    document.getElementById('resultCard').classList.add('hidden');
    if(slideInterval) clearInterval(slideInterval);
}

function showPhoto(index) {
    document.getElementById('displayedPhoto').src = 'img/' + photoImages[index];
}

function zoomPhoto() {
    document.getElementById('photoContainer').style.transform = 'scale(1.05)';
}

function normalPhoto() {
    document.getElementById('photoContainer').style.transform = 'scale(1)';
}

function startSlideshow() {
    if(slideInterval) clearInterval(slideInterval);
    
    slideInterval = setInterval(function() {
        currentPreviewIndex++;
        if(currentPreviewIndex >= photoImages.length) {
            currentPreviewIndex = 0;
        }
        document.getElementById('sliderPreview').src = 'img/' + photoImages[currentPreviewIndex];
    }, 1500);
}

function stopSlideshow() {
    if(slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
}

function nextSlideManually() {
    currentPreviewIndex++;
    if(currentPreviewIndex >= photoImages.length) {
        currentPreviewIndex = 0;
    }
    document.getElementById('sliderPreview').src = 'img/' + photoImages[currentPreviewIndex];
}

function changeResultColor() {
    var box = document.getElementById('resultImage');
    var colors = ['#b8860b', '#2d5a27', '#8b4513', '#6b8e23', '#5e3a1c', '#9c7c38'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
}

init();