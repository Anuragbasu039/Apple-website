import Image from "next/image";

export default function VideoFrame() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
            {/* Heading */}
            <h1 className="text-white text-3xl font-bold mb-6">Welcome to Mac Experience</h1>

            {/* Image */}
            <Image
                src="/buildai.png" // Replace with your actual image source
                alt="Mac Logo"
                width={800}
                height={800}
                className="mb-6"
            />

            {/* Full-Screen Video Frame */}
            <div className="relative w-full h-screen bg-black overflow-hidden mt-6 rounded-3xl">
                <video
                    src="https://www.apple.com/105/media/us/macbook-pro/2024/00a46e4c-adb6-4301-aa38-917d219bff07/anim/welcome-hero/large.mp4" // Replace with your actual video source
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}