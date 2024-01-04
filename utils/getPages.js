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
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.00
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/careers/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/investors/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/generative-ai/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/machine-learning-and-artificial-intelligence/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/internet-of-things/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/data-science-analytics/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/rpa/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/cloud-services/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/devops/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/ui-ux-design/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/software-application-development/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/mobile-app-development/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/qa-automation/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/microsoft/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/google-cloud/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/oracle/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/aws-services/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/salesforce/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/servicenow/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/mendix/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-strategy-development/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-workspace-solutions/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-talent-acquisition/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-legal-registration-support/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-bot/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/internal-audit/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/education/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/government/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/healthcare/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/media-entertainment/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/semiconductor/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/manufacturing/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/Product-services/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/retail/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/fmcd/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/nearshore/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/offshore/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/onsite/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/sa-technologies-triumphs-with-cmmi-services-maturity-level-5-certification/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/embracing-machine-first-approach/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/about/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/news-and-events/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/customer-success-stories/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/terms-conditions/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/software-quality-assurance/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-location-selection/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/contigent-service/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-infrastructure-setup/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gccregulatorycompliance/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/abhay/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/sonal-sinha/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/vasudha-kanade/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/amita/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/malay/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/jitendra/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/trishita/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/kanak/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/articles/gcc-evolution/`,
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
