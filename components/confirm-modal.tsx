"use client";

import * as AlertDialog from '@radix-ui/react-alert-dialog';

interface ConfirmModalProps {
  children: React.ReactNode;
  onConfirm: () => void;
  disabled?: boolean;
  header: string;
  description?: string;
};

export const ConfirmModal = ({
  children,
  onConfirm,
  disabled,
  header,
  description,
}: ConfirmModalProps) => {
  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <AlertDialog.Root>
  <AlertDialog.Trigger asChild>
    {children}
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>
      {header}
    </AlertDialog.Title>
    <AlertDialog.Description>
      {description}
    </AlertDialog.Description>
    <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action
            disabled={disabled}
            onClick={handleConfirm}
          >
            Confirm
          </AlertDialog.Action>
    
  </AlertDialog.Content>
</AlertDialog.Root>
  );
};