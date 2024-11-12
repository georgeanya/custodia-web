import React from "react";
import Footer from "../components/footer";
import Navbar1 from "../components/navbar1";

const Terms = () => {
  return (
    <div>
      <Navbar1 />
      <div className="px-5 md:px-72 ">
        <div className="md:mt-24 mt-16 pb-32 container mx-auto">
          <h1 className="text-4lg md:text-center  md:text-5xl font-bold text-[#002A47]">
            Terms of use
          </h1>
          <p className="mt-5 md:mt-6 text-xlg md:text-center  md:text-xlg text-[#476D85]">
            By accessing the website at https://getsustain.app, you are agreeing
            to be bound by these terms of service, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site. The
            materials contained in this website are protected by applicable
            copyright and trademark law.
          </p>
          <p className="self-center mt-6 text-xl :text-1xl md:leading-7 text-[#002A47] font-medium">
            2. Use License
          </p>
          <p className="mt-3 md:mt-3 text-xlg md:text-center  md:text-xlg text-[#476D85]">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Sustain&apos;s website for
            personal, non-commercial transitory viewing only. This license shall
            automatically terminate if you violate any of these restrictions and
            may be terminated by Custodia at any time. Upon terminating your
            viewing of these materials or upon the termination of this license,
            you must destroy any downloaded materials in your possession whether
            in electronic or printed format.
          </p>
          <p className="self-center mt-6 text-xl md:text-1xl md:leading-7 text-[#002A47] font-medium">
            3. Disclaimer
          </p>
          <p className="mt-3 md:mt-3 text-xlg md:text-center  md:text-xlg text-[#476D85]">
            The materials on Sustain&apos;s website are provided on an &apos;as
            is&apos; basis. Sustain makes no warranties, expressed or implied,
            and hereby disclaims and negates all other warranties including,
            without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of
            rights. Further, Sustain does not warrant or make any
            representations concerning the accuracy, likely results, or
            reliability of the use of the materials on its website or otherwise
            relating to such materials or on any sites linked to this site.
          </p>
          <p className="self-center mt-6 text-xl md:text-1xl md:leading-7 text-[#002A47] font-medium">
            4. Limitations
          </p>
          <p className="mt-3 md:mt-3 text-xlg md:text-center  md:text-xlg text-[#476D85]">
            In no event shall Sustain or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit,
            or due to business interruption) arising out of the use or inability
            to use the materials on Sustain&apos;s website, even if Sustain or a
            Sustain authorized representative has been notified orally or in
            writing of the possibility of such damage. Because some
            jurisdictions do not allow limitations on implied warranties, or
            limitations of liability for consequential or incidental damages,
            these limitations may not apply to you.
          </p>
          <p className="self-center mt-6 text-xl md:text-1xl  md:leading-7 text-[#002A47] font-medium">
            5. Accuracy of materials
          </p>
          <p className="mt-3 md:mt-3 text-xlg md:text-center  md:text-xlg text-[#476D85]">
            The materials appearing on Sustain&apos;s website could include
            technical, typographical, or photographic errors. Sustain does not
            warrant that any of the materials on its website are accurate,
            complete or current. Sustain may make changes to the materials
            contained on its website at any time without notice. However Sustain
            does not make any commitment to update the materials.
          </p>
          <p className="self-center mt-6 text-xl md:text-1xl md:leading-7 text-[#002A47] font-medium">
            6. Links
          </p>
          <p className="mt-3 md:mt-3 text-xlg md:text-center  md:text-xlg text-[#476D85]">
            Sustain has not reviewed all of the sites linked to its website and
            is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by Sustain of the
            site. Use of any such linked website is at the user&apos;s own risk.
          </p>
          <p className="self-center mt-6 text-xl md:text-1xl md:leading-7 text-[#002A47] font-medium">
            7. Modifications
          </p>
          <p className="mt-3 md:mt-3 text-xlg md:text-center  md:text-xlg text-[#476D85]">
            Sustain may revise these terms of service for its website at any
            time without notice. By using this website you are agreeing to be
            bound by the then current version of these terms of service.
          </p>
          <p className="self-center mt-6 text-xl md:text-1xl md:leading-7 text-[#002A47] font-medium">
            8. Governing Law
          </p>
          <p className="mt-3 md:mt-3 text-xlg md:text-center  md:text-xlg text-[#476D85]">
            These terms and conditions are governed by and construed in
            accordance with the laws of Lagos, Nigeria and you irrevocably
            submit to the exclusive jurisdiction of the courts in that State or
            location.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
