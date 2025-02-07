import Image from "next/image";

export default function VideoFrame() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black p-4">
            {/* Full-Screen Video Frame */}
            <div className="relative w-full h-screen bg-black overflow-hidden m-4 rounded-3xl">
                <video
                    src="https://www.apple.com/105/media/us/mac/family/2024/b0f6d595-f4dd-4393-8316-102be97a5d1b/anim/welcome/large.mp4" // Replace with your actual video source
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
            </div>

        </div>

    );
}
