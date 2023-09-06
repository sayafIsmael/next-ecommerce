"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface AlertModalProps {
  loading: boolean;
  onConfirm: () => void;
  onClose: () => void;
  isOpen: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  loading,
  onClose,
  onConfirm,
  isOpen,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    null;
  }

  return (
    <Modal
      title="Are you sure?"
      description="This action can not be undone."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex space-x-2 items-center justify-end w-full">
        <Button variant="outline" disabled={loading} onClick={onClose}>
          Cancel
        </Button>
        <Button variant="destructive" disabled={loading} onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};
