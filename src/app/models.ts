export interface Employee {
  name: string;
  id: number;
  role: string;
  experience: number;
  company?: string;
  location?: string;
  onSite?: boolean;
}
