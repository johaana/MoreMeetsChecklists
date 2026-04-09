'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

export function LayoutScript() {
  const pathname = usePathname();

  return (
    <>
      {/* Brevo Conversations Widget */}
      {pathname !== '/blog' && (
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
      )}

      {/* Calendly Badge Widget */}
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
      />
      <Script id="calendly-init" strategy="lazyOnload">
        {`
          function initCalendly() {
            if (window.Calendly && typeof window.Calendly.initBadgeWidget === 'function') {
              Calendly.initBadgeWidget({ 
                url: 'https://calendly.com/more-moremeets/30min', 
                text: 'Book Consultation', 
                color: '#2eb86b', 
                textColor: '#ffffff', 
                branding: true 
              });
            } else {
              setTimeout(initCalendly, 1000);
            }
          }
          
          if (document.readyState === 'complete') {
            initCalendly();
          } else {
            window.addEventListener('load', initCalendly);
          }
        `}
      </Script>
    </>
  );
}
