import classNames from "classnames";

type PropsT = {
    onClick: () => unknown;
    name: string;
    className?: string;
};

function GradientButton(props: PropsT) {
    return (
        <div
            onClick={props.onClick}
            className={classNames(
                "relative flex cursor-pointer py-2.5 px-4 group text-white font-medium rounded-full bg-[#1F1F3E] md:overflow-hidden max-w-[200px]",
                props.className
            )}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="124"
                height="133"
                fill="none"
                viewBox="0 0 124 133"
                className="absolute -top-10 transition-transform group-hover:translate-x-3 duration-200"
            >
                <g filter="url(#filter0_f_581_465)">
                    <path
                        fill="#EF28FB"
                        d="M90.194 38.06C78.734 51.28 83.99 57.34 75.38 62.414 66.772 67.49 35.89 105.281 32.504 99.54c-3.384-5.742 20.92-32.804 21.72-47.284 5.804-22.816 43.263-22.61 35.97-14.197z"
                    ></path>
                </g>
                <defs>
                    <filter
                        id="filter0_f_581_465"
                        width="122.951"
                        height="131.295"
                        x="0.181"
                        y="0.836"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                        <feGaussianBlur result="effect1_foregroundBlur_581_465" stdDeviation="16"></feGaussianBlur>
                    </filter>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="99"
                height="76"
                fill="none"
                viewBox="0 0 99 76"
                className="absolute -top-10 -left-6 transition-transform group-hover:scale-[2] duration-200 group-hover:translate-x-1"
            >
                <g filter="url(#filter0_f_581_466)">
                    <path
                        fill="#33A9FF"
                        d="M70.871 34.394c-8.992 3.224-8.207 7.792-13.624 7.792-5.418 0-30.247 9.77-30.247 5.912 0-3.859 18.802-10.211 23.162-17.198 8.992-9.674 26.431 1.442 20.709 3.494z"
                    ></path>
                </g>
                <defs>
                    <filter
                        id="filter0_f_581_466"
                        width="99"
                        height="76"
                        x="0"
                        y="0"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                        <feGaussianBlur result="effect1_foregroundBlur_581_466" stdDeviation="13.5"></feGaussianBlur>
                    </filter>
                </defs>
            </svg>
            <span className="relative z-10 mx-auto text-base md:text-2xl">{props.name}</span>
        </div>
    );
}

export default GradientButton;
