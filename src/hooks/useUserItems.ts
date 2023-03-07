import { useState } from "react";
import { toast } from "react-toastify";
import { UserItemModelT } from "../models/UserItemModelT";

type UseUserItemsT = {
    userItems: UserItemModelT[];
    getUserItemsByAddress: (userAddress: string) => Promise<UserItemModelT[] | undefined>;
};

export default function useUserItems(): UseUserItemsT {
    const [userItems, setUserItems] = useState<UserItemModelT[]>([]);

    async function getUserItemsByAddress(userAddress: string): Promise<UserItemModelT[] | undefined> {
        if (!userAddress) {
            toast.error("Please enter a valid user address");
            return;
        }

        const headers = {
            ALTURA_API_KEY: process.env.REACT_APP_API_KEY ?? "",
        };

        try {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_API_URL}user/items/${userAddress}`,
                //! Here. I  can not get by page number. It throws "Mongo DB service error".
                //! Something wrong with backend. It blocks me to add pagination.
                {
                    method: "GET",
                    headers: headers,
                }
            );

            const result = await response.json();

            setUserItems((result?.items as UserItemModelT[]) ?? []);

            if (result?.items?.length) toast.success(`Successfully ${result?.items?.length} NFTs found!`);
            else toast.info("User has no NFTs!");

            return (result.items as UserItemModelT[]) ?? [];
        } catch (error) {
            console.log(error);
            toast.error("Sometgin went wrong!");
        }

        return [];
    }

    return {
        userItems,
        getUserItemsByAddress,
    };
}
