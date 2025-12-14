
'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

export function LayoutScript() {
  const pathname = usePathname();

  // Do not load Brevo script on the blog page to avoid UI overlap on mobile
  if (pathname === '/blog') {
    return null;
  }

  return (
    <Script id="brevo-conversations-widget" strategy="lazyOnload">
      {`
        (function(d, w, c) {
            w.BrevoConversationsID = '68f884eb6ab6c55e530f5d10';
            w[c] = w[c] || function() {
                (w[c].q = w[c].q || []).push(arguments);
            };
            var s = d.createElement('script');
            s.async = true;
            s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
            if (d.head) d.head.appendChild(s);
        })(document, window, 'BrevoConversations');
      `}
    </Script>
  );
}

    
