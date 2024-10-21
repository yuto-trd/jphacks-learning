"use server";

import { firebaseAdminApp } from "@/lib/firebase/server-app";

export async function sendNotification(formData: FormData) {
    const token = formData.get("token") as string;
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;

    const messaging = firebaseAdminApp.messaging();
    await messaging.send({
        token,
        notification: {
            title,
            body,
        }
    });
}