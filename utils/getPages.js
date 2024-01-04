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
  const allowedPages = [
    {
      loc: "https://www.satincorp.com/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.00
    },
    {
      loc: "https://www.satincorp.com/careers/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/investors/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/generative-ai/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/machine-learning-and-artificial-intelligence/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/internet-of-things/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/data-science-analytics/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/rpa/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/cloud-services/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/devops/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/ui-ux-design/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/software-application-development/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/mobile-app-development/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/qa-automation/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/microsoft/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/google-cloud/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/oracle/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/aws-services/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/salesforce/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/servicenow/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/mendix/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/gcc/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/gcc-strategy-development/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/gcc-workspace-solutions/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/gcc-talent-acquisition/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/gcc-legal-registration-support/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/gcc-bot/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/internal-audit/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/education/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/government/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/healthcare/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/media-entertainment/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/semiconductor/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/manufacturing/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/Product-services/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/retail/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/fmcd/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/contact-us/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/nearshore/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/offshore/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/onsite/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/sa-technologies-triumphs-with-cmmi-services-maturity-level-5-certification/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/embracing-machine-first-approach/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/blog/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/about/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/news-and-events/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/customer-success-stories/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/privacy-policy/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/terms-conditions/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/software-quality-assurance/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/gcc-location-selection/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/contigent-service/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/gcc-infrastructure-setup/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/gccregulatorycompliance/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/abhay/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/sonal-sinha/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/vasudha-kanade/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/amita/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/malay/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/jitendra/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/trishita/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/kanak/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/articles/gcc-evolution/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    }
  ]
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
