import { useLocation } from "react-router-dom";

const UserProfile = () => {
    const { state } = useLocation();
    console.log(state);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Profile</h1>
                {
                    state ? (<div className="space-y-4">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-700">Name</h2>
                            <p className="text-gray-600">{state?.name || "Not provided"}</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-700">Email</h2>
                            <p className="text-gray-600">{state?.email || "Not provided"}</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-700">City</h2>
                            <p className="text-gray-600">{state?.city || "Not provided"}</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-700">Country</h2>
                            <p className="text-gray-600">{state?.country || "Not provided"}</p>
                        </div>
                    </div>) : (
                        <p className="text-gray-600"> No Profile </p>
                    )
                }
            </div>
        </div>
    );
};

export default UserProfile;
