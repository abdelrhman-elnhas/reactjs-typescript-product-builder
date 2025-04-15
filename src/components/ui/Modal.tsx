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
        className="relative z-50 mt-5 "
      >
        {/* Backdrop */}
        <div className="fixed inset-0 transition-opacity bg-black/30 backdrop-blur-sm" />

        {/* Modal container */}
        <div className="fixed inset-0 flex items-center justify-center w-screen h-full p-4 overflow-y-auto">
          <DialogPanel className="w-full max-w-md p-6 text-left align-middle transition-all transform bg-white rounded-lg shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <DialogTitle className="text-xl font-semibold text-red-900">
                {title}
              </DialogTitle>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="mt-2">{children}</div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
