import { PropertyModelT, UserItemModelT } from "../../../models/UserItemModelT";
import GradientButton from "../buttons/GradientButton";
import AppModalWrapper from "./AppModalWrapper";

type NFTDetailModalPropsT = {
    userItem?: UserItemModelT;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

function NFTDetailModal(props: NFTDetailModalPropsT) {
    return (
        <AppModalWrapper isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col gap-y-3 overflow-scroll mx-10 items-start max-w-[800px] max-h-[600px] md:max-h-min group bg-[#01f9ff]/[0.5] backdrop-blur-[5px]  rounded-3xl p-4 relative"
            >
                <div className="mx-auto mb-2 h-14 text-white font-bold text-base text-center lg:text-3xl uppercase md:overflow-hidden md:whitespace-nowrap md:text-ellipsis max-w-[750px] bg-[#12121B]/70 py-2 px-4 rounded-lg w-full">
                    {props.userItem?.name}
                </div>
                <div className="flex flex-col md:flex-row w-full gap-y-4 md:gap-x-4 ">
                    {props.userItem?.isVideo ? (
                        <video
                            src={props.userItem.imageUrl}
                            autoPlay={false}
                            controls={true}
                            className="rounded-3xl max-w-[250px] md:max-w-[500px] mx-auto md:mx-0"
                        />
                    ) : (
                        <img
                            src={props.userItem?.imageUrl}
                            alt="nft image"
                            className="rounded-3xl max-w-[250px] md:max-w-[500px]"
                        />
                    )}
                    <div className="flex flex-col gap-y-3  w-full ">
                        <div className="flex text-white font-bold text-base lg:text-2xl bg-[#12121B]/70 py-1 px-4 rounded-lg">
                            Properties
                        </div>
                        <div className="flex flex-col w-full max-h-[200px] overflow-scroll pr-2">
                            {props.userItem?.properties.map((item: PropertyModelT, index: number) => {
                                return (
                                    <div key={index} className="flex flex-row w-ful text-lg">
                                        <div className="flex font-bold">{item.name}:</div>
                                        <div className="flex">{" " + item.value}</div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex text-white font-bold text-base lg:text-2xl bg-[#12121B]/70 py-1 px-4 rounded-lg">
                            Description
                        </div>

                        <div className="flex  max-h-[200px] overflow-scroll text-lg pr-2 ">
                            {props.userItem?.description}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-start gap-y-2 md:flex-row items-center w-full md:gap-x-3">
                    <div className="flex text-white font-bold text-2xl bg-[#12121B]/70 py-1 px-4 rounded-lg w-full md:w-auto">
                        Owner address
                    </div>
                    {/* //* creatorAddress and ownerAddress is equal. No need another api call by collectionAddress */}
                    <div className="text-white font-bold text-2x mr-auto overflow-hidden whitespace-nowrap text-ellipsis max-w-[200px] md:max-w-max">
                        {props.userItem?.creatorAddress}
                    </div>
                </div>

                <GradientButton
                    name="Purchase"
                    className="max-w-[200px] w-screen mx-auto mt-10 h-10 md:h-auto bg-[#f65ae2] hover:bg-[#f65ae2]/70"
                    onClick={() =>
                        window?.open(
                            //! Here also can be checked by chain id. So 'bsc' should be dynamic according to chain id
                            `https://opensea.io/assets/bsc/${props.userItem?.collectionAddress}/${props.userItem?.tokenId}`,
                            "_blank"
                        )
                    }
                />
            </div>
        </AppModalWrapper>
    );
}

export default NFTDetailModal;
