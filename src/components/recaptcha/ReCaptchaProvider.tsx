'use client'
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface ReCaptchaProviderProps {
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const ReCaptchaProvider = ({ setToken }: ReCaptchaProviderProps) => {
    const [recaptchaError, setRecaptchaError] = useState(false);
    const handleChange = (token: string | null) => {
        if (token) {
            setToken(token);
            setRecaptchaError(false);
        } else {
            setRecaptchaError(true);
        }
    };
    return (
        <div>
            <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={handleChange}
            />
            {recaptchaError && (
                <p className="text-red-500 text-sm mt-2">Please complete the ReCAPTCHA challenge.</p>
            )}
        </div>
    )
}

export default ReCaptchaProvider