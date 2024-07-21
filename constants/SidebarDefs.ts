import images from "@/public/icons"

const MainItems = [
    {
        label: "Home",
        link: "/",
        icon: images.home
    },
    {
        label: "Popular",
        link: "/popular",
        icon: images.popular
    }
]

const TopicItems = [
    {
        label: "Viral",
        icon: images.viral
    },
    {
        label: "Games",
        icon: images.games
    },
    {
        label: "Q&As",
        icon: images.questions
    },
    {
        label: "Technology",
        icon: images.tech
    },
    {
        label: "Pop Culture",
        icon: images.star
    },
    {
        label: "Movies & TV",
        icon: images.movies
    }
]

const ResourceItems = [
    {
        label: "About",
        icon: images.about
    },
    {
        label: "Help",
        icon: images.help
    }
]

const FooterItems = [
    {
        label: "Content Policy",
        icon: images.content
    }, 
    {
        label: "Privacy Policy",
        icon: images.privacy
    },
    {
        label: "User Agreement",
        icon: images.userAgree
    },  
]

export {
    MainItems,
    TopicItems,
    ResourceItems,
    FooterItems
}