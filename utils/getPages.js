// // utils/getPages.js

// import fs from 'fs/promises';
// import path from 'path';

// export async function getPages() {
//   const pagesDirectory = path.join(process.cwd(), 'pages');
//   const excludedPages = [
//     'checkout', 'blog2', 'coming-soon', 'case-studies', 'blog-details', '_document', 'privacy-policy',
//     'services', 'terms-conditions', 'customers-and-partners', 'index', 'cart', '_app', 'case-studies-details', 'partner'
//   ];

//   try {
//     const files = await fs.readdir(pagesDirectory);
//     const allowedPages = files
//       .filter((file) => file.endsWith('.js') && !file.startsWith('_') && !excludedPages.includes(file.replace(/\.js$/, '')))
//       .map((file) => file.replace(/\.js$/, ''));

//     return allowedPages;
//   } catch (error) {
//     console.error('Error reading pages directory:', error);
//     throw error;
//   }
// }

// utils/getPages.js

import fs from 'fs';
import path from 'path';

export function getPages() {
  const pagesDirectory = path.join(process.cwd(), 'pages');
  const excludedPages = [
    'checkout', 'blog2', 'coming-soon', 'case-studies', 'blog-details', '_document', 'privacy-policy',
    'services', 'terms-conditions', 'customers-and-partners', 'index', 'cart', '_app', 'case-studies-details', 'partner'
  ];

  try {
    const files = fs.readdirSync(pagesDirectory);

    // Filter out files starting with an underscore ('_') and those in the excludedPages array
    const allowedPages = files
      .filter((file) => file.endsWith('.js') && !file.startsWith('_') && !excludedPages.includes(file.replace(/\.js$/, '')))
      .map((file) => file.replace(/\.js$/, ''));

    return allowedPages;
  } catch (error) {
    console.error('Error reading pages directory:', error);
    throw error;
  }
}
