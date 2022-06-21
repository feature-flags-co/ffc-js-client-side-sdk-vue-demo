export const flagsDefaultValues = {
    // Set default values for all the flags which would be used
    // Even thought it should never happen, this makes sure that the app can still be running even if the network connection was lost between the client and the ffc server
    // Be aware, this is not necessary, you can leave the object empty.
}

export const option = {
    secret: "YThmLWRmZjUtNCUyMDIxMDkxNzA3NTYyMV9fMl9fMjJfXzExNl9fZGVmYXVsdF82NTM3Mg==", // replace with your won secret
    anonymous: false,
    user: { // you can keep this
        id: 'my-user',
        userName: 'my user',
        email: '',
        customizedProperties: [
            {
                "name": "sex",
                "value": "male"
            }]
    },
    devModePassword: 'thisisademo'
}




