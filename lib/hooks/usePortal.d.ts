import { ReactNode } from "react";
declare function usePortal(id?: string): (element: ReactNode) => import("react").ReactPortal | undefined;
export default usePortal;
