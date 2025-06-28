/**
 * Content Loader for BizLand Template
 * Loads content from JSON file and populates HTML elements
 */

class ContentLoader {
    constructor() {
        this.content = null;
        this.init();
    }

    async init() {
        try {
            await this.loadContent();
            this.populateContent();
        } catch (error) {
            console.error('Error loading content:', error);
        }
    }

    async loadContent() {
        const response = await fetch('assets/data/content.json');
        this.content = await response.json();
    }

    populateContent() {
        this.updateSiteInfo();
        this.updateNavigation();
        this.updateHero();
        this.updateFeaturedServices();
        this.updateAbout();
        this.updateSkills();
        this.updateStats();
        this.updateServices();
        this.updateTestimonials();
        this.updatePortfolio();
        this.updateTeam();
        this.updatePricing();
        this.updateFAQ();
        this.updateContact();
        this.updateFooter();
    }

    updateSiteInfo() {
        // Update page title
        document.title = `${this.content.site.title} - ${this.content.site.description}`;
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', this.content.site.description);
        }

        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', this.content.site.keywords);
        }

        // Update contact info in header
        const contactEmail = document.querySelector('.contact-info a[href^="mailto:"]');
        if (contactEmail) {
            contactEmail.href = `mailto:${this.content.site.contact.email}`;
            contactEmail.textContent = this.content.site.contact.email;
        }

        const contactPhone = document.querySelector('.contact-info span');
        if (contactPhone) {
            contactPhone.textContent = this.content.site.contact.phone;
        }

        // Update logo/sitename
        const sitenames = document.querySelectorAll('.sitename');
        sitenames.forEach(element => {
            element.textContent = this.content.site.title;
        });
    }

    updateNavigation() {
        const navMenu = document.querySelector('#navmenu ul');
        if (!navMenu) return;

        // Clear existing menu items (except dropdown)
        const existingItems = navMenu.querySelectorAll('li:not(.dropdown)');
        existingItems.forEach(item => item.remove());

        // Add new menu items
        this.content.navigation.menu.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${item.href}" ${item.active ? 'class="active"' : ''}>${item.text}</a>`;
            navMenu.appendChild(li);
        });
    }

    updateHero() {
        const heroTitle = document.querySelector('#hero h1');
        if (heroTitle) {
            heroTitle.innerHTML = `${this.content.hero.title} <span>${this.content.hero.highlight}</span>`;
        }

        const heroSubtitle = document.querySelector('#hero p');
        if (heroSubtitle) {
            heroSubtitle.textContent = this.content.hero.subtitle;
        }

        const getStartedBtn = document.querySelector('#hero .btn-get-started');
        if (getStartedBtn) {
            getStartedBtn.textContent = this.content.hero.buttons.primary;
        }

        const watchVideoBtn = document.querySelector('#hero .btn-watch-video span');
        if (watchVideoBtn) {
            watchVideoBtn.textContent = this.content.hero.buttons.secondary;
        }
    }

    updateFeaturedServices() {
        const serviceItems = document.querySelectorAll('#featured-services .service-item');
        this.content.featuredServices.services.forEach((service, index) => {
            if (serviceItems[index]) {
                const icon = serviceItems[index].querySelector('.icon i');
                const title = serviceItems[index].querySelector('h4 a');
                const description = serviceItems[index].querySelector('p');

                if (icon) icon.className = `bi ${service.icon} icon`;
                if (title) title.textContent = service.title;
                if (description) description.textContent = service.description;
            }
        });
    }

    updateAbout() {
        const aboutTitle = document.querySelector('#about .section-title h2');
        if (aboutTitle) aboutTitle.textContent = this.content.about.title;

        const aboutSubtitle = document.querySelector('#about .section-title p');
        if (aboutSubtitle) {
            aboutSubtitle.innerHTML = `<span>${this.content.about.subtitle}</span> <span class="description-title">${this.content.about.highlight}</span>`;
        }

        const mainHeading = document.querySelector('#about h3');
        if (mainHeading) mainHeading.textContent = this.content.about.mainHeading;

        const introText = document.querySelector('#about .fst-italic');
        if (introText) introText.textContent = this.content.about.introText;

        const features = document.querySelectorAll('#about ul li');
        this.content.about.features.forEach((feature, index) => {
            if (features[index]) {
                const icon = features[index].querySelector('i');
                const title = features[index].querySelector('h4');
                const description = features[index].querySelector('p');

                if (icon) icon.className = `bi ${feature.icon}`;
                if (title) title.textContent = feature.title;
                if (description) description.textContent = feature.description;
            }
        });

        const conclusion = document.querySelector('#about .about-content p:last-child');
        if (conclusion) conclusion.textContent = this.content.about.conclusion;
    }

    updateSkills() {
        const skillItems = document.querySelectorAll('#skills .progress');
        this.content.skills.skills.forEach((skill, index) => {
            if (skillItems[index]) {
                const skillName = skillItems[index].querySelector('.skill span');
                const skillValue = skillItems[index].querySelector('.skill i');
                const progressBar = skillItems[index].querySelector('.progress-bar');

                if (skillName) skillName.textContent = skill.name;
                if (skillValue) skillValue.textContent = `${skill.percentage}%`;
                if (progressBar) {
                    progressBar.style.width = `${skill.percentage}%`;
                    progressBar.setAttribute('aria-valuenow', skill.percentage);
                }
            }
        });
    }

    updateStats() {
        const statItems = document.querySelectorAll('#stats .col-lg-3');
        this.content.stats.stats.forEach((stat, index) => {
            if (statItems[index]) {
                const icon = statItems[index].querySelector('i');
                const number = statItems[index].querySelector('.purecounter');
                const label = statItems[index].querySelector('p');

                if (icon) icon.className = `bi ${stat.icon}`;
                if (number) {
                    number.setAttribute('data-purecounter-end', stat.number);
                    number.textContent = stat.number;
                }
                if (label) label.textContent = stat.label;
            }
        });
    }

    updateServices() {
        const servicesTitle = document.querySelector('#services .section-title h2');
        if (servicesTitle) servicesTitle.textContent = this.content.services.title;

        const servicesSubtitle = document.querySelector('#services .section-title p');
        if (servicesSubtitle) {
            servicesSubtitle.innerHTML = `<span>${this.content.services.subtitle}</span> <span class="description-title">${this.content.services.highlight}</span>`;
        }

        const serviceItems = document.querySelectorAll('#services .service-item');
        this.content.services.services.forEach((service, index) => {
            if (serviceItems[index]) {
                const icon = serviceItems[index].querySelector('.icon i');
                const title = serviceItems[index].querySelector('h3');
                const description = serviceItems[index].querySelector('p');

                if (icon) icon.className = `bi ${service.icon}`;
                if (title) title.textContent = service.title;
                if (description) description.textContent = service.description;
            }
        });
    }

    updateTestimonials() {
        const testimonialSlides = document.querySelectorAll('#testimonials .swiper-slide');
        this.content.testimonials.testimonials.forEach((testimonial, index) => {
            if (testimonialSlides[index]) {
                const img = testimonialSlides[index].querySelector('.testimonial-img');
                const name = testimonialSlides[index].querySelector('h3');
                const position = testimonialSlides[index].querySelector('h4');
                const text = testimonialSlides[index].querySelector('p span');

                if (img) img.src = testimonial.image;
                if (name) name.textContent = testimonial.name;
                if (position) position.textContent = testimonial.position;
                if (text) text.textContent = testimonial.text;
            }
        });
    }

    updatePortfolio() {
        const portfolioTitle = document.querySelector('#portfolio .section-title h2');
        if (portfolioTitle) portfolioTitle.textContent = this.content.portfolio.title;

        const portfolioSubtitle = document.querySelector('#portfolio .section-title p');
        if (portfolioSubtitle) {
            portfolioSubtitle.innerHTML = `<span>${this.content.portfolio.subtitle}</span> <span class="description-title">${this.content.portfolio.highlight}</span>`;
        }

        // Update filters
        const filterItems = document.querySelectorAll('#portfolio .portfolio-filters li');
        this.content.portfolio.filters.forEach((filter, index) => {
            if (filterItems[index]) {
                filterItems[index].textContent = filter.name;
                filterItems[index].setAttribute('data-filter', filter.filter);
                if (filter.active) filterItems[index].classList.add('filter-active');
            }
        });

        // Update portfolio items
        const portfolioItems = document.querySelectorAll('#portfolio .portfolio-item');
        this.content.portfolio.items.forEach((item, index) => {
            if (portfolioItems[index]) {
                const img = portfolioItems[index].querySelector('img');
                const title = portfolioItems[index].querySelector('.portfolio-info h4');
                const description = portfolioItems[index].querySelector('.portfolio-info p');

                if (img) img.src = item.image;
                if (title) title.textContent = item.title;
                if (description) description.textContent = item.description;
                portfolioItems[index].classList.add(item.category);
            }
        });
    }

    updateTeam() {
        const teamTitle = document.querySelector('#team .section-title h2');
        if (teamTitle) teamTitle.textContent = this.content.team.title;

        const teamSubtitle = document.querySelector('#team .section-title p');
        if (teamSubtitle) {
            teamSubtitle.innerHTML = `<span>${this.content.team.subtitle}</span> <span class="description-title">${this.content.team.highlight}</span>`;
        }

        const teamMembers = document.querySelectorAll('#team .team-member');
        this.content.team.members.forEach((member, index) => {
            if (teamMembers[index]) {
                const img = teamMembers[index].querySelector('.member-img img');
                const name = teamMembers[index].querySelector('.member-info h4');
                const position = teamMembers[index].querySelector('.member-info span');

                if (img) img.src = member.image;
                if (name) name.textContent = member.name;
                if (position) position.textContent = member.position;
            }
        });
    }

    updatePricing() {
        const pricingTitle = document.querySelector('#pricing .section-title h2');
        if (pricingTitle) pricingTitle.textContent = this.content.pricing.title;

        const pricingSubtitle = document.querySelector('#pricing .section-title p');
        if (pricingSubtitle) {
            pricingSubtitle.innerHTML = `<span>${this.content.pricing.subtitle}</span> <span class="description-title">${this.content.pricing.highlight}</span>`;
        }

        const pricingItems = document.querySelectorAll('#pricing .pricing-item');
        this.content.pricing.plans.forEach((plan, index) => {
            if (pricingItems[index]) {
                const name = pricingItems[index].querySelector('h3');
                const price = pricingItems[index].querySelector('h4');
                const features = pricingItems[index].querySelectorAll('ul li');
                const button = pricingItems[index].querySelector('.btn-buy');

                if (name) name.textContent = plan.name;
                if (price) {
                    price.innerHTML = `<sup>$</sup>${plan.price}<span> / ${plan.period}</span>`;
                }
                if (button) button.textContent = 'Buy Now';

                // Update features
                features.forEach((feature, featureIndex) => {
                    if (plan.features[featureIndex]) {
                        feature.textContent = plan.features[featureIndex];
                        if (plan.excluded.includes(featureIndex)) {
                            feature.classList.add('na');
                        } else {
                            feature.classList.remove('na');
                        }
                    }
                });

                // Update featured status
                if (plan.featured) {
                    pricingItems[index].classList.add('featured');
                } else {
                    pricingItems[index].classList.remove('featured');
                }

                // Update advanced badge
                if (plan.advanced) {
                    const advancedBadge = pricingItems[index].querySelector('.advanced');
                    if (!advancedBadge) {
                        const badge = document.createElement('span');
                        badge.className = 'advanced';
                        badge.textContent = 'Advanced';
                        pricingItems[index].insertBefore(badge, pricingItems[index].firstChild);
                    }
                }
            }
        });
    }

    updateFAQ() {
        const faqTitle = document.querySelector('#faq .section-title h2');
        if (faqTitle) faqTitle.textContent = this.content.faq.title;

        const faqSubtitle = document.querySelector('#faq .section-title p');
        if (faqSubtitle) {
            faqSubtitle.innerHTML = `<span>${this.content.faq.subtitle}</span> <span class="description-title">${this.content.faq.highlight}</span>`;
        }

        const faqItems = document.querySelectorAll('#faq .faq-item');
        this.content.faq.items.forEach((item, index) => {
            if (faqItems[index]) {
                const question = faqItems[index].querySelector('h3');
                const answer = faqItems[index].querySelector('.faq-content p');

                if (question) question.textContent = item.question;
                if (answer) answer.textContent = item.answer;

                if (item.active) {
                    faqItems[index].classList.add('faq-active');
                } else {
                    faqItems[index].classList.remove('faq-active');
                }
            }
        });
    }

    updateContact() {
        const contactTitle = document.querySelector('#contact .section-title h2');
        if (contactTitle) contactTitle.textContent = this.content.contact.title;

        const contactSubtitle = document.querySelector('#contact .section-title p');
        if (contactSubtitle) {
            contactSubtitle.innerHTML = `<span>${this.content.contact.subtitle}</span> <span class="description-title">${this.content.contact.highlight}</span>`;
        }

        // Update contact info
        const addressInfo = document.querySelector('#contact .info-item:nth-child(1)');
        if (addressInfo) {
            const title = addressInfo.querySelector('h3');
            const text = addressInfo.querySelector('p');
            if (title) title.textContent = this.content.contact.info.address.title;
            if (text) text.textContent = this.content.contact.info.address.text;
        }

        const phoneInfo = document.querySelector('#contact .info-item:nth-child(2)');
        if (phoneInfo) {
            const title = phoneInfo.querySelector('h3');
            const text = phoneInfo.querySelector('p');
            if (title) title.textContent = this.content.contact.info.phone.title;
            if (text) text.textContent = this.content.contact.info.phone.text;
        }

        const emailInfo = document.querySelector('#contact .info-item:nth-child(3)');
        if (emailInfo) {
            const title = emailInfo.querySelector('h3');
            const text = emailInfo.querySelector('p');
            if (title) title.textContent = this.content.contact.info.email.title;
            if (text) text.textContent = this.content.contact.info.email.text;
        }

        // Update form labels
        const nameLabel = document.querySelector('#contact label[for="name-field"]');
        if (nameLabel) nameLabel.textContent = this.content.contact.form.name;

        const emailLabel = document.querySelector('#contact label[for="email-field"]');
        if (emailLabel) emailLabel.textContent = this.content.contact.form.email;

        const subjectLabel = document.querySelector('#contact label[for="subject-field"]');
        if (subjectLabel) subjectLabel.textContent = this.content.contact.form.subject;

        const messageLabel = document.querySelector('#contact label[for="message-field"]');
        if (messageLabel) messageLabel.textContent = this.content.contact.form.message;

        const submitBtn = document.querySelector('#contact button[type="submit"]');
        if (submitBtn) submitBtn.textContent = this.content.contact.form.submit;
    }

    updateFooter() {
        // Update newsletter section
        const newsletterTitle = document.querySelector('.footer-newsletter h4');
        if (newsletterTitle) newsletterTitle.textContent = this.content.footer.newsletter.title;

        const newsletterDesc = document.querySelector('.footer-newsletter p');
        if (newsletterDesc) newsletterDesc.textContent = this.content.footer.newsletter.description;

        // Update footer about section
        const footerAbout = document.querySelector('.footer-about');
        if (footerAbout) {
            const address1 = footerAbout.querySelector('.footer-contact p:nth-child(1)');
            const address2 = footerAbout.querySelector('.footer-contact p:nth-child(2)');
            const phone = footerAbout.querySelector('.footer-contact p:nth-child(3) span');
            const email = footerAbout.querySelector('.footer-contact p:nth-child(4) span');

            if (address1) address1.textContent = this.content.footer.about.description;
            if (address2) address2.textContent = this.content.footer.about.address;
            if (phone) phone.textContent = this.content.footer.about.phone;
            if (email) email.textContent = this.content.footer.about.email;
        }

        // Update useful links
        const usefulLinks = document.querySelector('.footer-links:nth-child(2)');
        if (usefulLinks) {
            const title = usefulLinks.querySelector('h4');
            if (title) title.textContent = this.content.footer.links.useful.title;

            const links = usefulLinks.querySelectorAll('ul li');
            this.content.footer.links.useful.items.forEach((link, index) => {
                if (links[index]) {
                    const a = links[index].querySelector('a');
                    if (a) {
                        a.textContent = link.text;
                        a.href = link.href;
                    }
                }
            });
        }

        // Update services links
        const servicesLinks = document.querySelector('.footer-links:nth-child(3)');
        if (servicesLinks) {
            const title = servicesLinks.querySelector('h4');
            if (title) title.textContent = this.content.footer.links.services.title;

            const links = servicesLinks.querySelectorAll('ul li');
            this.content.footer.links.services.items.forEach((link, index) => {
                if (links[index]) {
                    const a = links[index].querySelector('a');
                    if (a) {
                        a.textContent = link.text;
                        a.href = link.href;
                    }
                }
            });
        }

        // Update social section
        const socialSection = document.querySelector('.footer-top .col-lg-4:last-child');
        if (socialSection) {
            const title = socialSection.querySelector('h4');
            const description = socialSection.querySelector('p');
            if (title) title.textContent = this.content.footer.social.title;
            if (description) description.textContent = this.content.footer.social.description;
        }

        // Update copyright
        const copyright = document.querySelector('.copyright p');
        if (copyright) {
            copyright.innerHTML = `© <span>${this.content.footer.copyright.text}</span> <strong class="px-1 sitename">${this.content.footer.copyright.company}</strong> <span>${this.content.footer.copyright.rights}</span>`;
        }

        const credits = document.querySelector('.credits');
        if (credits) {
            credits.innerHTML = `Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>`;
        }
    }
}

// Initialize content loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ContentLoader();
}); 