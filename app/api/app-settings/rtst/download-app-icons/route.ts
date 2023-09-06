import { NextResponse } from 'next/server';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const bundleIds = ["com.burbn.barcelona", "com.facebook.Facebook", "com.zhiliaoapp.musically", "com.atebits.Tweetie2", "com.burbn.instagram", "com.apple.weather", "ai.moneycoach.StopWatch", "com.duuro.moneyCoach", "ai.moneyspaces", "net.whatsapp.WhatsApp", "ph.telegra.Telegraph", "com.facebook.Messenger", "com.hammerandchisel.discord", "AlexisBarreyat.BeReal", "org.whispersystems.signal", "com.viber", "com.grindrguy.grindrx", "xyz.blueskyweb.app", "ch.threema.iapp", "com.einnovation.temu", "com.hbo.hbonow", "com.google.ios.youtube", "com.toyopagroup.picaboo", "com.amazon.avod", "com.roblox.robloxmobile", "com.spotify.client", "com.netflix.Netflix", "com.amazon.Amazon", "com.reddit.Reddit", "com.pinterest", "com.nike.omega", "com.hulu.plus", "com.adrise.tubitv", "com.peacocktv.peacock", "com.disney.disneyplus", "com.kiloo.subwaysurf", "com.cardify.tinder", "com.viacomcbs.ParamountPlus", "tv.twitch", "com.innersloth.amongus", "com.linkedin.LinkedIn", "com.bumble.app", "com.midasplayer.apps.candycrushsaga", "com.crunchyroll.iphone", "com.nianticlabs.pokemongo", "com.tencent.ig", "co.hinge.app", "com.activision.callofduty.shooter", "com.supercell.magic", "com.supercell.clashroyale", "com.plarium.raidlegends", "com.dreamgames.match3", "com.marvel.snap", "com.apple.mobilesafari", "com.apple.MobileSMS", "com.apple.mobilemail", "com.apple.tv", "com.apple.stocks", "com.apple.podcasts", "com.apple.mobileslideshow", "com.apple.news", "com.apple.mobilegarageband", "com.apple.Fitness", "com.apple.iBooks", "com.miHoYo.GenshinImpact", "com.HoYoverse.hkrpgoversea", "com.plarium.mechlegion", "com.nexters.titanhunters", "com.wizards.mtga", "com.netmarble.marvelfr", "com.mobile-softing.coinmaster", "com.dts.freefireth", "com.lilithgame.roc.ios", "com.mobile.legends", "com.apple.AppStore", "com.apple.facetime", "com.apple.Health", "com.apple.Music", "com.google.Gmail", "com.google.Drive", "com.google.calendar", "com.google.Sheets", "com.google.Docs", "com.google.Maps", "com.google.Slides", "com.supercell.soil", "com.lireapp.smilingAlpaca", "com.substack.Substack", "com.synsion.Newsify", "com.thomasricouard.IceCubesApp", "com.tapbots.Ivory", "com.kik.chat", "com.reederapp.5.iOS"]

    const response = await downloadImages(bundleIds);
    return NextResponse.json({ message: "Downloaded images" });
}

async function downloadImages(inputProperties: string[]) {

    const apiUrl = "http://itunes.apple.com/lookup";

    for (const inputProperty of inputProperties) {
        try {
            // Make an API request to fetch JSON data
            const response = await axios.get(`${apiUrl}?bundleId=${inputProperty}`);
            const jsonData = response.data;

            // Extract the image URL from the JSON response
            const imageUrl = jsonData.results[0].artworkUrl512;

            // Download the image and save it locally
            const imageFileName = `${inputProperty}.jpg`; // You can use a unique name here
            const imagePath = path.join(process.cwd(), 'public', 'images', "app-icons", imageFileName);

            const imageResponse = await axios.get(imageUrl, { responseType: 'stream' });
            imageResponse.data.pipe(fs.createWriteStream(imagePath));

            console.log(`Downloaded ${imageFileName}`);
        } catch (error) {
            console.error(`Error processing ${inputProperty}: ${error.message}`);
        }
    }
}

