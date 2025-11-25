import { useState } from 'react';
import type {
  CallbackFormData,
  MeasurementFormData,
  DirectorMessageFormData,
} from '../types/forms';

export const useFormSubmission = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setLoading(false);
    setSuccess(false);
    setError(null);
  };

  const submitMeasurement = async (data: MeasurementFormData): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      // TODO: Заменить на реальный API вызов
      console.log('Submitting measurement form:', data);
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSuccess(true);
      return true;
    } catch {
      setError('Произошла ошибка при отправке формы');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const submitCallback = async (data: CallbackFormData): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      // TODO: Заменить на реальный API вызов
      console.log('Submitting callback form:', data);
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSuccess(true);
      return true;
    } catch {
      setError('Произошла ошибка при отправке формы');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const submitDirectorMessage = async (data: DirectorMessageFormData): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      // TODO: Заменить на реальный API вызов
      console.log('Submitting director message:', data);
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSuccess(true);
      return true;
    } catch {
      setError('Произошла ошибка при отправке письма');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    success,
    error,
    submitMeasurement,
    submitCallback,
    submitDirectorMessage,
    reset,
  };
};
