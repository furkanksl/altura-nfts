import Header from "../components/shared/Header";
import AnimatedBackground from "../components/shared/AnimatedBackground";
import GradientButton from "../components/shared/buttons/GradientButton";
import SearchInputField from "../components/shared/SearchInputField";
import AppModalWrapper from "../components/shared/modals/AppModalWrapper";
import { useState } from "react";

function NFTsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = (state?: boolean) => setIsModalOpen(state ? state : !isModalOpen);

    return (
        <div className="w-screen h-screen bg-black flex flex-col justify-start mx-auto">
            <Header />
            <AnimatedBackground>
                <div className="flex flex-row w-full gap-5 justify-between">
                    <div className="flex flex-col gap-y-7">
                        <div className="text-4xl text-[#58d0ea] leading-10 text-[40px] md:leading-[70px] md:text-[70px] font-bold w-[500px]">
                            List NFTs <br />
                            <span className="text-[#f65ae2]"> by address</span>
                        </div>
                        <SearchInputField
                            onChange={(val) => {
                                console.log(val);
                            }}
                        />
                        <GradientButton name="Search" onClick={() => {}} />
                    </div>

                    <div className="grid grid-cols-2 gap-4 max-h-[800px] overflow-scroll pr-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number, index: number) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => setIsModalOpen(true)}
                                    className="flex flex-col bg-[#12121B]/70 overflow-hidden relative box rounded-3xl h-[300px] w-[300px]"
                                >
                                    <img
                                        src="https://i.seadn.io/gcs/files/62329e30453d2044853e6e4edf4202ca.png"
                                        alt="nft image"
                                        className="rounded-3xl "
                                    />
                                    <div className="flex flex-col gap-y-2 justify-center pl-4 items-start absolute w-full bottom-0 right-0 left-0  bg-[#12121B]/70 h-20">
                                        <div className=" text-white font-semibold text-lg  overflow-hidden whitespace-nowrap text-ellipsis max-w-[270px]">
                                            Name: Altura Penguins #10 - Istanbul
                                        </div>
                                        <div className=" text-white font-semibold">Genre : A</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </AnimatedBackground>
            <AppModalWrapper isOpen={isModalOpen} setIsOpen={handleModalOpen}>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex flex-col gap-y-3 items-start w-[800px] group h-[800px] bg-[#01f9ff]/[0.5] backdrop-blur-[5px]  rounded-3xl p-4 relative"
                >
                    <div className="mx-auto mb-2 text-white font-bold text-3xl uppercase overflow-hidden whitespace-nowrap text-ellipsis max-w-[750px] bg-[#12121B]/70 py-2 px-4 rounded-full">
                        Altura Penguins #10 - Istanbul
                    </div>
                    <div className="flex flex-row w-full gap-x-4">
                        <img
                            src="https://i.seadn.io/gcs/files/62329e30453d2044853e6e4edf4202ca.png"
                            alt="nft image"
                            className="rounded-3xl max-w-[500px]"
                        />
                        <div className="flex flex-col gap-y-3  w-full ">
                            <div className="flex text-white font-bold text-2xl bg-[#12121B]/70 py-1 px-4 rounded-lg">
                                Properties
                            </div>
                            <div className="flex flex-col w-full max-h-[200px] overflow-scroll pr-2">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number, index: number) => {
                                    return (
                                        <div className="flex flex-row w-ful text-lg">
                                            <div className="flex font-bold">Key:</div>
                                            <div className="flex">Value</div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex text-white font-bold text-2xl bg-[#12121B]/70 py-1 px-4 rounded-lg">
                                Description
                            </div>

                            <div className="flex  max-h-[200px] overflow-scroll text-lg pr-2 ">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, vel blanditiis.
                                Facere modi, nulla quasi consectetur nostrum similique id dolores saepe non impedit
                                architecto, voluptatem iste nihil molestias quae aspernatur!
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center w-full gap-x-3">
                        <div className="flex text-white font-bold text-2xl bg-[#12121B]/70 py-1 px-4 rounded-lg">
                            Owner address
                        </div>
                        <div className="flex text-white font-bold text-2x">Owner address</div>
                    </div>

                    <GradientButton
                        name="Purchase"
                        className="max-w-[500px] w-screen mx-auto mt-10 bg-[#f65ae2] hover:bg-[#f65ae2]/70"
                        onClick={() => window?.open("https://google.com", "_blank")}
                    />
                </div>
            </AppModalWrapper>
        </div>
    );
}

export default NFTsPage;
