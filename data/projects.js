export const projects = [
  {
    slug: "fpso-mystras",
    name: "FPSO Mystras",
    category: "fpso",
    categories: ["fpso", "offshore"],
    summary: "Topside and engine-room rehabilitation, a DCS and E&I upgrade, and fore-peak tank steel repairs.",
    description:
      "FPSO Mystras covers rehabilitation and upgrade of an existing floating production unit: two work packages and structural repair of the fore-peak tank.",
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
    summary: "Detailed engineering for a jet fuel and diesel tank farm and its transfer facilities.",
    description:
      "Hawax covers detailed engineering for a jet fuel and diesel tank farm and its transfer facilities.",
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
    summary: "Project management consultancy for refinery brownfield work, from engineering coordination through commissioning assistance.",
    description:
      "Bushehr Refinery is a project management consultancy for brownfield work: coordination, tender engineering and commissioning assistance.",
    scope: [
      "Project planning, monitoring and overall project management consultancy.",
      "Tender documentation, including process diagrams, datasheets, specifications and bills of quantities.",
      "Coordination of process, mechanical, piping, electrical, instrumentation, civil and structural deliverables.",
      "Technical bid evaluation support.",
      "Assistance during pre-commissioning and commissioning.",
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
