import "server-only";

// import { headers } from "next/headers";
// import { initializeServerApp } from "firebase/app";

// import { firebaseConfig } from "./config";
// import { getAuth } from "firebase/auth";
import admin from 'firebase-admin';
import serviceAccount from '../../serviceAccountKey.json';

export const firebaseAdminApp = admin.apps.length === 0 ? admin.initializeApp({
    credential: admin.credential.cert({
        projectId: serviceAccount.project_id,
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key
    })
}) : admin.apps[0] as admin.app.App;

// export async function getAuthenticatedAppForUser() {
//     const idToken = headers().get("Authorization")?.split("Bearer ")[1];

//     const firebaseServerApp = initializeServerApp(
//         firebaseConfig,
//         idToken
//             ? {
//                 authIdToken: idToken,
//             }
//             : {}
//     );

//     const auth = getAuth(firebaseServerApp);
//     await auth.authStateReady();

//     return { firebaseServerApp, currentUser: auth.currentUser };
// }