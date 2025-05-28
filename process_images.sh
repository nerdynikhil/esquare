#!/bin/bash

# Create necessary directories
mkdir -p images/gallery images/services images/clients

# Copy and process images from PDF pages
# First page (page-0001.jpg) - Logo and hero section
magick "/Users/nerdynikhil/Downloads/ilovepdf_pages-to-jpg/E_squarevents Profile.pdf_page-0001.jpg" -crop 800x200+0+0 -resize 200x80 images/logo.png
magick "/Users/nerdynikhil/Downloads/ilovepdf_pages-to-jpg/E_squarevents Profile.pdf_page-0001.jpg" -resize 1920x1080 images/hero-bg.jpg

# Service images (pages 2-6)
magick "/Users/nerdynikhil/Downloads/ilovepdf_pages-to-jpg/E_squarevents Profile.pdf_page-0002.jpg" -resize 800x600 images/services/outdoor-advertising.jpg
magick "/Users/nerdynikhil/Downloads/ilovepdf_pages-to-jpg/E_squarevents Profile.pdf_page-0003.jpg" -resize 800x600 images/services/btl-marketing.jpg
magick "/Users/nerdynikhil/Downloads/ilovepdf_pages-to-jpg/E_squarevents Profile.pdf_page-0004.jpg" -resize 800x600 images/services/events.jpg
magick "/Users/nerdynikhil/Downloads/ilovepdf_pages-to-jpg/E_squarevents Profile.pdf_page-0005.jpg" -resize 800x600 images/services/social-media.jpg
magick "/Users/nerdynikhil/Downloads/ilovepdf_pages-to-jpg/E_squarevents Profile.pdf_page-0006.jpg" -resize 800x600 images/services/digital-marketing.jpg

# Gallery images (pages 7-12)
for i in {7..12}; do
    num=$(printf "%02d" $((i-6)))
    magick "/Users/nerdynikhil/Downloads/ilovepdf_pages-to-jpg/E_squarevents Profile.pdf_page-000$i.jpg" -resize 800x600 "images/gallery/project$num.jpg"
done

# Client logos (pages 13-17)
for i in {13..17}; do
    num=$(printf "%02d" $((i-12)))
    magick "/Users/nerdynikhil/Downloads/ilovepdf_pages-to-jpg/E_squarevents Profile.pdf_page-000$i.jpg" -resize 200x100 "images/clients/client$num.png"
done

# Optimize all images
find images -type f \( -iname "*.jpg" -o -iname "*.png" \) -exec magick {} -strip -quality 85 {} \;

echo "Images processed and organized successfully!" 