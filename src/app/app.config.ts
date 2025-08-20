import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideRouter, withHashLocation } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideAnimations(),
    provideFirebaseApp(() => initializeApp({ "projectId": "da-bubble-72b40", "appId": "1:793095968263:web:ca9a89298370362d043ca2", "storageBucket": "da-bubble-72b40.firebasestorage.app", "apiKey": "AIzaSyDKbS5si0E18X2oa9s6dxQDX4vmAmh5V7s", "authDomain": "da-bubble-72b40.firebaseapp.com", "messagingSenderId": "793095968263" })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"da-bubble-72b40","appId":"1:793095968263:web:ca9a89298370362d043ca2","storageBucket":"da-bubble-72b40.firebasestorage.app","apiKey":"AIzaSyDKbS5si0E18X2oa9s6dxQDX4vmAmh5V7s","authDomain":"da-bubble-72b40.firebaseapp.com","messagingSenderId":"793095968263"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
}