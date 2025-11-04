/**
 * AdSlot placeholder
 * When AdSense is approved, paste your ad code here.
 *
 * Example:
 * <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR_ID" crossOrigin="anonymous"></script>
 * <ins class="adsbygoogle" style="display:block" data-ad-client="YOUR_ID" data-ad-slot="SLOT_ID" data-ad-format="auto" data-full-width-responsive="true"></ins>
 * <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
 */
export default function AdSlot({ label = "Advertisement" }: { label?: string }) {
  return (
    <div className="my-6 w-full">
      <div className="text-xs text-gray-400 mb-1">{label}</div>
      <div className="w-full h-24 rounded-xl border border-dashed border-gray-300 bg-white grid place-items-center">
        <span className="text-gray-400 text-xs">Ad placeholder</span>
      </div>
    </div>
  );
}
