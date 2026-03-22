import { Meteors } from "@/components/ui/meteors"


function page() {
    return (
        <div className='h-screen w-full flex flex-col justify-center'>
            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-2 text-white">
                About Us
            </h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-md text-center">
                We&apos;re here to help with any questions about our courses,
                programs, or events. Reach out and let us know how we can assist you
                in your musical journey.
            </p>
            <Meteors number={100} />
        </div>
    )
}

export default page