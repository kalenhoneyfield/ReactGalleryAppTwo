# React Gallery App for Flickr
> A small app to search for photos on Flickr


This app is a simply search tool for finding the top 24 "interesting" pictures on Flickr for a given search term.

![](https://user-images.githubusercontent.com/53430036/83976263-ebb94500-a8c6-11ea-98b4-c55af94b2d7d.png)

## Installation

You will need your own Flickr API key from Flickr's App Garden: [The App Garden](https://www.flickr.com/services/apps/create/apply/)  

```sh
git clone https://github.com/kalenhoneyfield/ReactGalleryAppTwo.git
cd ./ReactGalleryAppTwo
touch ./src/config.js && echo -e "const apiKey = 'YOUR API KEY'; \n export default apiKey;"
npm install
npm start
```
- If the touch/echo step concerns you, simply create a config.js file in the src directory and add the following before running npm start:

```
const apiKey = 'YOUR API KEY';
export default apiKey;
```

## Usage example

Have you ever wanted to find out what Flickr photographers have photographed and labeled as "llama", "tooth", or "llama tooth"? Well now you can also use this tool to search Flickr. If you aren't in the mood to type, I've also provided 4 complimentary randomly selected nouns you can search for using the easy to click navigation buttons under the search bar. If those search terms don't suit your fancy you're free to reload the page for 4 premium authentic genuinely faux new ones! 



## Meta

Kalen Honeyfield – [@KHoneyfield](https://twitter.com/khoneyfield) – kalenhoneyfield@gmail.com

[KalenHoneyfield@github](https://github.com/kalenhoneyfield/)
