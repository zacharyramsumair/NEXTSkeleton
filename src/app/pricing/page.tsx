import { auth } from '@/auth';
import ButtonCustomerPortal from '@/components/ButtonCustomerPortal';
import Pricing from '@/components/Pricing';
import { redirect } from 'next/navigation';

export default async function Page() {
    const session = await auth()
    const user = session?.user;
  if (!user) return redirect("/");

    return (
        <>
            <header className="p-4 flex justify-end max-w-7xl mx-auto">
                <ButtonCustomerPortal session={session} />
            </header>

            <main className="bg-base-200 min-h-screen">
                <Pricing session={session} />
            </main>
        </>
    );
}