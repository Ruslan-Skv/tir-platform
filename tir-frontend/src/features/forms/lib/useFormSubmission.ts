import { useState } from 'react';
import type { CallbackFormData, MeasurementFormData } from '../types/forms';

export const useFormSubmission = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitMeasurement = async (data: MeasurementFormData): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Запись на замер:', data);

      const existingRequests = JSON.parse(localStorage.getItem('measurement_requests') || '[]');
      const newRequest = {
        ...data,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
        status: 'new',
      };
      localStorage.setItem(
        'measurement_requests',
        JSON.stringify([...existingRequests, newRequest])
      );

      setSuccess(true);
      return true;
    } catch {
      setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const submitCallback = async (data: CallbackFormData): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Заказ обратного звонка:', data);

      const existingCallbacks = JSON.parse(localStorage.getItem('callback_requests') || '[]');
      const newCallback = {
        ...data,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
        status: 'new',
      };
      localStorage.setItem(
        'callback_requests',
        JSON.stringify([...existingCallbacks, newCallback])
      );

      setSuccess(true);
      return true;
    } catch {
      setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setLoading(false);
    setSuccess(false);
    setError(null);
  };

  return {
    loading,
    success,
    error,
    submitMeasurement,
    submitCallback,
    reset,
  };
};
