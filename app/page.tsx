import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01/navbar";
import { FaCode, FaCodeBranch } from "react-icons/fa"

export default function Home() {

    return (
        <>
            <Navbar01 logo={<FaCodeBranch />} />
        </>
    );
}
