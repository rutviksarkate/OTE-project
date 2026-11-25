export const projects = [
  {
    slug: "fpso-mystras",
    name: "FPSO Mystras",
    category: "fpso",
    categories: ["fpso", "offshore"],
    summary: "Topside and engine-room rehabilitation, a DCS and E&I upgrade, and fore-peak tank steel repairs for NNPC.",
    place: "Okono and Okpoho fields, about 50 km offshore Port Harcourt",
    description:
      "The Mystras FPSO receives production from the Okono and Okpoho fields in block OPL 91, about 50 km offshore Port Harcourt, Nigeria, in approximately 70 m of water. Okono is produced from subsea wells. The Okpoho wells are mounted on a production platform. The work for NNPC is rehabilitation and upgrade of the existing unit: two work packages and structural repair of the fore-peak tank.",
    blocks: [
      {
        title: "Package 25 — Topside and engine room",
        text: "Rehabilitation of topside and engine-room equipment, including pumps, compressors and water-treatment systems.",
        points: [
          "Cargo pumps",
          "Fresh and potable water",
          "Fire water",
          "Sewage treatment",
          "Sea water",
          "Marine gas oil",
          "Air compressor",
          "Oily-water separator",
          "Bilge system",
          "HVAC fans",
          "Cold storage",
          "Chemical injection pumps",
        ],
      },
      {
        title: "Fore-peak tank repairs",
        text: "A site inspection assessed leakage and corrosion in the fore-peak tank. About 150 tons of steel are identified for replacement, subject to verification after a detailed ultrasonic thickness survey. Deteriorated plating is replaced with new sections by certified welding.",
        points: [
          "Steel renewal in the fore-peak tank",
          "Bottom-plate crack repair using the CLAM cofferdam method, with ROV support",
          "Renewal of damaged plates, stiffeners and brackets",
          "Installation and alignment of internal structural members",
          "Interface management between the fabrication yard, the supply vessel and FPSO operations",
          "Quality control, non-destructive testing, inspection and documentation",
        ],
      },
      {
        title: "Package 26 — DCS, instrumentation and E&I",
        text: "Upgrade of the distributed control system, instrumentation, and electrical and instrumentation systems, from supply through installation, integration, commissioning and start-up.",
        points: [
          "Supply of DCS controllers, I/O racks, marshaling cabinets and the associated materials",
          "Attestation of procured parts, offshore shipment, installation, commissioning and start-up",
          "Integration of marine, process control, fire and gas, boiler and topside electrical and instrumentation units, with function testing",
          "Emergency shutdown and start-up of the vessel for DCS testing, with two years of DCS spare parts",
          "Mobilization and demobilization of the installation team",
          "Replacement scope for instrumentation, high-voltage and low-voltage electrical equipment, fire and gas devices, shutdown and control valves, and telecom and lighting fittings",
        ],
      },
    ],
    scope: [
      "Package 25: rehabilitation of topside and engine-room equipment, including cargo, firewater, seawater, sewage, compressed air, oily-water, HVAC and chemical-injection systems.",
      "Package 26: upgrade of the distributed control system, instrumentation and electrical and instrumentation systems, through supply, installation, integration and commissioning support.",
      "Fore-peak tank repairs: replacement of deteriorated steel and repair of bottom-plate damage, with inspection and documentation.",
    ],
    disciplines: ["Mechanical", "Instrumentation and Control", "Electrical", "Structural", "Naval Architecture"],
    image: "/images/company/mystras-deck.jpg",
    imageAlt: "Deck of FPSO Mystras during a shipyard period.",
    imageCaption: "Deck during a shipyard period.",
  },
  {
    slug: "hawax",
    name: "Hawax",
    category: "onshore",
    categories: ["onshore"],
    summary: "Detailed engineering for a jet fuel and diesel tank farm and its transfer facilities for Hawax Corporation.",
    place: "Kurdistan, Iraq · 2025",
    description:
      "Hawax is detailed engineering for Hawax Corporation: a jet fuel and diesel storage tank farm and its transfer facilities in Kurdistan, Iraq. The engagement is recorded for 2025.",
    scope: [
      "Storage tanks, transfer pipelines, pumps, and loading and unloading facilities.",
      "Engineering drawings, datasheets, specifications and design calculations.",
      "Civil, structural, mechanical, piping, electrical, instrumentation and fire-protection design.",
      "Material take-offs and procurement support documents.",
      "Engineering support during construction and commissioning.",
    ],
    disciplines: ["Process", "Mechanical", "Piping", "Structural", "Electrical", "Instrumentation and Control"],
    image: "",
    imageAlt: "",
    imageCaption: "",
  },
  {
    slug: "bushehr-refinery",
    name: "Bushehr Refinery",
    category: "refinery",
    categories: ["refinery", "onshore"],
    summary: "Project management consultancy, shutdown support and a CDU furnace replacement at Bushehr Refinery.",
    place: "Bushehr, Iran",
    description:
      "Three engagements for Energy Shab-He Ghare Passargad Co. Ltd. at Bushehr Refinery, Iran. The work is consultancy, inspection and engineering support, not a prime EPC contract.",
    blocks: [
      {
        title: "Project management consultancy, 2023–2025",
        text: "Project management consultancy for refinery operations and turnaround support.",
        points: [
          "Project planning, monitoring and overall project management consultancy.",
          "Tender documentation, including process diagrams, datasheets, specifications and bills of quantities.",
          "Coordination of process, mechanical, piping, electrical, instrumentation, civil and structural deliverables.",
          "Technical bid evaluation support.",
          "Assistance during pre-commissioning and commissioning.",
        ],
      },
      {
        title: "Shutdown and turnaround support, 2017–2019",
        text: "Detailed engineering, non-destructive testing, inspection of static and rotating equipment, process-piping integrity assessment and mechanical integrity evaluation.",
      },
      {
        title: "CDU furnace replacement, 2022",
        text: "Feasibility study, detailed engineering, furnace replacement, installation, tie-ins, commissioning, start-up and handover.",
      },
    ],
    scope: [
      "Project management consultancy, 2023–2025: planning, tender engineering, discipline coordination, technical bid evaluation, and pre-commissioning and commissioning assistance.",
      "Shutdown and turnaround support, 2017–2019: detailed engineering, non-destructive testing, equipment inspection and integrity assessment.",
      "CDU furnace replacement, 2022: feasibility, detailed engineering, installation, tie-ins, commissioning, start-up and handover.",
    ],
    disciplines: ["Process", "Mechanical", "Piping", "Electrical", "Instrumentation and Control", "Construction and Project Management"],
    image: "",
    imageAlt: "",
    imageCaption: "",
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug) || null;
}
