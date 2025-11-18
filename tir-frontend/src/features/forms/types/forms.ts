export interface CallbackFormData {
  name: string;
  phone: string;
  email?: string;
  preferredTime: string;
  comment?: string;
}

export interface MeasurementFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  productType: string;
  comments?: string;
}

export interface FormSubmissionState {
  loading: boolean;
  success: boolean;
  error: string | null;
}
