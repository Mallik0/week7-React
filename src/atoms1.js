import { atom, selector } from "recoil";

export const myNetworkAtom = atom({
    key: "myNetworkAtom",
    default: 102
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 1
})
export const messagesAtom = atom({
    key: "messagesAtom",
    default: 10
})
export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 12
})


export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const myNetworkSelector = get(myNetworkAtom);
        const jobsAtomSelector = get(jobsAtom);
        const messagesAtomSelector = get(messagesAtom);
        const notificationsAtomSelector = get(notificationsAtom);

        return myNetworkSelector + jobsAtomSelector + messagesAtomSelector + notificationsAtomSelector;
    }
})