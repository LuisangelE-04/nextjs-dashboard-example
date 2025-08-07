'use client';

import { TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import DeleteConfirmationModal from './delete-confirmation-modal';

interface DeleteInvoiceButtonProps {
  id: string;
}

export default function DeleteInvoiceButton({ id }: DeleteInvoiceButtonProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button 
        onClick={() => setShowModal(true)} 
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>

      <DeleteConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        invoiceId={id}
      />
    </>
  );
}