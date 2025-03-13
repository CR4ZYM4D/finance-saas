import { SignIn , ClerkLoaded , ClerkLoading } from '@clerk/nextjs'
import Image from "next/image"
import {Loader2} from "lucide-react" //from shadcn

export default function signUpPage() {
  return (
    
    <div className = "min-h-screen h-full grid grid-cols-1 lg:grid-cols-2">
    	<div className = "h-full lg:flex flex-col items-center justify-center px-4">
			<div className="text-center space-y-4 pt-16">
				<h1 className = "font-bold text-3xl">
					Welcome Back! Sign In or Sign Up to get started 
				</h1>
			</div>
			<div className = "flex-items-center justify-center mt-8">
				<ClerkLoaded>
					<SignIn/>
				</ClerkLoaded>
				<ClerkLoading>
					<Loader2 className = "animate-spin"></Loader2>
				</ClerkLoading>
			</div>
			
		</div>
		<div className = "h-full hidden bg-blue-300 lg:flex items-center justify-center">
			<Image src="/logo.svg" height = {200} width={200} alt = "logo"></Image>
		</div>
    </div>
  
  );

}