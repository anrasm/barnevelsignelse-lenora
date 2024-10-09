# Online Invitation

This was one of my very first React projects, where I wanted to create an online invitation for our guests so they could easily access details about the event from any device. I focused on making the components dynamic and reusable throughout the site, which was a great learning experience for me.

## Page Speed Optimization

As a part of my learning, I decided to optimize the loading speed of my website.

![barnevelsignelse-lenora-pagespeed-before](https://github.com/user-attachments/assets/09ca38be-0ac1-4434-89e5-b0a1c5f75ad6)

This was my score from Google's PageSpeed Insights (before I began any optimization).

The first step I took towards optimization was changing the image format of all images from .PNG to .WebP and compressing them to reduce file sizes without sacrificing quality. I then implemented lazy loading for images to defer loading until they were visible in the viewport. This helped reduce initial load time and resource consumption.\
Next, I extracted and inlined critical CSS to ensure that above-the-fold content renders quickly. I also made sure to comply with Google's accessibility guidelines by adjusting the color of some text to match the recommended contrast ratio.

All these optimizations led to a noticeable improvement in the initial page load time, enhancing user experience and SEO performance (even though this won't be ranking on Google).

![barnevelsignelse-lenora-pagespeed-after](https://github.com/user-attachments/assets/d16e63ba-4cdc-4857-b40d-a88686cd11f0)

However, I wasn't able to get the SEO score to 100 due to a bug with my `robots.txt` file (see image below).

![robots-error](https://github.com/user-attachments/assets/d2434a85-83be-435f-85f6-a04aa9a2aa09)

If anyone knows how to fix this, please let me know!

## Run Locally

To run this project locally, follow these steps:

`git clone https://github.com/anrasm/barnevelsignelse-lenora.git`

Clone the repository.

`npm install`

Install dependencies.

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
