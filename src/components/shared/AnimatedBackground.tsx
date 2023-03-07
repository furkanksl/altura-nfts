import { ReactNode } from "react";

function AnimatedBackground({ children }: { children?: ReactNode }) {
    return (
        <div className="flex flex-col w-full px-10 pt-10 relative overflow-scroll  h-screen">
            <div className="flex fixed right-10 left-10 z-40 max-w-[1460px] mx-auto overflow-scroll">{children}</div>
            <div className="relative z-30 ml-auto right-0 max-w-[1000px] overflow-hidden">
                <div className="animate-bounce-slow md:top-[10rem] top-[10rem] right-[3rem] md:-right-[4rem] -z-20 h-30">
                    <span>
                        <span className="box-border block bg-none opacity-100 border-none m-0 p-0 max-w-full">
                            <img
                                className="block max-w-full bg-none m-0 p-0 opacity-100"
                                alt=""
                                aria-hidden="true"
                                src="https://www.alturanft.com/_next/image?url=%2Faltura3d.png&w=3840&q=100"
                            />
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AnimatedBackground;
