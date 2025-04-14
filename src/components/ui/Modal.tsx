import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ReactNode } from "react";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({ isOpen, closeModal, title, children }: IProps) {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => closeModal()}
        className="relative z-50"
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />

        {/* Modal container */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 h-auto">
          <DialogPanel className="w-full max-w-lg transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300 ease-in-out sm:p-8">
            <div className="flex justify-between items-center mb-4">
              <DialogTitle className="text-xl font-semibold text-red-900">
                {title}
              </DialogTitle>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-2">{children}</div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
