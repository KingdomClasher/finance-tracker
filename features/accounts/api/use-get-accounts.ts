import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetAccounts = () => {
    const query = useQuery({
        queryKey: ["accounts"],
        queryFn: async () => {
            const response = await client.api.accounts.$get(); // not in a try-catch cause it's not Axios

            if (!response.ok) {
                throw new Error("Failed to fetch accounts");
            }

            const { data } = await response.json();
            return data;
        }
    })
    return query;
}