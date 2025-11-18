import type { CallbackFormData, MeasurementFormData } from '../types/forms';

export interface CallbackFormProps {
  onSubmit: (data: CallbackFormData) => void;
  onCancel: () => void;
  loading?: boolean;
}

export interface MeasurementFormProps {
  onSubmit: (data: MeasurementFormData) => void;
  onCancel: () => void;
  loading?: boolean;
}

export interface SuccessMessageProps {
  title: string;
  message: string;
  onClose: () => void;
}
