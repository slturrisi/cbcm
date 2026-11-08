export const checkoutInput = "mt-2 w-full rounded-lg border border-[#0c3341]/20 bg-white px-4 py-3 text-base text-[#102f3a] focus:border-[#087487] focus:outline-2 focus:outline-offset-2 focus:outline-[#087487]";
const label = "block text-sm font-semibold text-[#0c3341]";

export default function AddressFields({ prefix }: { prefix: "shipping" | "billing" }) {
  return <div className="mt-5 grid gap-5 sm:grid-cols-2">
    <label className={`${label} sm:col-span-2`}>Country<input name={`${prefix}-country`} autoComplete={`${prefix} country-name`} defaultValue="United States" required maxLength={100} className={checkoutInput} /></label>
    <label className={label}>First name<input name={`${prefix}-first`} autoComplete={`${prefix} given-name`} required maxLength={80} className={checkoutInput} /></label>
    <label className={label}>Last name<input name={`${prefix}-last`} autoComplete={`${prefix} family-name`} required maxLength={80} className={checkoutInput} /></label>
    <label className={`${label} sm:col-span-2`}>Street address<input name={`${prefix}-address`} autoComplete={`${prefix} address-line1`} required maxLength={200} className={checkoutInput} /></label>
    <label className={`${label} sm:col-span-2`}>Apartment, suite, building <span className="font-normal text-[#56717a]">(optional)</span><input name={`${prefix}-address2`} autoComplete={`${prefix} address-line2`} maxLength={200} className={checkoutInput} /></label>
    <label className={`${label} sm:col-span-2`}>City<input name={`${prefix}-city`} autoComplete={`${prefix} address-level2`} required maxLength={120} className={checkoutInput} /></label>
    <label className={label}>State / region<input name={`${prefix}-region`} autoComplete={`${prefix} address-level1`} defaultValue="Ohio" required maxLength={120} className={checkoutInput} /></label>
    <label className={label}>ZIP / postal code<input name={`${prefix}-postal`} autoComplete={`${prefix} postal-code`} required maxLength={30} className={checkoutInput} /></label>
  </div>;
}
