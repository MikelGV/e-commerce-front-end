import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form";

import { Link } from "../../components/link";
import {Layout} from "../../components/account/layout";

export default function Login() {
    const router = useRouter();
    return(
        <Layout>
            <div className="card">
                <h4 className="card-body">Login</h4>
                <div className="card-header">
                    <form action="">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="email" className={`form-control`}/>
                            <div className="invalid-feedback"></div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}