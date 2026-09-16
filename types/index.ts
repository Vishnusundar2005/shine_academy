export type StudentClass = "Class 11" | "Class 12";

export type EducationBoard = "CBSE" | "State Board" | "ICSE";

export interface LeadFormData {
  parentName: string;
  whatsappNumber: string;
  studentClass: StudentClass;
  board: EducationBoard;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName?: string;
}
