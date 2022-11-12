import { useState } from "react";

export function useLoading() {
    const [loading, setLoading] = useState(false);
    const load = (aPromise: Promise<any>) => {
        setLoading(true);
        return aPromise.finally(() => setLoading(false));
    };
    return [loading, load] as const;
}
