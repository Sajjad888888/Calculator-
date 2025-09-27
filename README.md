<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photography Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            color: #1a202c;
            background-color: #f7fafc;
        }

        .gallery-image {
            transition: transform 0.3s ease-in-out;
        }

        .gallery-image:hover {
            transform: scale(1.05);
        }

        /* The Hero image uses a placeholder URL. Replace this with your actual image URL! */
        .header-bg {
            background-image: url('https://placehold.co/1920x1080/e2e8f0/1a202c?text=Your+Hero+Image');
            background-size: cover;
            background-position: center;
        }

        /* Custom scrollbar for aesthetics */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: #cbd5e0;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #4a5568;
            border-radius: 4px;
        }
    </style>
</head>
<body class="antialiased">

    <!-- Header Section with Hero Image -->
    <header id="home" class="header-bg relative h-screen w-full flex items-center justify-center text-white text-center rounded-lg shadow-xl">
        <div class="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <div class="relative z-10 p-6 sm:p-10">
            <h1 class="text-4xl sm:text-6xl font-bold tracking-tight mb-4">Your Name</h1>
            <p class="text-lg sm:text-2xl font-light italic">Capturing the beauty of the world, one frame at a time.</p>
        </div>
    </header>

    <!-- Navigation Bar -->
    <nav class="sticky top-0 z-50 bg-white shadow-lg py-4 px-4 sm:px-10 flex justify-center rounded-b-lg">
        <ul class="flex space-x-4 sm:space-x-8 text-sm sm:text-base font-medium">
            <li><a href="#home" class="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">Home</a></li>
            <li><a href="#portfolio" class="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">Portfolio</a></li>
            <li><a href="#about" class="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">About</a></li>
            <li><a href="#contact" class="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">Contact</a></li>
        </ul>
    </nav>

    <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        
        <!-- Portfolio Gallery Section -->
        <section id="portfolio" class="rounded-xl bg-white p-6 shadow-xl">
            <h2 class="text-3xl font-bold text-center mb-10">Portfolio</h2>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Gallery items use placeholder images. Replace the 'src' attribute with your actual photo URLs! -->
                <a href="https://placehold.co/800x600/e2e8f0/1a202c?text=Photo+1" target="_blank" class="block rounded-lg overflow-hidden shadow-md gallery-image">
                    <img src="https://placehold.co/800x600/e2e8f0/1a202c?text=Photo+1" alt="Portfolio Photo 1" class="w-full h-auto object-cover">
                </a>
                
                <a href="https://placehold.co/800x600/cbd5e0/1a202c?text=Photo+2" target="_blank" class="block rounded-lg overflow-hidden shadow-md gallery-image">
                    <img src="https://placehold.co/800x600/cbd5e0/1a202c?text=Photo+2" alt="Portfolio Photo 2" class="w-full h-auto object-cover">
                </a>
                
                <a href="https://placehold.co/800x600/e2e8f0/1a202c?text=Photo+3" target="_blank" class="block rounded-lg overflow-hidden shadow-md gallery-image">
                    <img src="https://placehold.co/800x600/e2e8f0/1a202c?text=Photo+3" alt="Portfolio Photo 3" class="w-full h-auto object-cover">
                </a>
                
                <a href="https://placehold.co/800x600/cbd5e0/1a202c?text=Photo+4" target="_blank" class="block rounded-lg overflow-hidden shadow-md gallery-image">
                    <img src="https://placehold.co/800x600/cbd5e0/1a202c?text=Photo+4" alt="Portfolio Photo 4" class="w-full h-auto object-cover">
                </a>
                
                <a href="https://placehold.co/800x600/e2e8f0/1a202c?text=Photo+5" target="_blank" class="block rounded-lg overflow-hidden shadow-md gallery-image">
                    <img src="https://placehold.co/800x600/e2e8f0/1a202c?text=Photo+5" alt="Portfolio Photo 5" class="w-full h-auto object-cover">
                </a>
                
                <a href="https://placehold.co/800x600/cbd5e0/1a202c?text=Photo+6" target="_blank" class="block rounded-lg overflow-hidden shadow-md gallery-image">
                    <img src="https://placehold.co/800x600/cbd5e0/1a202c?text=Photo+6" alt="Portfolio Photo 6" class="w-full h-auto object-cover">
                </a>
            </div>
        </section>

        <!-- About Me Section -->
        <section id="about" class="rounded-xl bg-white p-6 shadow-xl">
            <h2 class="text-3xl font-bold text-center mb-6">About Me</h2>
            <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
                <!-- Replace this placeholder with a photo of yourself -->
                <img src="https://placehold.co/400x400/e2e8f0/1a202c?text=Your+Photo" alt="Your Photo" class="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover shadow-lg">
                <div class="text-center md:text-left">
                    <p class="text-gray-700 leading-relaxed mb-4">
                        Hello! My name is **[Your Name]**, and I am a passionate photographer based in **[Your City]**. I specialize in **[Your Specialty, e.g., landscape, portrait, event]** photography. My journey began with a simple camera and a love for capturing moments that tell a story.
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        I believe that every picture holds a unique narrative waiting to be told. Whether it's the raw emotion in a portrait or the serene beauty of a natural landscape, I strive to create images that resonate deeply with the viewer. Thank you for visiting my portfolio. I hope you enjoy my work!
                    </p>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="rounded-xl bg-white p-6 shadow-xl">
            <h2 class="text-3xl font-bold text-center mb-6">Get in Touch</h2>
            <p class="text-center text-gray-700 mb-8">
                Interested in working together or just want to say hi? Fill out the form below or find me on social media.
            </p>
            
            <!-- Success Message (Initially Hidden) -->
            <div id="success-message" class="hidden bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 max-w-xl mx-auto" role="alert">
                <strong class="font-bold">Success!</strong>
                <span class="block sm:inline"> Your message has been noted. I'll get back to you shortly!</span>
            </div>

            <form id="contact-form" class="max-w-xl mx-auto space-y-6">
                <div>
                    <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
                    <input type="text" id="name" name="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" required>
                </div>
                <div>
                    <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" required>
                </div>
                <div>
                    <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message..." required></textarea>
                </div>
                <div class="text-center">
                    <button type="submit" class="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center py-6 mt-12 rounded-t-lg">
        <div class="container mx-auto px-4">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
            <div class="mt-4 flex justify-center space-x-6">
                <!-- Replace '#' with your social media links -->
                <a href="#" class="hover:text-gray-300 transition duration-300 ease-in-out">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <!-- Generic Social Media Icon (You can replace this with specific Instagram/LinkedIn SVGs) -->
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.208 6.5h1.992V9h-1.992V6.5zm-3.208 0h1.992V9h-1.992V6.5zm-3.208 0h1.992V9h-1.992V6.5zm-3.208 0h1.992V9h-1.992V6.5z"/>
                        <circle cx="12" cy="12" r="5"></circle>
                        <path d="M16.5 7h-9A1.5 1.5 0 006 8.5v9A1.5 1.5 0 007.5 19h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0016.5 7z"></path>
                    </svg>
                </a>
                <a href="#" class="hover:text-gray-300 transition duration-300 ease-in-out">
                    <!-- Twitter Icon -->
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.254 6.326a8.916 8.916 0 01-2.584.708 4.477 4.477 0 001.97-2.484 8.955 8.955 0 01-2.846 1.085 4.47 4.47 0 00-7.632 4.084 12.67 12.67 0 01-9.213-4.654 4.473 4.473 0 001.385 5.968 4.444 4.444 0 01-2.022-.558v.056a4.474 4.474 0 003.58 4.385 4.48 4.48 0 01-1.18.156 4.498 4.498 0 01-.84-.076 4.478 4.478 0 004.17 3.102 8.98 8.98 0 01-5.568 1.921c-.36 0-.712-.02-1.059-.062a12.71 12.71 0 006.878 2.016c8.253 0 12.766-6.83 12.766-12.748 0-.194-.004-.388-.013-.58a9.176 9.176 0 002.253-2.338z"></path>
                    </svg>
                </a>
            </div>
        </div>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Contact Form Submission Handler
        const contactForm = document.getElementById('contact-form');
        const successMessage = document.getElementById('success-message');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the page from reloading

            // Hide the form and show the success message
            contactForm.classList.add('hidden');
            successMessage.classList.remove('hidden');

            // Optionally, clear the form fields after a slight delay
            setTimeout(() => {
                contactForm.reset();
            }, 500);
            
            // NOTE: To make this form actually send an email, you would need to use a
            // service like Formspree, Netlify Forms, or a custom serverless function.
            // For a static site, this confirmation is the best user experience.
        });
    </script>
</body>
</html>

