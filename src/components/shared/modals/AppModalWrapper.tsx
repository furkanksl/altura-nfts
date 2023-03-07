import { ReactNode } from "react";

type AppModalWrapperPropsT = {
    children?: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

function AppModalWrapper(props: AppModalWrapperPropsT) {
    return props.isOpen ? (
        <div
            onClick={() => props.setIsOpen(false)}
            className="absolute top-0 right-0 left-0 bottom-0 bg-black/60 z-50 w-screen h-screen flex justify-center items-center"
        >
            {props.children}
        </div>
    ) : null;
}

export default AppModalWrapper;
