
// Initialize EmailJS
(function () {
    emailjs.init("gBM0W-G2RDT8Qw7vq");
})();

// Modal Functionality
window.openModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
};

window.closeModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }
};

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.bento-box');

    // Grid Interactivity (Tilt)
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        boxes.forEach(box => {
            const rect = box.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const dist = Math.hypot(mouseX - centerX, mouseY - centerY);

            if (dist < 400) {
                const angleX = (centerY - mouseY) / 30;
                const angleY = (mouseX - centerX) / 30;
                box.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-5px)`;
            } else {
                box.style.transform = '';
            }
        });
    });

    // Handle Student Registration Form
    const studentForm = document.getElementById('student-form');
    if (studentForm) {
        studentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            const formData = {
                from_name: document.getElementById('student-name').value,
                from_email: document.getElementById('student-email').value,
                phone: document.getElementById('student-phone').value,
                interest: document.getElementById('student-program').value,
                career_goals: document.getElementById('student-goals').value,
                form_type: 'Student Registration'
            };

            emailjs.send('service_e3uauzm', 'template_vdm5zyo', formData)
                .then(function () {
                    alert('Registration Successful! We will contact you soon.');
                    studentForm.reset();
                    closeModal('student-modal');
                }, function (error) {
                    alert('Failed to send registration. Please try again.');
                    console.error('EmailJS Error:', error);
                })
                .finally(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }

    // Handle Business Consultation Form
    const businessForm = document.getElementById('business-form');
    if (businessForm) {
        businessForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            const formData = {
                business_name: document.getElementById('business-name').value,
                contact_person: document.getElementById('contact-person').value,
                from_email: document.getElementById('business-email').value,
                service_interest: document.getElementById('service-interest').value,
                project_description: document.getElementById('project-description').value,
                form_type: 'Business Consultation'
            };

            emailjs.send('service_e3uauzm', 'template_vdm5zyo', formData)
                .then(function () {
                    alert('Inquiry Sent! We will get back to you within 48 hours.');
                    businessForm.reset();
                    closeModal('business-modal');
                }, function (error) {
                    alert('Failed to send inquiry. Please try again.');
                    console.error('EmailJS Error:', error);
                })
                .finally(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
});
