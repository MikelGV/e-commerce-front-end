import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

//import { userService } from "services";

export function Layout({children}) {
    // const router = useRouter();

    // useEffect(() => {
    //     if (userService.userValue) {
    //         router.push('/');
    //     }
    // }, []);
    
    return (
        <div className="col-md-6 offset-md-3 mt-5">
            {children}
        </div>
    );
}
