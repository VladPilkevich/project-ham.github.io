// PRELOADER

let prevLoad = document.getElementsByClassName('areaForLoader')
document.getElementsByTagName('body')[0].style.overflow = 'hidden';
setTimeout(() => {
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
    prevLoad[0].setAttribute('hidden', true);
}, 1500);


// FIRST TABS (SECTION:  Our Services)


const tabs = document.querySelector('.tabs');
const text = document.querySelectorAll('.tabs-content li');
tabs.addEventListener('click', function (event) {
    event.target.closest('ul').querySelector('.active').classList.remove('active'); 
    event.target.classList.add('active');
    const target = event.target.dataset.tabName;
    text.forEach(item => {
        item.setAttribute('hidden', true);
        if (target === item.dataset.tabText) {
            item.removeAttribute('hidden');
        }
    })
})


// SECOND TABS (SECTION:  Our Amazing Work)

const tabsTwo = document.querySelector('.amazing-work-ul');
const textTwo = document.querySelectorAll('.am-work-ul-content li');
tabsTwo.addEventListener('click', function (event) {
    event.target.closest('ul').querySelector('.amazing-work-li-active').classList.remove('amazing-work-li-active');
    event.target.classList.add('amazing-work-li-active');
    const target = event.target.dataset.filterImgs;
    if (target === 'all') {
        textTwo.forEach(item => {
            item.removeAttribute('hidden');
        });
    } else {
        textTwo.forEach(item => {
            item.setAttribute('hidden', true);
            if (target === item.dataset.imgs) {
                item.removeAttribute('hidden');
            }
        })
    }
    
})


// LOAD NEW IMGS (SECTION:  Our Amazing Work)

const loaderImg = document.querySelector('#showmore');
let svg = document.getElementsByClassName('svg');
const loadMoreTwo = document.querySelector('#showmore2');

loaderImg.addEventListener('click', function () {
    loaderImg.style.display = 'none';
    svg[0].style.opacity = '1';
    setTimeout(() => {
        svg[0].style.opacity = '0';
        let items = document.querySelectorAll('.imgss');
        items.forEach(element => {
            element.classList.remove('imgss');
        });
        loadMoreTwo.style.display = 'block';
    }, 2000)
})


// LOAD NEW NEW IMGS (SECTION:  Our Amazing Work)

loadMoreTwo.addEventListener('click', function () {
    loadMoreTwo.style.opacity = '0';
    svg[0].style.opacity = '1';
    setTimeout(() => {
        svg[0].style.display = 'none';
        let items = document.querySelectorAll('.imgsss');
        items.forEach(element => {
            element.classList.remove('imgsss');
        });
    }, 2000);
})


// LOAD NEW IMGS (SECTION:  Our Gallery of best images)

const btnGrid = document.querySelector('#load-more-img-end');
let svgGrid = document.getElementsByClassName('load-btn-grid');
btnGrid.addEventListener('click', function () {
    btnGrid.style.opacity = '0';
    svgGrid[0].style.opacity = '1';
    setTimeout(() => {
        svgGrid[0].style.display = 'none';
        let noGrid = document.querySelectorAll('.grid-none');
        noGrid[0].classList.remove('grid-none');
    }, 2000);
})




//   -------------------------   jOuery   ---------------------------------



// SLIDER (SECTION:  What People Say About theHam)

$('.slider').slick({
    nextArrow: document.querySelector('#my-arrow-next'),
    prevArrow: document.querySelector('#my-arrow-prev'),
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 5000,
});



// BUTTON UP (TO-TOP)

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() >= 1000) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
        });
        $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0}, 2000);
    });
});
