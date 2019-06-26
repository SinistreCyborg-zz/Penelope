import { Command, Penelope, EMBED_COLOR as color, APIs, fetch as $ } from "../..";
import { Message } from "eris";

export default class extends Command {

    constructor(client: Penelope) {
        super(client, {
            name: "thanos",
            description: "Get a quote that Thanos himself said.",
            category: "🎉 Fun"
        });
    }

    async exec(message: Message) {

        const { quote } = await $(APIs.THANOS)
            .then(res => res.json());

        
        return message.channel.createMessage({ embed: {
            title: "Thanos said:",
            color, description: `"${quote}"`,
            footer: {
                text: `Requested by ${message.author.username}#${message.author.discriminator}`,
                icon_url: message.author.avatarURL
            }
        } });

    }

}