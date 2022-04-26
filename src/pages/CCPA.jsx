import NavBarMedicare from "../medicare/NavBarMedicare";

export default function CCPA() {
  const info = [
    {
      category: "A. Identifiers. ",
      examples:
        "A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, Social Security number, driver's license number, passport number, or other similar identifiers. ",
      collected: "YES",
    },

    {
      category: "B. Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e)). ",
      examples:
        "A name, signature, Social Security number, physical characteristics or description, address, telephone number, passport number, driver's license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, or any other financial information, medical information, or health insurance information. Some personal information included in this category may overlap with other categories. ",
      collected: "YES",
    },

    {
      category: "C. Protected classification characteristics under California or federal law. ",
      examples:
        "Age (40 years or older), race, color, ancestry, national origin, citizenship, religion or creed, marital status, medical condition, physical or mental disability, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, veteran or military status, genetic information (including familial genetic information). ",
      collected: "YES",
    },

    {
      category: "D. Commercial information.  ",
      examples:
        "Records of personal property, products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies. ",
      collected: "YES",
    },

    {
      category: "E. Biometric information. ",
      examples:
        "Genetic, physiological, behavioral, and biological characteristics, or activity patterns used to extract a template or other identifier or identifying information, such as, fingerprints, faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other physical patterns, and sleep, health, or exercise data. ",
      collected: "NO",
    },

    {
      category: "F. Internet or other similar network activity. ",
      examples:
        "Browsing history, search history, information on a consumer's interaction with a website, application, or advertisement. ",
      collected: "YES",
    },

    {
      category: "G. Geolocation data.  ",
      examples:
        "Physical location or movements. ",
      collected: "YES",
    },

    {
      category: "H. Sensory data.  ",
      examples:
        "Audio, electronic, visual, thermal, olfactory, or similar information. ",
      collected: "NO",
    },

    {
      category: "I. Professional or employment-related information. ",
      examples:
        "Current or past job history or performance evaluations.  ",
      collected: "NO",
    },

    {
      category: "J. Non-public education information (per the Family Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part 99)).  ",
      examples:
        "Education records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records.  ",
      collected: "NO",
    },

    {
      category: "K. Inferences drawn from other personal information.  ",
      examples:
        "Profile reflecting a person's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.  ",
      collected: "NO",
    },
    // More people...
  ];

  return (
    <div>
      <NavBarMedicare />

      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                UsMedicare Quotes{" "}
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                PRIVACY STATEMENT-CALIFORNIA{" "}
              </span>
            </h1>

            <figure>
              <img
                classname="w-full rounded-lg"
                src="https://assets.website-files.com/5dfd95f78d0e1ee3b32e0f58/5e1cc9799d6cb74627795baf_Business_img_1-p-1080.jpeg"
                alt=""
                width="{1310}"
                height="{873}"
              />
            </figure>

            <p>
              This PRIVACY NOTICE FOR CALIFORNIA RESIDENTS supplements the
              information contained in the Privacy Statement of ElifeQuotes.us
              and its subsidiaries (collectively, “we,” “us,” or “our”) and
              applies solely to visitors, users, and others who reside in the
              State of California (“consumers” or “you”). We adopt this notice
              to comply with the California Consumer Privacy Act of 2018
              (“CCPA”) and other California privacy laws. Any terms defined in
              the CCPA have the same meaning when used in this notice.{" "}
            </p>

            <p className="mt-8 text-xl text-black font-bold leading-8">
              Information We Collect
            </p>
            <p>
              We collect information that identifies, relates to, describes,
              references, is capable of being associated with, or could
              reasonably be linked, directly or indirectly, with a particular
              consumer or device (“personal information”). In particular, we
              have collected the following categories of personal information
              from consumers within the last twelve (12) months:{" "}
            </p>

            <div className="mt-8 flex flex-col">
              <div className="-my-2 -mx-4 overflow-hidden sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          >
                            Category
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Examples
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Collected
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {info.map((info) => (
                          <tr key={info.category}>
                            <td className=" px-3 py-4 text-sm text-gray-500">
                              {info.category}
                            </td>
                            <td className=" px-3 py-4 text-sm text-gray-500">
                              {info.examples}
                            </td>
                            <td className=" px-3 py-4 text-sm text-black font-bold">
                              {info.collected}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xl text-black font-bold leading-8">
              Personal information does not include:             </p>
            <ul className="list-disc"	>
              <li>Publicly available information from government records. </li>
              <li>De-identified or aggregated consumer information.  </li>
              <li>Information excluded from the CCPA's scope, like:  </li>
              <li className="list-inside">health or medical information covered by the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the California Confidentiality of Medical Information Act (CMIA) or clinical trial data; </li>
              <li className="list-inside">personal information covered by certain sector-specific privacy laws, including the Fair Credit Reporting Act (FRCA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act (FIPA), and the Driver's Privacy Protection Act of 1994.  </li>
            </ul>

            <p className="mt-8 text-xl text-black font-bold leading-8">
              We obtain the categories of personal information listed above from the following categories of sources:          </p>
            <ul className="list-disc"	>
              <li>Directly from our clients or their agents. For example, from documents that our clients provide to us related to the services for which they engage us. </li>
              <li>Indirectly from our clients or their agents. For example, through information we collect from our clients in the course of providing services to them.  </li>
              <li>Directly and indirectly from activity on our website <a href="/" className="link">(usmedicarequotes.com) </a> . For example, from submissions through our website portal or website usage details collected automatically.   </li>
              <li>From third-parties that interact with us in connection with the services we perform. For example, from government agencies when we prepare readiness assessments for projects that receive government funding. </li>

            </ul>

            <p className="mt-8 text-xl text-black font-bold leading-8">
              Use of Personal Information          </p>
            <ul className="list-disc"	>
              <li>To fulfill or meet the reason for which the information is provided.  </li>
              <li>To provide you with information, products or services that you requested. </li>
              <li>To provide you with email alerts, event registrations and other notices concerning our products or services, or events or news, that may be of interest to you. </li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collections. </li>
              <li>To improve our website and present its contents to you.  </li>
              <li>For testing, research, analysis and product development.  </li>
              <li>As necessary or appropriate to protect the rights, property or safety of us, our clients or others.  </li>
              <li>To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations. </li>
              <li>As described to you when collecting your personal information or as otherwise set forth in the CCPA.  </li>
              <li>To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by us is among the assets transferred. </li>

            </ul>

            <p className='mt-10'>
              We will not collect additional categories of personal information or use the personal information we collected for materially different, unrelated, or incompatible purposes without providing you notice.
            </p>

            <p className="mt-8 text-xl text-black font-bold leading-8">
              Sharing Personal Information
            </p>
            <p>
              Sharing Personal Information

              We may disclose your personal information to a third party for a business purpose. When we disclose personal information for a business purpose, we enter a contract that describes the purpose and requires the recipient to both keep that personal information confidential and not use it for any purpose except performing the contract. <br></br>
              In the preceding twelve (12) months, we have disclosed the following categories of personal information for a business purpose:
            </p>

            <ul className="list-disc"	>
              <li>Category A:             Identifiers.  </li>
              <li>Category B:             California Customer Records personal information categories.  </li>
              <li>Category C:             Protected classification characteristics under California or federal law.  </li>
              <li>Category D:             Commercial information.</li>
              <li>Category F:              Internet or other similar network activity </li>
              <li>Category G:             Geolocation data. </li>
            </ul>

            <p className="mt-10">
              We disclose your personal information for a business purpose to the following categories of third parties:
            </p>

            <ul className="list-disc"	>
              <li>Our affiliates. </li>
              <li>Service providers. </li>
              <li>Third parties to whom you or your agents authorize us to disclose your personal information in connection with products or services we provide to you. </li>

            </ul>
            <p className='mt-2'> In the preceding twelve (12) months, we have sold personal information. </p>

            <p className="mt-8 text-xl text-black font-bold leading-8">
              Your Rights and Choices             </p>
            <p>
              The CCPA provides consumers (California residents) with specific rights regarding their personal information. This section describes your CCPA rights and explains how to exercise those rights.
            </p>


            <p className="mt-8 text-xl text-black font-bold leading-8">
              Access to Specific Information and Data Portability Rights          </p>
            <p className='mt-2'> You have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request, we will disclose to you: </p>
            <ul className="list-disc"	>
              <li>The categories of personal information we collected about you. </li>
              <li>The categories of sources for the personal information we collected about you.  </li>
              <li>Our business or commercial purpose for collecting or selling that personal information. </li>
              <li>The categories of third parties with whom we share that personal information.  </li>
              <li>The specific pieces of personal information we collected about you (also called a data portability request). </li>
              <li>If we sold or disclosed your personal information for a business purpose, two separate lists disclosing:   </li>
              <li className="list-inside">sales, identifying the personal information categories that each category of recipient purchased; and </li>
              <li className="list-inside">disclosures for a business purpose, identifying the personal information categories that each category of recipient obtained. </li>

            </ul>

            <p className="mt-8 text-xl text-black font-bold leading-8">
              Deletion Request Rights
            </p>
            <p>
              You have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions. Once we receive and confirm your verifiable consumer request, we will delete (and direct our service providers to delete) your personal information from our records, unless an exception applies.
            </p>
            <p className="mt-2">We may deny your deletion request if retaining the information is necessary for us or our service providers to: </p>
            <ol className='list-decimal	'>
              <li> Complete the transaction for which we collected the personal information, provide a good or service that you requested, take actions reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform our contract with you. </li>
              <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.  </li>
              <li>Debug products to identify and repair errors that impair existing intended functionality. </li>
              <li> Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.  </li>
              <li> Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 seq.). </li>
              <li> Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information's deletion may likely render impossible or seriously impair the research's achievement, if you previously provided informed consent.  </li>
              <li> Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us. </li>
              <li> Comply with a legal obligation. </li>
              <li>Make other internal and lawful uses of that information that are compatible with the context in which you provided it. </li>
            </ol>

            <p className="mt-8 text-xl text-black font-bold leading-8">
              Exercising Access, Data Portability, and Deletion Rights             </p>
            <p>
              To exercise the access, data portability, and deletion rights described above, please submit a verifiable consumer request to us by either:
            </p>
            <ul className="list-disc"	>
              <li>Emailing us at <a href='mailto:jmarks@quotehound.com'>jmarks@quotehound.com </a> </li>
              <li>Mailing us at 1101 Central Expy S STE 250 Allen, TX 75013  </li>
              <li>Or by using the contact form on our website  </li>
            </ul>

            <p className='mt-2'>
              Only you or a person registered with the California Secretary of State that you authorize to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child.
            </p>

            <p className="mt-8 text-xl text-black font-bold leading-8">
              You may only make a verifiable consumer request for access or data portability twice within a 12-month period. The verifiable consumer request must:
            </p>

            <ul className="list-disc"	>
              <li>Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative. </li>
              <li>Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.  </li>
            </ul>

            <p className='mt-2'>
              We cannot respond to your request or provide you with personal information if we cannot verify your identity or authority to make the request and confirm the personal information relates to you. Making a verifiable consumer request does not require you to create an account with us. We will only use personal information provided in a verifiable consumer request to verify the requestor's identity or authority to make the request.
            </p>

            <p className="mt-8 text-xl text-black font-bold leading-8">
              Response Timing and Format
            </p>
            <p>
              We endeavor to respond to a verifiable consumer request within 45 days of its receipt. If we require more time (up to 90 days), we will inform you of the reason and extension period in writing. If you have an account with us, we will deliver our written response to that account. If you do not have an account with us, we will deliver our written response by mail or electronically, at your option. Any disclosures we provide will only cover the 12-month period preceding the verifiable consumer request's receipt. The response we provide will also explain the reasons we cannot comply with a request, if applicable. For data portability requests, we will select a format to provide your personal information that is readily useable and should allow you to transmit the information from one entity to another entity without hindrance. <br></br>

              We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded. If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request.
            </p>


            <p className="mt-8 text-xl text-black font-bold leading-8">
              Non-Discrimination <br></br>

              We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, we will not:
            </p>

            <ul className="list-disc"	>
              <li>Deny you goods or services. </li>
              <li>Charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties. </li>
              <li>Provide you a different level or quality of goods or services.  </li>
              <li>Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services.  </li>
            </ul>

            <p className="mt-8 text-xl text-black font-bold leading-8">
              Changes to Our Privacy Notice
            </p>
            <p>
              We reserve the right to amend this privacy notice at our discretion and at any time. When we make changes to this privacy notice, we will notify you by email or through a notice on our website homepage.
            </p>

            <p className="mt-8 text-xl text-black font-bold leading-8">
              Contact Information
            </p>
            <p>
              If you have any questions or comments about this notice, our Privacy Statement, the ways in which we collect and use your personal information, your choices and rights regarding such use, or wish to exercise your rights under California law, please do not hesitate to contact us at:
            </p>

            <ul className="list-disc"	>
              <li>Website: usmedicarequotes.com</li>
              <li>Email: jmarks@quotehound.com </li>
              <li>Postal Address: Address: usmedicarequotes.com
                1101 Central Expy S STE 250Allen, TX 75013 </li>
            </ul>




          </div>
        </div>
      </div>
    </div>
  );
}
