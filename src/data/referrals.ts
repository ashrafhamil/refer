export const referrals = [
    {
        appName: "Lazada",
        code: "LAZADA2024",
        image: "lazada.jpg",
        iosUrl: "https://apps.apple.com/app/lazada/id785385147",
        androidUrl:
            "https://play.google.com/store/apps/details?id=com.lazada.android",
        webUrl: "https://www.lazada.com",
    },
    {
        appName: "Lalamove",
        code: "LALAMOVE30",
        image: "lalamove.png",
        iosUrl: "https://apps.apple.com/app/lalamove/id897453371",
        androidUrl:
            "https://play.google.com/store/apps/details?id=com.lalamove.customer",
        webUrl: "https://www.lalamove.com",
    },
    {
        appName: "Luno",
        code: "LUNO50",
        image: "luno.jpg",
        iosUrl: "https://apps.apple.com/app/luno/id1201056497",
        androidUrl: "https://play.google.com/store/apps/details?id=co.luno.android",
        webUrl: "https://www.luno.com",
    },
    {
        appName: "TGV Cinemas",
        code: "TGV50",
        image: "tgv.jpg",
        iosUrl: "https://apps.apple.com/app/tgv-cinemas/id455003490",
        androidUrl: "https://play.google.com/store/apps/details?id=com.tgv.movies",
        webUrl: "https://www.tgv.com.my",
    },
    {
        appName: "GSC Cinemas",
        code: "GSC30",
        image: "gsc.jpeg",
        iosUrl: "https://apps.apple.com/app/gsc-cinemas/id591383414",
        androidUrl: "https://play.google.com/store/apps/details?id=my.com.gsc",
        webUrl: "https://www.gsc.com.my",
    },
    {
        appName: "Setel",
        code: "SETEL50",
        image: "setel.png",
        iosUrl: "https://apps.apple.com/app/setel/id1425242137",
        androidUrl: "https://play.google.com/store/apps/details?id=my.com.setel",
        webUrl: "https://www.setel.com",
    },
    {
        appName: "RedBus",
        code: "REDBUS20",
        image: "redbus.jpg",
        iosUrl: "https://apps.apple.com/app/redbus/id733712604",
        androidUrl:
            "https://play.google.com/store/apps/details?id=in.redbus.android",
        webUrl: "https://www.redbus.com",
    },
    {
        appName: "Grab",
        code: "GRAB123",
        image: "grab.png",
        iosUrl: "https://apps.apple.com/app/grab/id647268330",
        androidUrl: "https://play.google.com/store/apps/details?id=com.grab",
        webUrl: "https://www.grab.com",
    },
    {
        appName: "Airbnb",
        code: "AIRBNB123",
        image: "airbnb.jpg",
        iosUrl: "https://apps.apple.com/app/airbnb/id401626263",
        androidUrl:
            "https://play.google.com/store/apps/details?id=com.airbnb.android",
        webUrl: "https://www.airbnb.com",
    },
    {
        appName: "Shopee",
        code: "SHOPEE2024",
        image: "shopee.jpg",
        iosUrl: "https://apps.apple.com/app/shopee/id959841449",
        androidUrl: "https://play.google.com/store/apps/details?id=com.shopee.my",
        webUrl: "https://shopee.com",
    },
].map((item, index) => ({
    ...item,
    id: index + 1, // Assigns a simple sequential ID
}));
