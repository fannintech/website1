/**
 * Analytics integration placeholder.
 * Wire GA / GTM only after measurement IDs are provided via env vars.
 * Do not hard-code tracking IDs.
 */
export function AnalyticsPlaceholder() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  if (!gaId && !gtmId) return null;

  // Intentionally returns null until a consented, configured implementation
  // is added. Keeping the component ensures a clear integration point.
  return null;
}
