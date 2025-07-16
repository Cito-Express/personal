import { InputWithIcon, ButtonWithLoader } from "@/components/ui";
import { AuthLayout } from "@/layouts";
import { User, Mail, Lock, Phone } from "lucide-react";
import Link from "next/link";

function Register() {
  return (
    <>
      <AuthLayout
        title="Create a personal account"
        description="Please enter your details to create an account to access our services and get real-time updates on all your shipments."
      >
        <form className="space-y-4">
          <InputWithIcon
            icon={<User size={20} />}
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
          />
          <InputWithIcon
            icon={<Mail size={20} />}
            label="Email Address"
            type="email"
            placeholder="Enter your email address"
          />
          <InputWithIcon
            icon={<Phone size={20} />}
            label="Phone Number"
            type="text"
            placeholder="Enter your phone number"
          />
          <InputWithIcon
            icon={<Lock size={20} />}
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
            <div className="flex gap-2">
              <input type="checkbox" id="terms" className="accent-primary" />
              <label htmlFor="terms" className="text-muted">
                I agree to the{" "}
                <Link href="/terms" className="text-primary font-medium ">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary font-medium ">
                  Privacy Policy
                </Link>
              </label>
            </div>
          <ButtonWithLoader
            initialText="Create account"
            loadingText="Creating account..."
            loading={false}
            className="w-full btn-primary mt-6 h-10 rounded-lg"
          />
          <div className="center">
            <p className="text-muted">
              Already have an account?{" "}
              <Link href="/" className="text-primary font-medium ">
                Login
              </Link>
            </p>
          </div>
        </form>
      </AuthLayout>
    </>
  );
}

export default Register;
