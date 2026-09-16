export const academyConfig = {
  name: "Shine Tuition Academy",
  shortName: "Shine",
  tagline: "Class 11 & 12 Maths Board Exam Special",
  whatsappNumber: "919840970732",
  displayPhone: "+91 98409 70732",
  phoneRaw: "+919840970732",
  websiteUrl: "https://www.shinetuitionacademy.in",
  operatingHours: "Mon – Sat · 9 AM – 9 PM",
  batchSizeMax: 30,
  professorExperience: "15 Years",
  professorTitle: "PhD Professor",
  boards: ["CBSE", "State Board", "ICSE"] as const,
  classes: ["Class 11", "Class 12"] as const,
};

export const createWhatsAppUrl = (params: {
  parentName?: string;
  whatsappNumber?: string;
  studentClass?: string;
  board?: string;
  customMessage?: string;
}) => {
  if (params.customMessage) {
    return `https://wa.me/${academyConfig.whatsappNumber}?text=${encodeURIComponent(
      params.customMessage
    )}`;
  }

  const lines = [
    `Hello ${academyConfig.name},`,
    "",
    "I would like to check the available Class 11/12 Maths batch.",
    "",
    `Parent Name: ${params.parentName || "Not specified"}`,
    `WhatsApp Number: ${params.whatsappNumber || "Not specified"}`,
    `Student Class: ${params.studentClass || "Class 11/12"}`,
    `Board: ${params.board || "CBSE / State Board / ICSE"}`,
    "",
    "Please share the batch details.",
  ];

  return `https://wa.me/${academyConfig.whatsappNumber}?text=${encodeURIComponent(
    lines.join("\n")
  )}`;
};
