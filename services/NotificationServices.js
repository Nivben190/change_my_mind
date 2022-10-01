// push notifaication to user when  like or comment on post
export async function sendPushNotification(expoPushToken, title, body) {
    const message = {
        to: expoPushToken,
        sound: 'default',
        title: title,
        body: body,
        data: { data: 'goes here' },
    };
      

    }