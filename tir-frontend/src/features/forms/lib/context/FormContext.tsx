/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useCallback } from 'react';
import { useModal } from '@/shared/lib/hooks/useModal';
import { useFormSubmission } from '../useFormSubmission';
import type { CallbackFormData, MeasurementFormData } from '../../types/forms';

interface FormContextType {
  measurementModal: ReturnType<typeof useModal>;
  callbackModal: ReturnType<typeof useModal>;
  formSubmission: ReturnType<typeof useFormSubmission>;
  handleMeasurementSubmit: (data: MeasurementFormData) => Promise<void>;
  handleCallbackSubmit: (data: CallbackFormData) => Promise<void>;
  handleCloseMeasurement: () => void;
  handleCloseCallback: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const measurementModal = useModal();
  const callbackModal = useModal();
  const formSubmission = useFormSubmission();

  const handleMeasurementSubmit = useCallback(
    async (data: MeasurementFormData) => {
      const success = await formSubmission.submitMeasurement(data);
      if (success) {
        setTimeout(() => {
          measurementModal.close();
          formSubmission.reset();
        }, 2000);
      }
    },
    [formSubmission, measurementModal]
  );

  const handleCallbackSubmit = useCallback(
    async (data: CallbackFormData) => {
      const success = await formSubmission.submitCallback(data);
      if (success) {
        setTimeout(() => {
          callbackModal.close();
          formSubmission.reset();
        }, 2000);
      }
    },
    [formSubmission, callbackModal]
  );

  const handleCloseMeasurement = useCallback(() => {
    measurementModal.close();
    formSubmission.reset();
  }, [measurementModal, formSubmission]);

  const handleCloseCallback = useCallback(() => {
    callbackModal.close();
    formSubmission.reset();
  }, [callbackModal, formSubmission]);

  const value: FormContextType = {
    measurementModal,
    callbackModal,
    formSubmission,
    handleMeasurementSubmit,
    handleCallbackSubmit,
    handleCloseMeasurement,
    handleCloseCallback,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
