#!/bin/bash

# Create necessary directories
mkdir -p images/services images/gallery images/clients

# Download logo (using a placeholder for now - you should replace this with your actual logo)
curl -o images/logo.png "https://placehold.co/200x80/6a11cb/ffffff/png?text=E-Square+Events"

# Download hero background
curl -o images/hero-bg.jpg "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80"

# Download service images
curl -o images/services/outdoor-advertising.jpg "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80"
curl -o images/services/btl-marketing.jpg "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
curl -o images/services/events.jpg "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
curl -o images/services/social-media.jpg "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80"
curl -o images/services/digital-marketing.jpg "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"

# Download gallery images
curl -o images/gallery/project1.jpg "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80"
curl -o images/gallery/project2.jpg "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
curl -o images/gallery/project3.jpg "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80"
curl -o images/gallery/project4.jpg "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
curl -o images/gallery/project5.jpg "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80"
curl -o images/gallery/project6.jpg "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"

# Download client logos (using placeholders for now)
curl -o images/clients/client1.png "https://placehold.co/200x100/ffffff/6a11cb/png?text=Client+1"
curl -o images/clients/client2.png "https://placehold.co/200x100/ffffff/6a11cb/png?text=Client+2"
curl -o images/clients/client3.png "https://placehold.co/200x100/ffffff/6a11cb/png?text=Client+3"
curl -o images/clients/client4.png "https://placehold.co/200x100/ffffff/6a11cb/png?text=Client+4"
curl -o images/clients/client5.png "https://placehold.co/200x100/ffffff/6a11cb/png?text=Client+5"

echo "Images downloaded successfully!" 