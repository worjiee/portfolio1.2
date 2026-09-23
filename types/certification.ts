export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  logo?: string;
  previewImage?: string;
  proofPdf?: string;
  isPlaceholder?: boolean;
}
