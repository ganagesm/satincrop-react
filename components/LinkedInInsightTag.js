// components/LinkedInInsightTag.js

import React from 'react';

const LinkedInInsightTag = () => (
  <>
    <script type="text/javascript">
      {`
      _linkedin_partner_id = "7289105";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
      `}
    </script>
    <script type="text/javascript">
      {`
      (function(l) {
        if (!l) {
          window.lintrk = function(a, b) {
            window.lintrk.q.push([a, b])
          };
          window.lintrk.q = []
        }
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";
        b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
      })(window.lintrk);
      `}
    </script>
  </>
);

export default LinkedInInsightTag;
