"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";



export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create store modal"
      description="Add new items sss"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Next createstore form
    </Modal>
  );
};
