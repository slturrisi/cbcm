import { testimonialSource, testimonialVariation } from "@/content/testimonial-notice";

export default function MedicalNotice() {
  return (
<div className="space-y-6">
            <p>
              The Purification Program cannot be construed as a recommendation
              of medical treatment or medication. It is not professed to be
              physical or medical treatment, nor is any such claim made.
            </p>

            <p>
              There are no medical recommendations or claims for the
              Purification Program or for any vitamin or mineral regimens
              described in the book.
            </p>

            <p>
              No individual should undertake the Purification Program or any of
              its regimens without first consulting and obtaining the informed
              approval of a licensed medical practitioner.
            </p>

            <p>
              The author makes no warranties or representations as to the
              effectiveness of the Purification Program.
            </p>
          <p>The Toxic Test is an informational questionnaire, and its score is not a medical diagnosis.</p>
<p>{testimonialSource} {testimonialVariation}</p>
</div>
  );
}
