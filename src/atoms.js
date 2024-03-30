import { all } from "axios";
import { atom, selector } from "recoil";

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: {
        network: 0,
        jobs: 0,
        messages: 0,
        notifications: 0
    }
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notificationsAtom);

        return allNotifications.network + allNotifications.jobs + allNotifications.messages + allNotifications.notifications;
    }
})