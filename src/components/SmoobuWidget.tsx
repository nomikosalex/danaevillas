'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface SmoobuWidgetProps {
  accountId: string;
  apartmentId?: string;
}

declare global {
  interface Window {
    BookingToolIframe?: {
      initialize: (config: { url: string; baseUrl: string; target: string }) => void;
    };
  }
}

export default function SmoobuWidget({ accountId, apartmentId }: SmoobuWidgetProps) {
  const containerId = 'smoobu-booking-widget';
  const initialized = useRef(false);

  const widgetUrl = apartmentId
    ? `https://login.smoobu.com/en/booking-tool/iframe/${accountId}/${apartmentId}`
    : `https://login.smoobu.com/en/booking-tool/iframe/${accountId}`;

  const initWidget = () => {
    if (initialized.current) return;
    if (!window.BookingToolIframe) return;
    initialized.current = true;
    window.BookingToolIframe.initialize({
      url: widgetUrl,
      baseUrl: 'https://login.smoobu.com',
      target: `#${containerId}`,
    });
  };

  // Fallback: if the script already loaded before this component mounted
  useEffect(() => {
    if (window.BookingToolIframe) initWidget();
  });

  return (
    <>
      <Script
        src="https://login.smoobu.com/js/Settings/BookingToolIframe.js"
        strategy="afterInteractive"
        onLoad={initWidget}
      />
      <div id={containerId} className="w-full min-h-[600px]" />
    </>
  );
}
