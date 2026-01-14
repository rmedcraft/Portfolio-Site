import TextCarousel from "@/components/text-carousel"

const taglines = [
    "Web Developer",
    "Math & Computer Science Tutor",
    "ESU Computer Science Organization President",
    "Computer Science & Math Major, Physics Minor",
    "Really Cool Guy",
    "Novice Chess Player",
    "Typescript Fanboy",
    "Keyboard Shortcut Fanatic",
    "Please Hire Me"
]

export default function Home() {
    return (
        <div className="container max-w-5xl mx-auto mt-5">
            <div>
                <h1 className="text-6xl w-1/2 font-bold flex flex-col">
                    <span>Hi, I'm </span>

                    {/* 
                        creating a text gradient animation 
                        https://medium.com/@samajabri2000/creating-an-animated-gradient-text-effect-with-tailwind-css-b47920698ff3
                    */}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300 dark:from-blue-600 dark:to-purple-500 bg-[length:200%] animate-text-gradient">Rowan Medcraft</span>

                    {/* tagline carousel underneath my name */}
                    <TextCarousel text={taglines} className="ms-1 mt-1 text-muted-foreground text-sm" />
                </h1>

            </div>
        </div>
    );
}
