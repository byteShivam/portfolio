/*=============== SHOW SIDEBAR ===============*/
  
    document.addEventListener('DOMContentLoaded', function() {
        // Get all section links
        var sectionLinks = document.querySelectorAll('.nav__link');

        // Add click event listeners to section links
        sectionLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();

                // Remove active class from all section links
                sectionLinks.forEach(function(link) {
                    link.classList.remove('active-link');
                });

                // Add active class to the clicked section link
                this.classList.add('active-link');

                // Scroll to the corresponding section
                var target = this.getAttribute('href');
                var section = document.querySelector(target);
                section.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Add scroll event listener to activate sections when scrolling
        window.addEventListener('scroll', function() {
            var currentPosition = window.scrollY;

            sectionLinks.forEach(function(link) {
                var target = link.getAttribute('href');
                var section = document.querySelector(target);
                var sectionTop = section.offsetTop;
                var sectionHeight = section.offsetHeight;

                if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
                    // Add active class to the section link
                    link.classList.add('active-link');
                } else {
                    // Remove active class from the section link
                    link.classList.remove('active-link');
                }
            });
        });

        // Highlight the initial active section on page load
        var currentPosition = window.scrollY;

        sectionLinks.forEach(function(link) {
            var target = link.getAttribute('href');
            var section = document.querySelector(target);
            var sectionTop = section.offsetTop;
            var sectionHeight = section.offsetHeight;

            if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
                // Add active class to the section link
                link.classList.add('active-link');
            } else {
                // Remove active class from the section link
                link.classList.remove('active-link');
            }
        });
    });

/*===== SIDEBAR SHOW  =====*/

const navMenu = document.getElementById('sidebar');
const navToggle = document.getElementById('nav__toggle');
const navClose = document.getElementById('nav__close');

/*===== SIDEBAR SHOW =====*/

/* Validate If Constant Exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-sidebar');
  });
}

/* SIDEBAR HIDDEN ====*/

/* Validate If Constant Exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-sidebar');
  });
}



/*=============== SKILLS TABS ===============*/
  const tabs = document.querySelectorAll('[data-target]'),
        tabContent = document.querySelectorAll('[data-content]')

        tabs.forEach(tab =>{
        	tab.addEventListener("click", () =>{
        		const target = document.querySelector(tab.dataset.target)

             tabContent.forEach(tabContents =>{
             	tabContents.classList.remove('skills__active')
             })
               target.classList.add('skills__active')

                tabs.forEach(tab =>{
             	tab.classList.remove('skills__active')
             })
               tab.classList.add('skills__active')
        	})
        })



/*=============== MIXITUP FILTER PORTFOLIO ===============*/
  let mixerPortfolio = mixitup('.work__container', {
  selectors: {
  	target: '.work__card'
  },
  animation: {
  	duration: 300
  }
  });


/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
    linkWork.forEach(item => item.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach(item => item.addEventListener("click", activeWork));

/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work__button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup);


function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle span").textContent = portfolioItem.querySelector(".work__title").textContent;
  document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}


/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
  modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    });
  });
});


/*=============== SWIPER TESTIMONIAL ===============*/
// Get all the testimonial cards
const testimonialCards = document.querySelectorAll('.testimonial__card');

// Set the initial index and hide all testimonial cards
let currentTestimonialIndex = 0;
testimonialCards.forEach((card, index) => {
  if (index !== currentTestimonialIndex) {
    card.style.display = 'none';
  }
});

// Function to show the next testimonial card
function showNextTestimonial() {
  // Hide the current testimonial card
  testimonialCards[currentTestimonialIndex].style.display = 'none';

  // Update the index for the next testimonial card
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialCards.length;

  // Show the next testimonial card
  testimonialCards[currentTestimonialIndex].style.display = 'block';
}

// Automatically show the next testimonial every 5 seconds
setInterval(showNextTestimonial, 4000);


/*================contact form ================*/

    document.addEventListener('DOMContentLoaded', function() {
        var inputs = document.querySelectorAll('.input');
        inputs.forEach(function(input) {
            input.addEventListener('input', function() {
                var label = this.previousElementSibling;
                if (this.value !== '') {
                    label.style.display = 'none';
                } else {
                    label.style.display = 'block';
                }
            });
        });
    });


/*=========email js ==========*/


/*=============== INPUT ANIMATION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/
