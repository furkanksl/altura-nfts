export type UserItemModelT = {
    name: string;
    description: string;
    properties: PropertyModelT[];
    tokenId: number;
    collectionAddress: string;
    chainId: number;
    royalty: number;
    creatorAddress: string;
    mintDate: string;
    stackable: boolean;
    supply: number;
    maxSupply: number;
    image: string;
    imageUrl: string;
    fileType: string;
    isVideo: boolean;
    allImages: AllImageModelT[];
    imageHash: string;
    otherImageVisibility: string;
    holders: number;
    listers: any[];
    likes: number;
    views: number;
    isListed: boolean;
    nsfw: boolean;
    isVerified: boolean;
    isSmartNFT: boolean;
    hasUnlockableContent: boolean;
    didLike: boolean;
    imageIndex: number;
    imageCount: number;
    userBalance: number;
};

export type PropertyModelT = {
    _id: string;
    name: string;
    value: string;
    static: boolean;
};

export type AllImageModelT = {
    _id: string;
    imageHash: string;
    image: string;
    fileType: string;
    isVideo: boolean;
    imageUrl: string;
};
