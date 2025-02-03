import { Hero } from '@/Components/ui/animated-hero';
import VideoPlayer from '@/Components/ui/video-player';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function Welcome({
    auth,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                {/* Main section with conditional rendering of buttons */}
                <main className="mt-6 flex flex-col items-center gap-4">
                    {/* {auth.user ? ( */}
                    {/*     <Button */}
                    {/*         type="button" */}
                    {/*         className="h-16 w-32" */}
                    {/*         onClick={() => */}
                    {/*             router.visit(route('dashboard')) */}
                    {/*         } */}
                    {/*     > */}
                    {/*         Dashboard */}
                    {/*     </Button> */}
                    {/* ) : ( */}
                    {/*     <> */}
                    {/*         <Button */}
                    {/*             type="button" */}
                    {/*             className="h-16 w-32" */}
                    {/*             onClick={() => */}
                    {/*                 router.visit(route('login')) */}
                    {/*             } */}
                    {/*         > */}
                    {/*             Sign in */}
                    {/*         </Button> */}
                    {/*         <Button */}
                    {/*             type="button" */}
                    {/*             className="h-16 w-32" */}
                    {/*             onClick={() => */}
                    {/*                 router.visit(route('register')) */}
                    {/*             } */}
                    {/*         > */}
                    {/*             Register */}
                    {/*         </Button> */}
                    {/*     </> */}
                    {/* )} */}
                    <div className="block">
                        <Hero />
                        <VideoPlayer src="https://videos.pexels.com/video-files/30333849/13003128_2560_1440_25fps.mp4" />
                    </div>
                </main>

                <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                    LaunchLane by Axioms Studio
                </footer>
            </div>
        </>
    );
}
