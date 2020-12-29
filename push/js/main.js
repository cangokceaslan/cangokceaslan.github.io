if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./firebase-messaging-sw.js')
        .then(function (registration) {
            console.log("Service Worker Registered");
            messaging.useServiceWorker(registration);
        });
}
navigator.serviceWorker.register('./firebase-messaging-sw.js');

function showNotification(obj) {
    Notification.requestPermission(function (result) {
        if (result === 'granted') {
            navigator.serviceWorker.getRegistration('/firebase-cloud-messaging-push-scope').then(function (registration) {
                console.log(obj.body)
                registration.showNotification(obj.title, {
                    body: obj.body,
                    icon: obj.icon,
                    vibrate: [200, 100, 200, 100, 200, 100, 200],
                    tag: 'cangokceaslan'
                });
            });
        }
    });
}
const messaging = firebase.messaging();
messaging
    .requestPermission()
    .then(function () {

        messaging.getToken().then(function (currentToken) {
            console.log(currentToken);
            document.write(currentToken);
        }).catch(function (err) {
            console.log('hata oluştu', err);

        });
        messaging.onMessage(function (payload) {
            var obj = JSON.parse(payload.data.notification);
            var notification = new Notification(obj.title,
                {
                    icon: obj.icon,
                    body: obj.body,
                    vibrate: [200, 100, 200, 100, 200, 100, 200],
                    tag: 'cangokceaslan'
                });
            console.log(obj)
            //showNotification(obj)
        });
        console.log('Yetki izni verildi.');
    });