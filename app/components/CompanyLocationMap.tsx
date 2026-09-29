"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const placeId = "ChIJP-bWL7XrwjsR3eStvmwqmrM";
const configuration = {
  locations: [
    {
      title: "Techifylabs",
      address1: "Clover Hill Plaza, NIBM Rd, Mohammed Wadi, Kondhwa",
      address2: "Pune, Maharashtra, India",
      coords: { lat: 18.466888, lng: 73.901812 },
      placeId,
    },
  ],
  mapOptions: {
    center: { lat: 18.466888, lng: 73.901812 },
    fullscreenControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    zoom: 16,
    zoomControl: true,
    maxZoom: 17,
    mapId: "DEMO_MAP_ID",
  },
  mapsApiKey: apiKey,
  capabilities: {
    input: false,
    autocomplete: false,
    directions: false,
    distanceMatrix: false,
    details: false,
    actions: false,
  },
};

type StoreLocator = HTMLElement & {
  configureFromQuickBuilder: (config: typeof configuration) => void;
};

export default function CompanyLocationMap() {
  const container = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!ready || !apiKey || failed) return;
    const host = container.current;
    let cancelled = false;

    async function initialize() {
      await Promise.all([
        customElements.whenDefined("gmpx-api-loader"),
        customElements.whenDefined("gmpx-store-locator"),
      ]);
      if (cancelled || !host) return;
      const loader = document.createElement("gmpx-api-loader");
      loader.setAttribute("key", apiKey!);
      loader.setAttribute("solution-channel", "GMP_QB_locatorplus_v11_c");
      const locator = document.createElement("gmpx-store-locator") as StoreLocator;
      locator.setAttribute("map-id", "DEMO_MAP_ID");
      locator.style.cssText = "display:block;width:100%;height:100%;--gmpx-color-surface:#fff;--gmpx-color-on-surface:#212121;--gmpx-color-on-surface-variant:#757575;--gmpx-color-primary:#1967d2;--gmpx-color-outline:#e0e0e0;--gmpx-fixed-panel-width-row-layout:28.5em;--gmpx-fixed-panel-height-column-layout:35%;--gmpx-font-family-base:Arial,sans-serif;--gmpx-font-size-base:0.875rem";
      host.replaceChildren(loader, locator);
      locator.configureFromQuickBuilder(configuration);
    }

    void initialize().catch(() => {
      if (!cancelled) setFailed(true);
    });
    return () => {
      cancelled = true;
      host?.replaceChildren();
    };
  }, [ready, failed]);

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {apiKey && !failed ? (
        <>
          <Script
            src="https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.15/index.min.js"
            type="module"
            onReady={() => setReady(true)}
            onError={() => setFailed(true)}
          />
          <div ref={container} className="h-[520px] w-full sm:h-[460px]" role="region" aria-label="Techifylabs office location map" />
        </>
      ) : (
        <iframe
          title="Techifylabs office at Clover Hill Plaza, Pune"
          src="https://www.google.com/maps?q=Techifylabs%2C%20Clover%20Hill%20Plaza%2C%20Pune&ll=18.466888,73.901812&z=16&output=embed"
          className="h-[400px] w-full border-0 sm:h-[460px]"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
      <div className="border-t border-slate-200 px-6 py-4">
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=Techifylabs%2C%20Pune&destination_place_id=${placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-blue-800 underline-offset-4 hover:underline"
        >
          Get directions on Google Maps
        </a>
      </div>
    </div>
  );
}
