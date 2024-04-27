"use client";

// ReactJS
import { Fragment, useState } from "react";

// HeadlessUI
import { Dialog, Transition } from "@headlessui/react";

// Components
import { BtnSecondary } from "@components/Buttons";
import NavHeader from "@components/NavHeader";
import SliderBar from "@components/SliderBar";

// Shopify
import { XIcon } from "@shopify/polaris-icons";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    // States
    const [open, setOpen] = useState<boolean>(false);

    return (
        <main>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <button type="button" className="-m-2.5 p-2.5" onClick={() => setOpen(false)}>
                                            <span className="sr-only">Close sidebar</span>
                                            <BtnSecondary icon={XIcon} accessibilityLabel="Close sidebar" />;
                                        </button>
                                    </div>
                                </Transition.Child>
                                
                                <SliderBar />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <aside className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                <SliderBar />
            </aside>

            <aside className="lg:pl-72">
                <NavHeader setOpen={setOpen} />

                <section className="flex flex-col items-center justify-between p-6 h-[calc(100vh-4rem)] w-full">
                    {children}
                </section>
            </aside>
        </main>
    );
}