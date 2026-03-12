export interface Certification {
  name: string;
  description: string;
  image: string;
  pdf: string;
}

export const certifications: Certification[] = [
  {
    name: 'ISO 9001',
    description: 'Quality Management System',
    image: '/assets/images/certificates/iso9001.png',
    pdf: '/assets/pdfs/iso9001.pdf',
  },
  {
    name: 'AS9100',
    description: 'Aerospace Quality Standard',
    image: '/assets/images/certificates/as9100.png',
    pdf: '/assets/pdfs/as9100.pdf',
  },
  {
    name: 'ISO 13485',
    description: 'Medical Devices Quality',
    image: '/assets/images/certificates/iso13485.png',
    pdf: '/assets/pdfs/iso13485.pdf',
  },
  {
    name: 'ITAR',
    description: 'Registered Defense Contractor',
    image: '/assets/images/certificates/itar.png',
    pdf: '/assets/pdfs/itar.pdf',
  },
  {
    name: 'RoHS Compliance',
    description: 'Restriction of Hazardous Substances Directive',
    image: '/assets/images/certificates/rohs.png',
    pdf: '/assets/pdfs/rohs.pdf',
  },
  {
    name: 'FDA Registered Facility',
    description: 'Registered for medical device manufacturing',
    image: '/assets/images/certificates/fda.png',
    pdf: '/assets/pdfs/fda.pdf',
  },
];

