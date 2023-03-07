import { useEffect, useState } from "react";
import { UserItemModelT } from "../models/UserItemModelT";

import Header from "../components/shared/Header";
import AnimatedBackground from "../components/shared/AnimatedBackground";
import GradientButton from "../components/shared/buttons/GradientButton";
import SearchInputField from "../components/shared/SearchInputField";
import useUserItems from "../hooks/useUserItems";
import NFTDetailModal from "../components/shared/modals/NFTDetailModal";
import LoadingSvgComponent from "../components/svg/LoadingSvgComponent";

function NFTsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [selectedUserItem, setSelectedUserItem] = useState<UserItemModelT>();

    const { getUserItemsByAddress, userItems } = useUserItems();

    const clearSearchInput = () => setSearchInput("");
    const handleModalOpen = (state?: boolean) => setIsModalOpen(state ? state : !isModalOpen);

    useEffect(() => {}, [userItems]);

    return (
        <div className="w-screen h-screen bg-black flex flex-col justify-start mx-auto">
            <Header />
            <AnimatedBackground>
                <div className="flex flex-col lg:flex-row w-full gap-5 justify-between">
                    <div className="flex flex-col gap-y-7">
                        <div className="text-4xl text-[#58d0ea] leading-7 text-[30px] md:leading-[70px] md:text-[70px] font-bold lg:w-[500px]">
                            List NFTs <br />
                            <span className="text-[#f65ae2]"> by address</span>
                        </div>
                        <SearchInputField value={searchInput} onChange={(val) => setSearchInput(val)} />

                        {isSearching ? (
                            <LoadingSvgComponent />
                        ) : (
                            <GradientButton
                                name="Search"
                                onClick={async () => {
                                    clearSearchInput();
                                    setIsSearching(true);
                                    //* example user address: 0xcaf45074fc329692995d812aeb099070c7fdee2b
                                    await getUserItemsByAddress(searchInput);
                                    setIsSearching(false);
                                }}
                            />
                        )}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 h-screen w-full lg:w-auto pb-[500px] lg:pb-0 overflow-scroll lg:max-h-[800px] lg:overflow-scroll pr-4 mx-auto lg:mx-0">
                        {userItems.map((item: UserItemModelT, index: number) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => {
                                        setSelectedUserItem(item);
                                        setIsModalOpen(true);
                                    }}
                                    className="flex flex-col mx-auto lg:mx-0 bg-[#12121B]/70 overflow-hidden relative box rounded-3xl h-[300px] w-[300px]"
                                >
                                    {item.isVideo ? (
                                        <video src={item.imageUrl} autoPlay={false} controls={false} />
                                    ) : (
                                        <img src={item.imageUrl} alt="nft image" className="rounded-3xl " />
                                    )}
                                    <div className="flex flex-col gap-y-2 justify-center pl-4 items-start absolute w-full bottom-0 right-0 left-0  bg-[#12121B]/70 h-20">
                                        <div className=" text-white font-semibold text-lg  overflow-hidden whitespace-nowrap text-ellipsis max-w-[270px]">
                                            Name: {item.name}
                                        </div>
                                        <div className=" text-white font-semibold">Balance : {item.userBalance}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </AnimatedBackground>

            <NFTDetailModal isOpen={isModalOpen} setIsOpen={handleModalOpen} userItem={selectedUserItem} />
        </div>
    );
}

export default NFTsPage;
