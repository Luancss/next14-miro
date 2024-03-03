"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";

interface ConfirmModalProps {
  children: React.ReactNode;
  onConfirm: () => void;
  disabled?: boolean;
  header: string;
  description?: string;
}

export const ConfirmModal = ({
  children,
  onConfirm,
  disabled,
  header,
  description,
}: ConfirmModalProps) => {
  const handleConfirm = () => {
    
  }


  return (
    <AlertDialog>
      <AlertDialogTrigger>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>
          {header}
        </AlertDialogTitle>
        <AlertDialogDescription>
          {description}
        </AlertDialogDescription>
        <AlertDialogCancel>
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction
          disabled={disabled}
          onClick={onConfirm}
        >
          Confirm
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  )
}


