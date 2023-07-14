// Retrieve the required elements from the DOM
const featuredImage = document.getElementById('featured-image');
const imageTitle = document.getElementById('image-title');
const thumbnailList = document.getElementById('thumbnail-list');

// Define an array of gallery items
const galleryItems = [
  { largeImage: 'images/flowers-pink-large.jpg', smallImage: 'images/flowers-pink-small.jpg', title: 'Pink Flowers | Dhalias' },
  { largeImage: 'images/flowers-purple-large.jpg', smallImage: 'images/flowers-purple-small.jpg', title: 'Purple Flowers | Common Bluebell' },
  { largeImage: 'images/flowers-red-large.jpg', smallImage: 'images/flowers-red-small.jpg', title: 'Red Flowers | Common Poppy' },
  { largeImage: 'images/flowers-white-large.jpg', smallImage: 'images/flowers-white-small.jpg', title: 'White Flowers | Poet\'s Narcissus' },
  { largeImage: 'images/flowers-yellow-large.jpg', smallImage: 'images/flowers-yellow-small.jpg', title: 'Yellow Flowers | Sunflowers' }
];
var grey = [];;
// Function to display the selected image in the featured area
function displayImage(largeImage, title) {
  featuredImage.src = largeImage;
  imageTitle.textContent = title;

  // adds inactive class from all thumbnail images
  const thumbnails = thumbnailList.getElementsByTagName('img');
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.add('inactive');
  }

 }

// Function to dynamically build the thumbnail list
function buildThumbnailList() {
    for (let i = 0; i < galleryItems.length; i++) {
      const galleryItem = galleryItems[i];
  
      // Create a list item element
      const listItem = document.createElement('li');
  
      // Create an image element for the thumbnail
      const thumbnailImage = document.createElement('img');
      thumbnailImage.src = galleryItem.smallImage;
      thumbnailImage.alt = '';
      thumbnailImage.width = 240;
      thumbnailImage.height = 160;
  
      // Set the onclick event to display the corresponding image
        thumbnailImage.onclick = function() {
        displayImage(galleryItem.largeImage, galleryItem.title);
        thumbnailImage.classList.remove('inactive');
        if((document.querySelector('figcaption').textContent) == 'Pink Flowers | Dhalias'){
            document.getElementById('gallery').style.backgroundColor = 'rgb(176, 3, 115)'
        }else if((document.querySelector('figcaption').textContent) == 'Purple Flowers | Common Bluebell'){
            document.getElementById('gallery').style.backgroundColor = 'rgb(107, 57, 183)'
        }else if((document.querySelector('figcaption').textContent) == 'Red Flowers | Common Poppy'){
            document.getElementById('gallery').style.backgroundColor = 'rgb(203, 24, 24)'
        }else if((document.querySelector('figcaption').textContent) == 'White Flowers | Poet\'s Narcissus'){
            document.getElementById('gallery').style.backgroundColor = 'rgb(198, 198, 198)'
        }else if((document.querySelector('figcaption').textContent) == 'Yellow Flowers | Sunflowers'){
            document.getElementById('gallery').style.backgroundColor = 'rgb(229, 201, 42)'
        }
      };
      // Append the thumbnail image to the list item
      listItem.appendChild(thumbnailImage);
  
      // Append the list item to the thumbnail list
      thumbnailList.appendChild(listItem);
      
    }

// if(galleryItems.title == 'Pink Flowers | Dhalias'){
//     body.style.backgroundColor = "#bc0303";
// }
    
  }
// Call the buildThumbnailList function to generate the thumbnail list
buildThumbnailList();
