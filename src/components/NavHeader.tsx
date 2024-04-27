export default function NavHeader({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setOpen(true)}>
                <span className="sr-only">Open sidebar</span>
            </button>

            <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />
        </header>
    );
}