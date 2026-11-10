import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import MedicalNotice from "@/components/legal/MedicalNotice";
import CopyrightNotice from "@/components/legal/CopyrightNotice";

export const metadata: Metadata = { title: "Legal & Disclaimers | Clear Body, Clear Mind Central Ohio", description: "Website information, medical disclaimer, and copyright and trademark notices." };
const contents = [{ id: "website-information", title: "Website information" }, { id: "medical-disclaimer", title: "Medical disclaimer" }, { id: "copyright", title: "Copyright & trademarks" }];
export default function LegalPage() {
  return <LegalPageLayout title="Legal & Disclaimers" description="Information about this website, the Purification Program, and the rights associated with the materials presented here." contents={contents}>
    <section id="website-information"><h2>Website information</h2><p>This website is operated by the Church of Scientology of Central Ohio, 1266 Dublin Road, Columbus, Ohio. It provides information about the Purification Program and related books and a way to contact our local organization.</p><p>For questions about this website or these notices, email <a href="mailto:columbus@scientology.net">columbus@scientology.net</a> or call <a href="tel:+16142215024">(614) 221-5024</a>. Our <Link href="/privacy">Privacy Policy</Link> explains the handling of information collected through the site.</p></section>
    <section id="medical-disclaimer" className="border-t border-[#0c3341]/10 pt-9"><h2>Medical disclaimer</h2><MedicalNotice /></section>
    <section id="copyright" className="border-t border-[#0c3341]/10 pt-9"><h2>Copyright &amp; trademarks</h2><CopyrightNotice /></section>
  </LegalPageLayout>;
}
