// SINGLE BLOG CTA //
document.addEventListener('DOMContentLoaded', () => {
	const headers = document.querySelectorAll('.csb-content h2');
	const totalHeaders = headers.length;

	if (totalHeaders === 0) return; // No headers found

	const middleIndex = Math.floor(totalHeaders / 2);
	const middleHeader = headers[middleIndex];

	// Create the CTA element
	const cta = document.querySelector('.cta-item');
	if (!cta) return; // No CTA found

	// Insert the CTA before the middle header
	middleHeader.parentNode.insertBefore(cta, middleHeader);
});



// Select all <p> within .csb-content
const paragraphs = document.querySelectorAll('.csb-content p');

// Select the existing .blog-img elements
const blogImgs = document.querySelectorAll('.blog-img');

const firstBlogImg = blogImgs[0];
const secondBlogImg = blogImgs[1];
const thirdBlogImg = blogImgs[2];

const totalParagraphs = paragraphs.length;

// Calculate positions dynamically based on total count
const firstPosition = Math.floor(totalParagraphs * 0.3); // after 30%
const secondPosition = Math.floor(totalParagraphs * 0.65); // after 65%
const thirdPosition = Math.floor(totalParagraphs * 0.9); // after 70%

// Helper function to insert an element after a reference node
function insertAfter(newNode, referenceNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// Insert first .blog-img after calculated position
if (totalParagraphs > 0 && firstBlogImg) {
	const index1 = Math.min(firstPosition, totalParagraphs - 1);
	insertAfter(firstBlogImg, paragraphs[index1]);
}

// Insert second .blog-img after calculated position
if (totalParagraphs > 0 && secondBlogImg) {
	const index2 = Math.min(secondPosition, totalParagraphs - 1);
	insertAfter(secondBlogImg, paragraphs[index2]);
}

// Insert second .blog-img after calculated position
if (totalParagraphs > 0 && thirdBlogImg) {
	const index3 = Math.min(thirdPosition, totalParagraphs - 1);
	insertAfter(thirdBlogImg, paragraphs[index3]);
}

