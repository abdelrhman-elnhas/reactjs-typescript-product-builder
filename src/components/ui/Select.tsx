import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { ICategory } from "../../interfaces";

interface IProps {
  data: ICategory[];
  selected: ICategory;
  setSelected: (selected: ICategory) => void;
}

export default function Select({ data, selected, setSelected }: IProps) {
  return (
    <div className="relative w-full">
      <label className="text-sm text-gray-600" htmlFor="title">
        Product Category
      </label>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <ListboxButton
            className={clsx(
              "relative block w-full rounded-md border border-gray-300 bg-white py-3 pr-10 pl-3 text-left text-sm text-gray-900",
              "focus:border-red-900 focus:outline-none focus:ring-1 focus:ring-red-900"
            )}
          >
            <span className="block truncate">{selected.name}</span>
            <ChevronDownIcon
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
              aria-hidden="true"
            />
          </ListboxButton>
          <ListboxOptions
            className={clsx(
              "absolute z-[100] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg",
              "ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            )}
          >
            {data.map((dataItem: ICategory) => (
              <ListboxOption
                key={dataItem.name}
                value={dataItem}
                className={({ active }) =>
                  clsx(
                    active ? "bg-red-900 text-white" : "text-gray-900",
                    "relative cursor-default select-none py-2 pl-3 pr-9"
                  )
                }
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={clsx(
                        selected ? "font-semibold" : "font-normal",
                        "block truncate"
                      )}
                    >
                      {dataItem.name}
                    </span>
                    {selected ? (
                      <span
                        className={clsx(
                          active ? "text-white" : "text-red-900",
                          "absolute inset-y-0 right-0 flex items-center pr-4"
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
