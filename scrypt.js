
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        
        const speakerNotes = [
    //         // 1
    //         "Welcome everyone! Today I'll tell you about an amazing medical profession - the perfusionist.",
    //         // 2
    //         "A perfusionist is like a pilot for life-support machines. They're medical experts who work in the operating room.",
    //         // 3
    //         "Imagine the heart stops beating during surgery - the perfusionist keeps the patient alive! They control blood flow and breathing.",
    //         // 4
    //         "This machine is incredible - it literally replaces the heart and lungs during surgery.",
    //         // 5
    //         "Becoming a perfusionist requires special education. It's a small, exclusive profession with high standards.",
    //         // 6
    //         "They work in different types of surgeries - not just heart operations. They're versatile medical professionals.",
    //         // 7
    //         "This job requires nerves of steel! One mistake can cost a life. They must be precise (Присайз) and calm under pressure.",
    //         // 8
    //         "Operating rooms are intense environments. Perfusionists stand for hours, completely focused on their equipment.",
    //         // 9
    //         "It's a growing field with excellent pay. Healthcare always needs skilled professionals.",
    //         // 10
    //         "Perfusionists make impossible surgeries possible. They're heroes working behind the scenes.",
    //         // 11
    // //   стейрайл
    //         // 12
    //         "Thank the audience and invite questions. Be prepared to explain any concepts in simpler terms if needed."
        ];

        document.getElementById('total-slides').textContent = totalSlides;

        function showSlide(n) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (n + totalSlides) % totalSlides;
            slides[currentSlide].classList.add('active');
            document.getElementById('current-slide').textContent = currentSlide + 1;
            
            // Update speaker notes
            document.getElementById('notes-content').textContent = speakerNotes[currentSlide];
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function previousSlide() {
            showSlide(currentSlide - 1);
        }

     function toggleNotes() {
            const notes = document.getElementById('speaker-notes');
            const isVisible = notes.classList.contains('visible');
            
            if (isVisible) {
                notes.classList.remove('visible');
                notes.style.display = 'none';
            } else {
                notes.classList.add('visible');
                notes.style.display = 'block';
            }
        }

       

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                previousSlide();
            } else if (e.key === 'Escape') {
                toggleNotes();
            }
        });

        // Initialize speaker notes
        document.getElementById('notes-content').textContent = speakerNotes[0];
