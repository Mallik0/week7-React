import axios, { all } from "axios";
import { atom, selector } from "recoil";

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: selector({
        key: "notificationsAtomSelector",
        get: async () => {
            await new Promise(r => setTimeout(r, 5000)) //sleep for 5 seconds(artificial delay)
            const response = await axios.get("https://sum-server.100xdevs.com/notifications")
            return response.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notificationsAtom);

        return allNotifications.network + allNotifications.jobs + allNotifications.messages + allNotifications.notifications;
    }
})